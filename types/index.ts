export interface User {
    id: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    email: string;
  }
  
export interface NavbarProps {
    brandName?: string;
    onLoginClick?: () => void;
    onSignupClick?: () => void;
  }
  
export interface AuthResponse {
    token: string;
    user: User;
    message?: string;
  }
  
export interface SignupData {
    email: string;
    password: string;
    name?: string;
    firstName?: string;
    lastName?: string;
  }
  
export interface LoginData {
    email: string;
    password: string;
  }