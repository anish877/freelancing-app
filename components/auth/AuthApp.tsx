"use client"

import Navbar from "@/components/layout/navBar";
import RoleSelector from "@/components/loginSignup/Current";
import AuthForm from "@/components/loginSignup/Form";
import { apiService } from "@/service/apiService";
import { tokenManager } from "@/service/tokenService";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Type definitions
interface User {
  id: string;
  email: string;
  role: 'client' | 'freelancer';
  name?: string;
  country?: string;
}

interface ErrorData {
  message: string;
  type: 'error' | 'warning' | 'validation';
  errors?: Record<string, string>;
}

interface FormData {
  email: string;
  password: string;
  name?: string;
  country?: string;
}

interface ApiResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
  message?: string;
}

interface ApiError extends Error {
  response?: {
    data?: {
      type?: string;
      message?: string;
    };
  };
  code?: string;
}

interface AuthAppProps {
  initialMode?: 'signup' | 'login';
}

// Email validation function for business emails
const validateBusinessEmail = (email: string): boolean => {
  const commonPersonalDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'live.com', 'msn.com', 'ymail.com', 'mail.com',
    'protonmail.com', 'zoho.com', 'rediffmail.com'
  ];
  
  const emailDomain = email.toLowerCase().split('@')[1];
  return !commonPersonalDomains.includes(emailDomain);
};

