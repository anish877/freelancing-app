"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = exports.login = exports.signup = void 0;
const auth_utils_1 = require("../utils/auth.utils");
const prisma_1 = require("../generated/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const zod_1 = require("zod");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new prisma_1.PrismaClient();
// In auth.controller.ts - Replace the existing functions with these improved versions
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const validatedData = auth_utils_1.signupSchema.parse(req.body);
        const { name, email, password, role } = validatedData;
        // Additional password validation
        const passwordValidation = (0, auth_utils_1.validatePasswordStrength)(password, name, email);
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
        console.log("HI");
        const existingUser = yield prisma.user.findUnique({
            where: { email }
        });
        console.log("User: ", existingUser);
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
        const hashedPassword = yield bcryptjs_1.default.hash(password, saltRounds);
        // Convert role to match Prisma enum
        const userRole = role === 'client' ? prisma_1.UserRole.CLIENT : prisma_1.UserRole.FREELANCER;
        // Create user
        const newUser = yield prisma.user.create({
            data: Object.assign(Object.assign({ name,
                email, password: hashedPassword, role: userRole }, (userRole === prisma_1.UserRole.FREELANCER && {
                isVetted: false,
                bio: null,
                developerType: null,
                hourlyRate: null,
                portfolioUrl: null
            })), (userRole === prisma_1.UserRole.CLIENT && {
                companyName: null,
                stripeCustomerId: null
            })),
            select: Object.assign(Object.assign({ id: true, name: true, email: true, role: true, createdAt: true, avatar: true }, (userRole === prisma_1.UserRole.FREELANCER && {
                bio: true,
                developerType: true,
                isVetted: true,
                hourlyRate: true,
                portfolioUrl: true
            })), (userRole === prisma_1.UserRole.CLIENT && {
                companyName: true
            }))
        });
        // Generate JWT token
        const token = (0, auth_utils_1.generateToken)(newUser.id, newUser.email, newUser.role);
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                user: newUser,
                token
            }
        });
    }
    catch (error) {
        console.error('Signup error:', error);
        if (error instanceof zod_1.z.ZodError) {
            // Extract field-specific errors
            const fieldErrors = error.errors.reduce((acc, err) => {
                const field = err.path[0];
                if (!acc[field])
                    acc[field] = [];
                acc[field].push(err.message);
                return acc;
            }, {});
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: fieldErrors,
                type: 'validation'
            });
            return;
        }
        // Handle Prisma-specific errors
        if ((error === null || error === void 0 ? void 0 : error.code) === 'P2002') {
            res.status(409).json({
                success: false,
                message: 'User with this email already exists',
                type: 'conflict'
            });
            return;
        }
        // Handle database connection errors
        if ((error === null || error === void 0 ? void 0 : error.code) === 'P1001') {
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
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate request body
        const validatedData = auth_utils_1.loginSchema.parse(req.body);
        const { email, password } = validatedData;
        // Find user by email with password
        const user = yield prisma.user.findUnique({
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
            isPasswordValid = yield bcryptjs_1.default.compare(password, user.password);
        }
        catch (bcryptError) {
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
        const { password: _ } = user, userWithoutPassword = __rest(user, ["password"]);
        // Generate JWT token
        const token = (0, auth_utils_1.generateToken)(user.id, user.email, user.role);
        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                user: userWithoutPassword,
                token
            }
        });
    }
    catch (error) {
        console.error('Login error:', error);
        if (error instanceof zod_1.z.ZodError) {
            const fieldErrors = error.errors.reduce((acc, err) => {
                const field = err.path[0];
                if (!acc[field])
                    acc[field] = [];
                acc[field].push(err.message);
                return acc;
            }, {});
            res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: fieldErrors,
                type: 'validation'
            });
            return;
        }
        // Handle database connection errors
        if ((error === null || error === void 0 ? void 0 : error.code) === 'P1001') {
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
});
exports.login = login;
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.replace('Bearer ', '');
        if (!token) {
            res.status(401).json({
                success: false,
                message: 'No token provided',
                type: 'authentication'
            });
            return;
        }
        let decoded;
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
            decoded = jsonwebtoken_1.default.verify(token, secret);
        }
        catch (jwtError) {
            let message = 'Invalid token';
            if ((jwtError === null || jwtError === void 0 ? void 0 : jwtError.name) === 'TokenExpiredError') {
                message = 'Token has expired';
            }
            else if ((jwtError === null || jwtError === void 0 ? void 0 : jwtError.name) === 'JsonWebTokenError') {
                message = 'Invalid token format';
            }
            res.status(401).json({
                success: false,
                message,
                type: 'authentication'
            });
            return;
        }
        const user = yield prisma.user.findUnique({
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
    }
    catch (error) {
        console.error('Auth verification error:', error);
        // Handle database connection errors
        if ((error === null || error === void 0 ? void 0 : error.code) === 'P1001') {
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
});
exports.me = me;
