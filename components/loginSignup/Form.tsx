'use client'
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const AuthForm = ({ signup, onSubmit, isClient }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: ''
    });
  
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e: { preventDefault: () => void; currentTarget: any; }) => {
      e.preventDefault();
      if (onSubmit) {
        // Include role information in the form submission
        const submissionData = {
          ...formData,
          role: isClient ? 'client' : 'freelancer'
        };
        
        const mockForm = {
          currentTarget: {
            elements: {
              name: { value: formData.name },
              email: { value: formData.email },
              pass: { value: formData.password },
              role: { value: submissionData.role }
            }
          },
          preventDefault: () => {}
        };
        
        const mockFormData = {
          get: (key: string) => {
            if (key === 'name') return formData.name;
            if (key === 'email') return formData.email;
            if (key === 'pass') return formData.password;
            if (key === 'role') return submissionData.role;
            return null;
          }
        };
        
        const eventWithFormData = {
          ...e,
          currentTarget: {
            ...e.currentTarget,
            formData: mockFormData
          }
        };
        
        onSubmit(submissionData);
      }
    };
  
    // Password strength validation
    const validatePassword = (password: string) => {
      const checks = {
        length: password.length >= 8,
        hasNumber: /\d/.test(password),
        hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        noPersonalInfo: !formData.name || (!password.toLowerCase().includes(formData.name.toLowerCase()) && !password.toLowerCase().includes(formData.email.toLowerCase()))
      };
      
      const score = Object.values(checks).filter(Boolean).length;
      let strength = 'Weak';
      if (score >= 3) strength = 'Medium';
      if (score === 4) strength = 'Strong';
      
      return { checks, strength };
    };
  
    const passwordValidation = signup ? validatePassword(formData.password) : null;
  
    return (
      <div className="w-full max-w-md flex flex-col gap-6">
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
              className="w-full h-12 border border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>
        )}
        
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
            className="w-full h-12 border border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="pass" className="text-sm font-medium text-gray-700">
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
            id="pass"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full h-12 border border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your password"
          />
          
          {signup && passwordValidation && (
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.strength === 'Strong' ? 'text-green-500' : passwordValidation.strength === 'Medium' ? 'text-yellow-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">
                  Password Strength: {passwordValidation.strength}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.checks.noPersonalInfo ? 'text-green-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">Cannot contain your name or email</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.checks.length ? 'text-green-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">At least 8 characters</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className={`w-4 h-4 ${passwordValidation.checks.hasNumber && passwordValidation.checks.hasSymbol ? 'text-green-500' : 'text-gray-300'}`} />
                <span className="text-sm text-gray-600">Contains a number and symbol</span>
              </div>
            </div>
          )}
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full h-12 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          {signup ? `Create ${isClient ? 'Client' : 'Freelancer'} Account` : "Sign In"}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    );
  };

  export default AuthForm