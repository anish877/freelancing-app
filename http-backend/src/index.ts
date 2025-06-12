import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { rateLimit } from 'express-rate-limit';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './routes/auth.route';
// import roomRoutes from './routes/rooms';
import { PrismaClient } from "./generated/prisma"; // FIXED path

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function connectToDatabase() {
  try {
    await prisma.$connect();
    console.log("✅ Database connection established");
  } catch (err) {
    console.error("❌ Failed to connect to database:", err);
  }
}

if (!globalForPrisma.prisma) {
  connectToDatabase();
}

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

const app = express();

// Configure rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request body
app.use(cookieParser()); // Parse cookies
app.use(limiter); // Apply rate limiting

// Configure CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3001', // Frontend URL
  credentials: true, // Allow cookies with CORS
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files if needed
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// API routes
app.use('/api/auth', authRoutes);
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
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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