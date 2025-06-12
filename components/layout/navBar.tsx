"use client"

import { apiService } from "@/service/apiService";
import { tokenManager } from "@/service/tokenService";
import { NavbarProps, User } from "@/types";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

// Update your NavbarProps type to include user
interface UpdatedNavbarProps extends NavbarProps {
  user?: User | null;
  onLogout?: () => void;
}

const Navbar: React.FC<UpdatedNavbarProps> = ({ 
  brandName = "futurejob", 
  onLoginClick, 
  onSignupClick, 
  user: propUser, // User passed as prop
  onLogout 
}) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(propUser || null);
  const [isLoading, setIsLoading] = useState<boolean>(!propUser); // Don't load if user is passed as prop
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user is passed as prop, use it
    if (propUser !== undefined) {
      setUser(propUser);
      setIsLoading(false);
    } else {
      // Otherwise, check auth status
      checkAuthStatus();
    }
  }, [propUser]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const checkAuthStatus = async (): Promise<void> => {
    try {
      const token = tokenManager.getToken();
      if (token) {
        const userData = await apiService.getProfile(token);
        if (userData.success) {
          setUser(userData.data.user);
        } else {
          tokenManager.removeToken();
          setUser(null);
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      tokenManager.removeToken();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = (): void => {
    setIsDropdownOpen(false);
    if (onLogout) {
      onLogout(); // Use parent's logout handler if provided
    } else {
      tokenManager.removeToken();
      setUser(null);
      router.push('/');
    }
  };

  const handleLoginClick = () => {
    if (onLoginClick) {
      onLoginClick();
    } else {
      router.push('/auth/login');
    }
  };

  const handleSignupClick = () => {
    if (onSignupClick) {
      onSignupClick();
    } else {
      router.push('/auth/signup');
    }
  };

  const handleBrandClick = () => {
    if (user) {
      router.push('/dashboard'); // Go to dashboard if logged in
    } else {
      router.push('/'); // Go to landing page if not logged in
    }
  };

  const getInitials = (name: string): string => {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  if (isLoading) {
    return (
      <header className="border-b py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold cursor-pointer">
              {brandName}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }
    
  return (
    <header className="border-b py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div 
            className="text-2xl font-bold cursor-pointer hover:text-gray-700 transition-colors"
            onClick={handleBrandClick}
          >
            {brandName}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            // Logged in state - dropdown with user avatar
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {getInitials(user.name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email)}
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {user.name || user.firstName || user.email?.split('@')[0]}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    {user.role && (
                      <p className="text-xs text-gray-500 capitalize">{user.role.toLowerCase()}</p>
                    )}
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Not logged in state
            <>
              <button 
                onClick={handleLoginClick}
                className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Log in
              </button>
              <button 
                onClick={handleSignupClick}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign up
              </button>
            </>
          )}
          
          <button className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Help">
            <span className="rounded-full border w-6 h-6 flex items-center justify-center text-sm">?</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;