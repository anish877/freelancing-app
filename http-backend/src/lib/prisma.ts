import { PrismaClient } from "../generated/prisma"; // FIXED path

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

export default prisma;
