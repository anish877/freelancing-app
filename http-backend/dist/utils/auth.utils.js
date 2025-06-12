"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePasswordStrength = exports.generateToken = exports.loginSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Validation schemas
exports.signupSchema = zod_1.default.object({
    name: zod_1.default.string().min(2, 'Name must be at least 2 characters'),
    email: zod_1.default.string().email('Invalid email format'),
    password: zod_1.default.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/\d/, 'Password must contain at least one number')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol'),
    role: zod_1.default.enum(['client', 'freelancer'], {
        errorMap: () => ({ message: 'Role must be either client or freelancer' })
    })
});
exports.loginSchema = zod_1.default.object({
    email: zod_1.default.string().email('Invalid email format'),
    password: zod_1.default.string().min(1, 'Password is required')
});
// Helper function to generate JWT token
const generateToken = (userId, email, role) => {
    return jsonwebtoken_1.default.sign({ userId, email, role }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '7d' });
};
exports.generateToken = generateToken;
// Helper function to validate password strength
const validatePasswordStrength = (password, name, email) => {
    const checks = {
        length: password.length >= 8,
        hasNumber: /\d/.test(password),
        hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        noPersonalInfo: !password.toLowerCase().includes(name.toLowerCase()) &&
            !password.toLowerCase().includes(email.toLowerCase())
    };
    const score = Object.values(checks).filter(Boolean).length;
    let strength = 'Weak';
    if (score >= 3)
        strength = 'Medium';
    if (score === 4)
        strength = 'Strong';
    return { checks, strength, isValid: score >= 3 };
};
exports.validatePasswordStrength = validatePasswordStrength;
