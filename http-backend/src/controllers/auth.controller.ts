import { Request, Response } from "express";
import { generateToken, loginSchema, signupSchema, validatePasswordStrength } from "../utils/auth.utils";
import { PrismaClient, UserRole } from "../generated/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { AuthenticatedRequest, JWTPayload } from "../types/auth.types";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// In auth.controller.ts - Replace the existing functions with these improved versions

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
      // Validate request body
      const validatedData = signupSchema.parse(req.body);
      const { name, email, password, role } = validatedData;
  
      // Additional password validation
      const passwordValidation = validatePasswordStrength(password, name, email);
      if (!passwordValidation.isValid) {
        res.status(400).json({
          success: false,
          message: 'Password does not meet security requirements',
          passwordChecks: passwordValidation.checks,
          type: 'validation'
        });
        return;
      }
  
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });
  
      if (existingUser) {
        res.status(409).json({
          success: false,
          message: 'User with this email already exists',
          type: 'conflict'
        });
        return;
      }
  
      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Convert role to match Prisma enum
      const userRole: UserRole = role === 'client' ? UserRole.CLIENT : UserRole.FREELANCER;
  
      // Create user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: userRole,
          // Set default values based on role
          ...(userRole === UserRole.FREELANCER && {
            isVetted: false,
            bio: null,
            developerType: null,
            hourlyRate: null,
            portfolioUrl: null
          }),
          ...(userRole === UserRole.CLIENT && {
            companyName: null,
            stripeCustomerId: null
          })
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          avatar: true,
          // Include role-specific fields
          ...(userRole === UserRole.FREELANCER && {
            bio: true,
            developerType: true,
            isVetted: true,
            hourlyRate: true,
            portfolioUrl: true
          }),
          ...(userRole === UserRole.CLIENT && {
            companyName: true
          })
        }
      });
  
      // Generate JWT token
      const token = generateToken(newUser.id, newUser.email, newUser.role);
  
      res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: {
          user: newUser,
          token
        }
      });
  
    } catch (error: any) {
      console.error('Signup error:', error);
      
      if (error instanceof z.ZodError) {
        // Extract field-specific errors
        const fieldErrors = error.errors.reduce((acc, err) => {
          const field = err.path[0] as string;
          if (!acc[field]) acc[field] = [];
          acc[field].push(err.message);
          return acc;
        }, {} as Record<string, string[]>);
  
        res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: fieldErrors,
          type: 'validation'
        });
        return;
      }
  
      // Handle Prisma-specific errors
      if (error?.code === 'P2002') {
        res.status(409).json({
          success: false,
          message: 'User with this email already exists',
          type: 'conflict'
        });
        return;
      }
  
      // Handle database connection errors
      if (error?.code === 'P1001') {
        res.status(503).json({
          success: false,
          message: 'Database connection failed. Please try again later.',
          type: 'database'
        });
        return;
      }
  
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        type: 'server'
      });
    }
  };
  
  export const login = async (req: Request, res: Response): Promise<void> => {
    try {
      // Validate request body
      const validatedData = loginSchema.parse(req.body);
      const { email, password } = validatedData;
  
      // Find user by email with password
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          password: true,
          createdAt: true,
          avatar: true,
          bio: true,
          developerType: true,
          isVetted: true,
          hourlyRate: true,
          portfolioUrl: true,
          companyName: true
        }
      });
  
      if (!user) {
        res.status(401).json({
          success: false,
          message: 'Invalid email or password',
          type: 'authentication'
        });
        return;
      }
  
      // Verify password
      let isPasswordValid = false;
      try {
        isPasswordValid = await bcrypt.compare(password, user.password);
      } catch (bcryptError) {
        console.error('Password verification error:', bcryptError);
        res.status(500).json({
          success: false,
          message: 'Authentication system error',
          type: 'server'
        });
        return;
      }
      
      if (!isPasswordValid) {
        res.status(401).json({
          success: false,
          message: 'Invalid email or password',
          type: 'authentication'
        });
        return;
      }
  
      // Remove password from response
      const { password: _, ...userWithoutPassword } = user;
  
      // Generate JWT token
      const token = generateToken(user.id, user.email, user.role);
  
      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
          user: userWithoutPassword,
          token
        }
      });
  
    } catch (error: any) {
      console.error('Login error:', error);
      
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce((acc, err) => {
          const field = err.path[0] as string;
          if (!acc[field]) acc[field] = [];
          acc[field].push(err.message);
          return acc;
        }, {} as Record<string, string[]>);
  
        res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: fieldErrors,
          type: 'validation'
        });
        return;
      }
  
      // Handle database connection errors
      if (error?.code === 'P1001') {
        res.status(503).json({
          success: false,
          message: 'Database connection failed. Please try again later.',
          type: 'database'
        });
        return;
      }
  
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        type: 'server'
      });
    }
  };
  
  export const me = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader?.replace('Bearer ', '');
      
      if (!token) {
        res.status(401).json({
          success: false,
          message: 'No token provided',
          type: 'authentication'
        });
        return;
      }
  
      let decoded: JWTPayload;
      try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
          console.error('JWT_SECRET environment variable is not set');
          res.status(500).json({
            success: false,
            message: 'Authentication system configuration error',
            type: 'server'
          });
          return;
        }
        
        decoded = jwt.verify(token, secret) as JWTPayload;
      } catch (jwtError: any) {
        let message = 'Invalid token';
        if (jwtError?.name === 'TokenExpiredError') {
          message = 'Token has expired';
        } else if (jwtError?.name === 'JsonWebTokenError') {
          message = 'Invalid token format';
        }
        
        res.status(401).json({
          success: false,
          message,
          type: 'authentication'
        });
        return;
      }
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          avatar: true,
          bio: true,
          developerType: true,
          isVetted: true,
          hourlyRate: true,
          portfolioUrl: true,
          companyName: true
        }
      });
  
      if (!user) {
        res.status(404).json({
          success: false,
          message: 'User not found',
          type: 'not_found'
        });
        return;
      }
  
      res.status(200).json({
        success: true,
        data: { user }
      });
  
    } catch (error: any) {
      console.error('Auth verification error:', error);
      
      // Handle database connection errors
      if (error?.code === 'P1001') {
        res.status(503).json({
          success: false,
          message: 'Database connection failed. Please try again later.',
          type: 'database'
        });
        return;
      }
      
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        type: 'server'
      });
    }
  };