// In auth.utils.ts - Replace the existing functions with these improved versions

import { z } from "zod";
import jwt from 'jsonwebtoken';
import { UserRole } from "../generated/prisma";
import { PasswordValidation } from "../types/auth.types";

// Enhanced validation schemas with better error messages
export const signupSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .toLowerCase(),
  password: z.string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password must be less than 128 characters')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol'),
  role: z.enum(['client', 'freelancer'], {
    errorMap: () => ({ message: 'Role must be either client or freelancer' })
  })
});

export const loginSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .toLowerCase(),
  password: z.string()
    .min(1, 'Password is required')
});

// Enhanced JWT token generation with better error handling
export const generateToken = (userId: string, email: string, role: UserRole): string => {
  try {
    const secret = process.env.JWT_SECRET;
    
    if (!secret) {
      throw new Error('JWT_SECRET environment variable is not configured');
    }

    if (!userId || !email || !role) {
      throw new Error('Missing required parameters for token generation');
    }

    return jwt.sign(
      { userId, email, role },
      secret,
      { 
        expiresIn: '7d',
        issuer: 'your-app-name',
        audience: 'your-app-users'
      }
    );
  } catch (error) {
    console.error('Token generation error:', error);
    throw new Error('Failed to generate authentication token');
  }
};

// Enhanced password strength validation
export const validatePasswordStrength = (password: string, name: string, email: string): PasswordValidation => {
  try {
    if (!password) {
      return {
        checks: {
          length: false,
          hasNumber: false,
          hasSymbol: false,
          noPersonalInfo: false
        },
        strength: 'Weak',
        isValid: false
      };
    }

    // Normalize inputs for comparison
    const normalizedPassword = password.toLowerCase();
    const normalizedName = name?.toLowerCase() || '';
    const normalizedEmail = email?.toLowerCase() || '';
    const emailUsername = normalizedEmail.split('@')[0] || '';

    const checks = {
      length: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      noPersonalInfo: !normalizedPassword.includes(normalizedName) && 
                     !normalizedPassword.includes(normalizedEmail) &&
                     !normalizedPassword.includes(emailUsername)
    };
    
    const score = Object.values(checks).filter(Boolean).length;
    let strength: 'Weak' | 'Medium' | 'Strong' = 'Weak';
    
    if (score >= 3) strength = 'Medium';
    if (score === 4) strength = 'Strong';
    
    return { 
      checks, 
      strength, 
      isValid: score >= 3 
    };
  } catch (error) {
    console.error('Password validation error:', error);
    return {
      checks: {
        length: false,
        hasNumber: false,
        hasSymbol: false,
        noPersonalInfo: false
      },
      strength: 'Weak',
      isValid: false
    };
  }
};

// Additional utility functions for better error handling

// Validate JWT token
export const validateToken = (token: string): { isValid: boolean; payload?: any; error?: string } => {
  try {
    const secret = process.env.JWT_SECRET;
    
    if (!secret) {
      return { isValid: false, error: 'JWT configuration error' };
    }

    if (!token) {
      return { isValid: false, error: 'No token provided' };
    }

    const payload = jwt.verify(token, secret);
    return { isValid: true, payload };
  } catch (error: any) {
    let errorMessage = 'Invalid token';
    
    if (error?.name === 'TokenExpiredError') {
      errorMessage = 'Token has expired';
    } else if (error?.name === 'JsonWebTokenError') {
      errorMessage = 'Invalid token format';
    } else if (error?.name === 'NotBeforeError') {
      errorMessage = 'Token not active yet';
    }
    
    return { isValid: false, error: errorMessage };
  }
};

// Sanitize user input
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};

// Rate limiting helper (to be used with middleware)
export const createRateLimitKey = (ip: string, endpoint: string): string => {
  return `rate_limit:${endpoint}:${ip}`;
};