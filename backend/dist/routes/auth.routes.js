"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.get('/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/login/failed', (req, res) => {
    res.status(401).json({
        message: 'Unauthorized user'
    });
});
router.get('/google/callback', (req, res, next) => {
    passport_1.default.authenticate('google', (err, user) => {
        var _a;
        if (err) {
            return next(err);
        }
        const secretKey = (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : '';
        const token = jsonwebtoken_1.default.sign({ email: user["_json"].email }, secretKey, {
            expiresIn: '3d'
        });
        res.cookie('jwtToken', token);
        res.redirect(`${process.env.CLIENT_URL}/dashboard`);
    })(req, res, next);
});
exports.default = router;
//# sourceMappingURL=auth.routes.js.map