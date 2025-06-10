'use client';
import Navbar from "@/components/layout/navBar";
import RoleSelector from "@/components/loginSignup/Current";
import AuthForm from "@/components/loginSignup/Form";
import { useState } from "react";

const AuthApp = ({ initialMode = 'signup' }) => {
    const [isClient, setIsClient] = useState(true);
    const [currentView, setCurrentView] = useState(initialMode);
  
    const handleSubmit = (event: { currentTarget: { formData: any; }; }) => {
        const formData = event.currentTarget.formData;
        console.log('Form submitted:', {
          name: formData.get('name'),
          email: formData.get('email'),
          password: formData.get('pass'),
          role: formData.get('role')
        });
        // Handle actual form submission here
      };
  
    return (
      <div className="min-h-screen bg-white">
        <Navbar 
          brandName="futurejob"
          onLoginClick={() => setCurrentView('login')}
          onSignupClick={() => setCurrentView('signup')}
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
                <RoleSelector isClient={isClient} setIsClient={setIsClient} />
              </div>
            )}
  
            {/* Auth Form */}
            <AuthForm 
              signup={currentView === 'signup'} 
              onSubmit={handleSubmit}
              isClient={isClient}
            />
  
            {/* Switch between login/signup */}
            <div className="text-center">
              <p className="text-gray-600">
                {currentView === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => setCurrentView(currentView === 'signup' ? 'login' : 'signup')}
                  className="text-black font-medium hover:underline"
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