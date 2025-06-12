import { Request } from "express";
import { UserRole } from "../generated/prisma";

export interface JWTPayload {
    userId: string;
    email: string;
    role: UserRole;
  }
  
export interface AuthenticatedRequest extends Request {
    user?: JWTPayload;
  }
  
export interface PasswordValidation {
    checks: {
      length: boolean;
      hasNumber: boolean;
      hasSymbol: boolean;
      noPersonalInfo: boolean;
    };
    strength: 'Weak' | 'Medium' | 'Strong';
    isValid: boolean;
}