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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma"); // FIXED path
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
exports.default = prisma;
