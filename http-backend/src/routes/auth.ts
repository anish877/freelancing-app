import { Router, Request, Response } from 'express';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { authenticate, COOKIE_NAME } from '../middlewares/auth';
import { Role } from '../generated/prisma';

const router = Router();
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Use environment variable in production

// Cookie configuration
const cookieConfig = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production', // HTTPS only in production
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  sameSite: 'strict' as const
};

// Sign up route
router.post('/signup', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role, company } = req.body;
    
    // Validate required fields
    if (!name || !email || !password || !role) {
      res.status(400).json({ message: 'Missing required fields' });
      return 
    }
    
    // Validate role
    if (role !== Role.FREELANCER && role !== Role.CLIENT) {
      res.status(400).json({ message: 'Invalid role' });
      return 
    }
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      res.status(409).json({ message: 'User already exists with this email' });
      return 
    }
    
    // Hash password
    const hashedPassword = await hash(password, SALT_ROUNDS);
    
    // Create user in database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword, // Add password field to schema
        role: role as Role,
        company: company || null
      }
    });
    
    // Generate JWT token
    const token = sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });
    
    // Set cookie
    res.cookie(COOKIE_NAME, token, cookieConfig);
    
    // Return user data (excluding sensitive information)
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company
    });
    return 
    
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Failed to create user' });
    return 
  }
});

// Sign in route
router.post('/signin', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    // Validate required fields
    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required' });
      return 
    }
    
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return 
    }
    
    // Verify password
    const isPasswordValid = await compare(password, user.password);
    
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid email or password' });
      return 
    }
    
    // Generate JWT token
    const token = sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });
    
    // Set cookie
    res.cookie(COOKIE_NAME, token, cookieConfig);
    
    // Return user data (excluding sensitive information)
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company
    });
    return 
    
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ message: 'Authentication failed' });
    return 
  }
});

// Logout route
router.post('/logout', (req: Request, res: Response) => {
  res.clearCookie(COOKIE_NAME);
  res.status(200).json({ message: 'Logged out successfully' });

});

// Get current user route
router.get('/me', authenticate, (req: Request & { user?: any }, res: Response) => {
  // User is already attached to req by authenticate middleware
  const { id, name, email, role, company } = req.user;
  res.status(200).json({ id, name, email, role, company }); 
});

export default router;