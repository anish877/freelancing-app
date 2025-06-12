"use client"

import Navbar from "@/components/layout/navBar";
import RoleSelector from "@/components/loginSignup/Current";
import AuthForm from "@/components/loginSignup/Form";
import { apiService } from "@/service/apiService";
import { tokenManager } from "@/service/tokenService";
import { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthApp = ({ initialMode = 'signup' }) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(true);
  const [currentView, setCurrentView] = useState(initialMode);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = tokenManager.getToken();
    if (token) {
      // Verify token and get user data
      apiService.getProfile(token)
      .then(response => {
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
        .catch((err) => {
          // Token is invalid or other error occurred
          console.warn('Token verification failed:', err);
          tokenManager.removeToken();
          
          // Handle different error types
          let errorMessage = 'Your session has expired. Please log in again.';
          let errorType = 'warning';
          
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

  const handleSubmit = async (formData: { email: any; password: any; }) => {
    setLoading(true);
    setError(null);

    try {
      let response;
      
      if (currentView === 'signup') {
        response = await apiService.signup(formData);
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
      
    } catch (err) {
        console.error('Auth error:', err);
        
        let errorMessage = 'An unexpected error occurred. Please try again.';
        let errorType = 'error';
        let fieldErrors = null;
      
        // Handle errors thrown by your API service (simple Error objects)
        if (err instanceof Error && err.message && !err.response) {
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
        else if (err.name === 'TypeError' && err.message.includes('fetch')) {
          errorMessage = 'Network error. Please check your internet connection and try again.';
          errorType = 'error';
        }
        // Handle other network-related errors
        else if (err.code === 'ECONNREFUSED' || 
                 err.code === 'NETWORK_ERROR' || 
                 err.message?.toLowerCase().includes('network')) {
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

  const handleError = (errorData) => {
    setError(errorData);
  };

  const clearError = () => {
    setError(null);
  };

  const handleLogout = () => {
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

  const handleViewChange = (newView: SetStateAction<string>) => {
    setCurrentView(newView);
    clearError();
    
    // Update URL based on the view
    if (newView === 'login') {
      router.push('/auth/login');
    } else if (newView === 'signup') {
      router.push('/auth/signup');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        brandName="futurejob"
        user={user} // Pass current user state (null when not logged in)
        onLoginClick={() => handleViewChange('login')}
        onSignupClick={() => handleViewChange('signup')}
      />
      
      <div className="flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {currentView === 'signup' ? 'Join futurejob' : 'Welcome back'}
            </h1>
            <p className="text-gray-600">
              {currentView === 'signup' 
                ? `Create your ${isClient ? 'client' : 'freelancer'} account to get started` 
                : 'Sign in to your account'
              }
            </p>
          </div>

          {/* Role Selector - only show on signup */}
          {currentView === 'signup' && (
            <div className="flex flex-col items-center space-y-4">
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
          />

          {/* Switch between login/signup */}
          <div className="text-center">
            <p className="text-gray-600">
              {currentView === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => handleViewChange(currentView === 'signup' ? 'login' : 'signup')}
                className="text-black font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
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