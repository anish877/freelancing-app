import express, { Request, Response } from 'express';
import { login, me, signup } from '../controllers/auth.controller';
import { AuthenticatedRequest } from '../types/auth.types';
import { authenticateToken } from '../middlewares/auth.middleware';

const router = express.Router();

// POST /api/auth/signup
router.post('/signup', (req:Request,res:Response)=>{signup(req,res)});

// POST /api/auth/login
router.post('/login', (req:Request,res:Response)=>{login(req,res)});

// GET /api/auth/me - Get current user info
router.get('/me',authenticateToken, (req:AuthenticatedRequest,res:Response)=>me(req,res));

export default router;