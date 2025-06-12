
import { AlertCircle, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FieldErrors {
  [key: string]: string | undefined;
}

interface ErrorType {
  message: string;
  type: 'error' | 'server' | 'database' | 'validation' | 'authentication';
  errors?: {
    [key: string]: string[];
  };
}

interface AuthFormProps {
  signup: boolean;
  onSubmit: (data: FormData & { role: string }) => Promise<void>;
  isClient: boolean;
  loading: boolean;
  error: ErrorType | string | null;
  onError?: (error: ErrorType) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ 
  signup, 
  onSubmit, 
  isClient, 
  loading, 
  error, 
  onError 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear field-specific errors when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const getInputClassName = (fieldName: string): string => {
    const baseClasses = "w-full h-12 border rounded-xl px-4 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed";
    
    // Check for field-specific errors from both client and server
    const hasError = fieldErrors[fieldName] || (
      typeof error === 'object' && 
      error !== null && 
      'errors' in error && 
      error.errors && 
      error.errors[fieldName]
    );
    
    if (hasError) {
      return `${baseClasses} border-red-300 focus:ring-red-500`;
    }
    
    return `${baseClasses} border-gray-200 focus:ring-black`;
  };

  const validateForm = (): FieldErrors => {
    const errors: FieldErrors = {};
    
    // Name validation for signup
    if (signup && !formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (signup && formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (signup && formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (signup) {
      const validation = validatePassword(formData.password);
      if (validation.strength === 'Weak') {
        errors.password = 'Password is too weak. Please ensure it meets all requirements.';
      }
    }
    
    return errors;
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      // Clear previous errors
      setFieldErrors({});
      
      // Client-side validation
      const validationErrors = validateForm();
      
      if (Object.keys(validationErrors).length > 0) {
        setFieldErrors(validationErrors);
        
        // Show general error message
        const errorMessages = Object.values(validationErrors).filter(Boolean) as string[];
        onError && onError({ 
          message: errorMessages.join('. '), 
          type: 'validation' 
        });
        return;
      }

      const submissionData = {
        ...formData,
        role: isClient ? 'client' : 'freelancer'
      };
      
      await onSubmit(submissionData);
      
    } catch (submitError) {
      console.error('Form submission error:', submitError);
      onError && onError({
        message: 'An unexpected error occurred. Please try again.',
        type: 'error'
      });
    }
  };

  // Password strength validation
  const validatePassword = (password: string) => {
    const checks = {
      length: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      noPersonalInfo: !formData.name || (
        !password.toLowerCase().includes(formData.name.toLowerCase()) && 
        !password.toLowerCase().includes(formData.email.toLowerCase())
      )
    };
    
    const score = Object.values(checks).filter(Boolean).length;
    let strength: 'Weak' | 'Medium' | 'Strong' = 'Weak';
    if (score >= 3) strength = 'Medium';
    if (score === 4) strength = 'Strong';
    
    return { checks, strength };
  };

  const passwordValidation = signup ? validatePassword(formData.password) : null;

  // Helper function to safely get error message
  const getErrorMessage = (error: ErrorType | string | null): string => {
    if (!error) return '';
    return typeof error === 'string' ? error : error.message;
  };

  // Helper function to safely get error type
  const getErrorType = (error: ErrorType | string | null): string => {
    if (!error || typeof error === 'string') return 'error';
    return error.type;
  };

  // Helper function to safely get field errors
  const getFieldError = (fieldName: string): string | undefined => {
    const clientError = fieldErrors[fieldName];
    if (clientError) return clientError;
    
    if (typeof error === 'object' && error !== null && 'errors' in error && error.errors) {
      const serverError = error.errors[fieldName];
      return serverError ? serverError[0] : undefined;
    }
    
    return undefined;
  };

  return (
    <div className="w-full max-w-md flex flex-col gap-6">
      {/* General Error Display */}
      {error && (
        <div className={`border rounded-xl p-4 flex items-center gap-3 ${
          getErrorType(error) === 'error' || getErrorType(error) === 'server' || getErrorType(error) === 'database'
            ? 'bg-red-50 border-red-200' 
            : getErrorType(error) === 'validation' || getErrorType(error) === 'authentication'
            ? 'bg-yellow-50 border-yellow-200'
            : 'bg-blue-50 border-blue-200'
        }`}>
          <AlertCircle className={`w-5 h-5 flex-shrink-0 ${
            getErrorType(error) === 'error' || getErrorType(error) === 'server' || getErrorType(error) === 'database'
              ? 'text-red-500' 
              : getErrorType(error) === 'validation' || getErrorType(error) === 'authentication'
              ? 'text-yellow-500'
              : 'text-blue-500'
          }`} />
          <p className={`text-sm ${
            getErrorType(error) === 'error' || getErrorType(error) === 'server' || getErrorType(error) === 'database'
              ? 'text-red-700' 
              : getErrorType(error) === 'validation' || getErrorType(error) === 'authentication'
              ? 'text-yellow-700'
              : 'text-blue-700'
          }`}>
            {getErrorMessage(error)}
          </p>
        </div>
      )}

      {/* Name Field */}
      {signup && (
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={loading}
            className={getInputClassName('name')}
            placeholder="Enter your full name"
          />
          {/* Field-specific error */}
          {getFieldError('name') && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {getFieldError('name')}
            </p>
          )}
        </div>
      )}
      
      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={loading}
          className={getInputClassName('email')}
          placeholder="Enter your email"
        />
        {/* Field-specific error */}
        {getFieldError('email') && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {getFieldError('email')}
          </p>
        )}
      </div>
      
      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            Password
          </label>
          {!signup && (
            <button type="button" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Forgot Password?
            </button>
          )}
        </div>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          disabled={loading}
          className={getInputClassName('password')}
          placeholder="Enter your password"
        />
        
        {/* Field-specific error */}
        {getFieldError('password') && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {getFieldError('password')}
          </p>
        )}
        
        {/* Password Strength Indicator */}
        {signup && passwordValidation && formData.password && (
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3">
              <Check className={`w-4 h-4 ${
                passwordValidation.strength === 'Strong' 
                  ? 'text-green-500' 
                  : passwordValidation.strength === 'Medium' 
                  ? 'text-yellow-500' 
                  : 'text-gray-300'
              }`} />
              <span className={`text-sm ${
                passwordValidation.strength === 'Strong' 
                  ? 'text-green-600' 
                  : passwordValidation.strength === 'Medium' 
                  ? 'text-yellow-600' 
                  : 'text-gray-600'
              }`}>
                Password Strength: {passwordValidation.strength}
              </span>
            </div>
            
            {/* Individual Password Requirements */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.checks.length ? 'text-green-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">At least 8 characters</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.checks.hasNumber ? 'text-green-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">Contains a number</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.checks.hasSymbol ? 'text-green-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">Contains a symbol</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.checks.noPersonalInfo ? 'text-green-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">Cannot contain your name or email</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full h-12 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <>
            {signup ? `Create ${isClient ? 'Client' : 'Freelancer'} Account` : "Sign In"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </>
        )}
      </button>
    </div>
  );
};

export default AuthForm;