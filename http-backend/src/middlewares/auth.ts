// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import prisma from '../lib/prisma';

export const COOKIE_NAME = 'uuid';

export async function authenticate(req: Request, res: Response, next: NextFunction): Promise<void> {
  const token = req.cookies[COOKIE_NAME];
  
  if (!token) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  try {
    // Verify token
    const JWT_SECRET = process.env.JWT_SECRET as string;
    if (!JWT_SECRET) {
      console.error("JWT_SECRET is not defined in environment variables");
      res.status(500).json({ message: "Server configuration error" });
      return;
    }
    
    const decoded = verify(token, JWT_SECRET) as { id: string };

    // Find user in database
    const user = await prisma.user.findUnique({ 
      where: { id: decoded.id },
      select: { 
        id: true, 
        name: true, 
        email: true, 
        role: true, 
        company: true 
      }
    });

    if (!user) {
      res.clearCookie(COOKIE_NAME);
      res.status(401).json({ message: "Invalid token - user not found" });
      return;
    }

    // Add user to request object
    (req as any).user = user;
    
    next();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Token Verification Error:", error.message);
      
      // Handle specific JWT errors
      if (error.name === 'TokenExpiredError') {
        res.clearCookie(COOKIE_NAME);
        res.status(401).json({ message: "Token expired" });
        return;
      }
      
      if (error.name === 'JsonWebTokenError') {
        res.clearCookie(COOKIE_NAME);
        res.status(401).json({ message: "Invalid token format" });
        return;
      }
    }
    
    // Generic error response for other errors
    res.clearCookie(COOKIE_NAME);
    res.status(401).json({ message: "Authentication failed" });
  }
}

/**
 * Role-based authorization middleware
 * @param allowedRoles Array of roles that are allowed to access the endpoint
 */
export function authorize(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    
    if (!user) {
      return res.status(401).json({ message: "Authentication required" });
    }
    
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    
    next();
  };
}