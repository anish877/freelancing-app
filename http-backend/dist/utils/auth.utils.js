"use strict";
// In auth.utils.ts - Replace the existing functions with these improved versions
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateLimitKey = exports.sanitizeInput = exports.validateToken = exports.validatePasswordStrength = exports.generateToken = exports.loginSchema = exports.signupSchema = void 0;
const zod_1 = require("zod");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Enhanced validation schemas with better error messages
exports.signupSchema = zod_1.z.object({
    name: zod_1.z.string()
        .min(1, 'Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
    email: zod_1.z.string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address')
        .max(255, 'Email must be less than 255 characters')
        .toLowerCase(),
    password: zod_1.z.string()
        .min(1, 'Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(128, 'Password must be less than 128 characters')
        .regex(/\d/, 'Password must contain at least one number')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol'),
    role: zod_1.z.enum(['client', 'freelancer'], {
        errorMap: () => ({ message: 'Role must be either client or freelancer' })
    })
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address')
        .toLowerCase(),
    password: zod_1.z.string()
        .min(1, 'Password is required')
});
// Enhanced JWT token generation with better error handling
const generateToken = (userId, email, role) => {
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET environment variable is not configured');
        }
        if (!userId || !email || !role) {
            throw new Error('Missing required parameters for token generation');
        }
        return jsonwebtoken_1.default.sign({ userId, email, role }, secret, {
            expiresIn: '7d',
            issuer: 'your-app-name',
            audience: 'your-app-users'
        });
    }
    catch (error) {
        console.error('Token generation error:', error);
        throw new Error('Failed to generate authentication token');
    }
};
exports.generateToken = generateToken;
// Enhanced password strength validation
const validatePasswordStrength = (password, name, email) => {
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
        const normalizedName = (name === null || name === void 0 ? void 0 : name.toLowerCase()) || '';
        const normalizedEmail = (email === null || email === void 0 ? void 0 : email.toLowerCase()) || '';
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
        let strength = 'Weak';
        if (score >= 3)
            strength = 'Medium';
        if (score === 4)
            strength = 'Strong';
        return {
            checks,
            strength,
            isValid: score >= 3
        };
    }
    catch (error) {
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
exports.validatePasswordStrength = validatePasswordStrength;
// Additional utility functions for better error handling
// Validate JWT token
const validateToken = (token) => {
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return { isValid: false, error: 'JWT configuration error' };
        }
        if (!token) {
            return { isValid: false, error: 'No token provided' };
        }
        const payload = jsonwebtoken_1.default.verify(token, secret);
        return { isValid: true, payload };
    }
    catch (error) {
        let errorMessage = 'Invalid token';
        if ((error === null || error === void 0 ? void 0 : error.name) === 'TokenExpiredError') {
            errorMessage = 'Token has expired';
        }
        else if ((error === null || error === void 0 ? void 0 : error.name) === 'JsonWebTokenError') {
            errorMessage = 'Invalid token format';
        }
        else if ((error === null || error === void 0 ? void 0 : error.name) === 'NotBeforeError') {
            errorMessage = 'Token not active yet';
        }
        return { isValid: false, error: errorMessage };
    }
};
exports.validateToken = validateToken;
// Sanitize user input
const sanitizeInput = (input) => {
    if (typeof input !== 'string')
        return '';
    return input
        .trim()
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .substring(0, 1000); // Limit length
};
exports.sanitizeInput = sanitizeInput;
// Rate limiting helper (to be used with middleware)
const createRateLimitKey = (ip, endpoint) => {
    return `rate_limit:${endpoint}:${ip}`;
};
exports.createRateLimitKey = createRateLimitKey;
