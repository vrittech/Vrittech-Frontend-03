"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const firebase_admin_1 = require("firebase-admin");
const router = express_1.default.Router();
router.post('/register', users_controller_1.signup);
router.post('/login', users_controller_1.signin);
router.get('/me', firebase_admin_1.auth, users_controller_1.getInfo);
exports.default = router;
//# sourceMappingURL=user.routes.js.map