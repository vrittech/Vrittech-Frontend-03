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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_model_1 = __importDefault(require("../models/users.model"));
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            const token = req.headers.authorization.split(" ")[1];
            const secretKey = (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : "";
            const validatedData = jsonwebtoken_1.default.verify(token, secretKey);
            const user = yield users_model_1.default.findOne({ email: validatedData.email });
            req.user = user;
            next();
        }
        else {
            return res.status(401).json({
                status: false,
                message: 'Unauthorized user'
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.authMiddleware = authMiddleware;
const authorize = (...roles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (roles.includes(req.user.role)) {
        next();
    }
    else {
        res.status(401).json({
            status: false,
            message: 'You are not a authorized user to access this resources'
        });
    }
});
exports.authorize = authorize;
//# sourceMappingURL=auth.middleware.js.map