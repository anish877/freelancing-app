"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
// POST /api/auth/signup
router.post('/signup', (req, res) => { (0, auth_controller_1.signup)(req, res); });
// POST /api/auth/login
router.post('/login', (req, res) => { (0, auth_controller_1.login)(req, res); });
// GET /api/auth/me - Get current user info
router.get('/me', auth_middleware_1.authenticateToken, (req, res) => (0, auth_controller_1.me)(req, res));
exports.default = router;
