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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const express_rate_limit_1 = require("express-rate-limit");
// Load environment variables
dotenv_1.default.config();
// Import routes
const auth_route_1 = __importDefault(require("./routes/auth.route"));
// import roomRoutes from './routes/rooms';
const prisma_1 = require("./generated/prisma"); // FIXED path
const globalForPrisma = globalThis;
const prisma = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : new prisma_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            console.log("✅ Database connection established");
        }
        catch (err) {
            console.error("❌ Failed to connect to database:", err);
        }
    });
}
if (!globalForPrisma.prisma) {
    connectToDatabase();
}
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = prisma;
const app = (0, express_1.default)();
// Configure rate limiting
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(express_1.default.json()); // Parse JSON request body
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded request body
app.use((0, cookie_parser_1.default)()); // Parse cookies
app.use(limiter); // Apply rate limiting
// Configure CORS
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3001', // Frontend URL
    credentials: true, // Allow cookies with CORS
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Serve static files if needed
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));
}
// API routes
app.use('/api/auth', auth_route_1.default);
// app.use('/api/rooms', roomRoutes);
// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV
    });
});
// API documentation route
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'API Documentation',
        version: '1.0.0',
        endpoints: {
            auth: {
                signup: 'POST /api/auth/signup',
                signin: 'POST /api/auth/signin',
                logout: 'POST /api/auth/logout',
                me: 'GET /api/auth/me'
            },
            rooms: {
                create: 'POST /api/rooms',
                getAll: 'GET /api/rooms',
                getById: 'GET /api/rooms/:roomId'
            }
        }
    });
});
// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.join(__dirname, '../client/build', 'index.html'));
    });
}
// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});
// Error handler
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    // Don't expose error details in production
    const message = process.env.NODE_ENV === 'production'
        ? 'Internal server error'
        : err.message || 'Internal server error';
    res.status(err.status || 500).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`⚡️ HTTP server running on port ${PORT}`);
    console.log(`WebSocket server should be started separately`);
});