const AuthApp: React.FC<AuthAppProps> = ({ initialMode = 'signup' }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<'signup' | 'login'>(initialMode);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorData | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = tokenManager.getToken();
    if (token) {
      // Verify token and get user data
      apiService.getProfile(token)
      .then((response: ApiResponse) => {
        if (response.success) {
          setUser(response.data.user);
          // Always redirect to home page, not dashboard
          router.push('/');
        } else {
            // API returned unsuccessful response
            console.warn('Profile fetch unsuccessful:', response.message);
            tokenManager.removeToken();
            setError({ 
              message: 'Unable to verify your session. Please log in again.', 
              type: 'warning' 
            });
          }
        })
        .catch((err: ApiError) => {
          // Token is invalid or other error occurred
          console.warn('Token verification failed:', err);
          tokenManager.removeToken();
          
          // Handle different error types
          let errorMessage = 'Your session has expired. Please log in again.';
          let errorType: 'error' | 'warning' = 'warning';
          
          if (err.response?.data?.type === 'authentication') {
            errorMessage = 'Your session has expired. Please log in again.';
          } else if (err.response?.data?.type === 'database') {
            errorMessage = 'Unable to connect to server. Please try again later.';
            errorType = 'error';
          } else if (!err.response) {
            errorMessage = 'Network error. Please check your connection.';
            errorType = 'error';
          }
          
          setError({ message: errorMessage, type: errorType });
        });
    }
  }, [router]);

  const handleSubmit = async (formData: FormData): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Validate business email for clients during signup
      if (currentView === 'signup' && isClient && !validateBusinessEmail(formData.email)) {
        setError({
          message: 'Please use a business email address. Personal email providers like Gmail, Yahoo, etc. are not allowed for client accounts.',
          type: 'validation'
        });
        setLoading(false);
        return;
      }

      // Validate country field for clients during signup
      if (currentView === 'signup' && isClient && !formData.country?.trim()) {
        setError({
          message: 'Country is required for client accounts.',
          type: 'validation'
        });
        setLoading(false);
        return;
      }

      let response: ApiResponse;
      
      if (currentView === 'signup') {
        const signupData = {
          ...formData,
          role: isClient ? 'client' : 'freelancer'
        };
        response = await apiService.signup(signupData);
      } else {
        response = await apiService.login({
          email: formData.email,
          password: formData.password
        });
      }

      // Check if response is successful
      if (response.success) {
        // Store token and user data
        tokenManager.setToken(response.data.token);
        setUser(response.data.user);
        
        // Always redirect to home page after successful auth
        router.push('/');
      } else {
        // Handle unsuccessful response
        setError({ 
          message: response.message || 'Authentication failed', 
          type: 'error' 
        });
      }
      
    } catch (err: unknown) {
        console.error('Auth error:', err);
        
        let errorMessage = 'An unexpected error occurred. Please try again.';
        let errorType: 'error' | 'warning' | 'validation' = 'error';
        let fieldErrors: Record<string, string> | null = null;
      
        // Handle errors thrown by your API service (simple Error objects)
        if (err instanceof Error && err.message && !(err as ApiError).response) {
          errorMessage = err.message;
          
          // Determine error type based on the message content
          if (err.message.toLowerCase().includes('email already exists') || 
              err.message.toLowerCase().includes('already registered')) {
            errorType = 'warning';
          } else if (err.message.toLowerCase().includes('invalid credentials') || 
                     err.message.toLowerCase().includes('invalid email') ||
                     err.message.toLowerCase().includes('invalid password') ||
                     err.message.toLowerCase().includes('authentication failed')) {
            errorType = 'warning';
          } else if (err.message.toLowerCase().includes('validation') || 
                     err.message.toLowerCase().includes('required') ||
                     err.message.toLowerCase().includes('invalid format')) {
            errorType = 'validation';
          } else if (err.message.toLowerCase().includes('server error') ||
                     err.message.toLowerCase().includes('database')) {
            errorType = 'error';
          } else {
            errorType = 'warning'; // Default to warning for API errors
          }
        }
        // Handle fetch/network errors (when API service itself fails to make request)
        else if (err instanceof Error && err.name === 'TypeError' && err.message.includes('fetch')) {
          errorMessage = 'Network error. Please check your internet connection and try again.';
          errorType = 'error';
        }
        // Handle other network-related errors
        else if ((err as ApiError).code === 'ECONNREFUSED' || 
                 (err as ApiError).code === 'NETWORK_ERROR' || 
                 (err as Error).message?.toLowerCase().includes('network')) {
          errorMessage = 'Network error. Please check your internet connection and try again.';
          errorType = 'error';
        }
        // Handle any other unexpected errors
        else {
          errorMessage = 'An unexpected error occurred. Please try again.';
          errorType = 'error';
        }
        
        setError({ 
          message: errorMessage, 
          type: errorType,
          errors: fieldErrors
        });
      } finally {
        setLoading(false);
      }
  };

  const handleError = (errorData: ErrorData): void => {
    setError(errorData);
  };

  const clearError = (): void => {
    setError(null);
  };

  const handleLogout = (): void => {
    try {
      tokenManager.removeToken();
      setUser(null);
      setCurrentView('login');
      setError(null);
      router.push('/');
    } catch (err) {
      console.error('Logout error:', err);
      // Even if logout fails, clear the user state
      setUser(null);
      setCurrentView('login');
      router.push('/');
    }
  };

  const handleViewChange = (newView: SetStateAction<'signup' | 'login'>): void => {
    const view = typeof newView === 'function' ? newView(currentView) : newView;
    setCurrentView(view);
    clearError();
    
    // Update URL based on the view
    if (view === 'login') {
      router.push('/auth/login');
    } else if (view === 'signup') {
      router.push('/auth/signup');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar 
        brandName="futurejob"
        user={user}
        onLoginClick={() => handleViewChange('login')}
        onSignupClick={() => handleViewChange('signup')}
      />
      
      <div className="flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center bg-gradient-to-b from-white to-gray-50/50">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {currentView === 'signup' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    )}
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {currentView === 'signup' ? 'Join futurejob' : 'Welcome back'}
              </h1>
              <p className="text-gray-600 text-sm">
                {currentView === 'signup' 
                  ? `Create your ${isClient ? 'client' : 'freelancer'} account` 
                  : 'Sign in to continue'
                }
              </p>
            </div>

            {/* Content */}
            <div className="px-8 pb-8">
              {/* Role Selector - only show on signup */}
              {currentView === 'signup' && (
                <div className="mb-6">
                  <RoleSelector 
                    isClient={isClient} 
                    setIsClient={setIsClient}
                    disabled={loading} 
                  />
                </div>
              )}

              {/* Auth Form */}
              <AuthForm 
                signup={currentView === 'signup'}
                onSubmit={handleSubmit}
                isClient={isClient}
                loading={loading}
                error={error}
                onError={handleError}
                requireCountry={currentView === 'signup' && isClient}
              />
            </div>
          </div>

          {/* Switch between login/signup */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              {currentView === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => handleViewChange(currentView === 'signup' ? 'login' : 'signup')}
                className="text-indigo-600 font-medium hover:text-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {currentView === 'signup' ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthApp;