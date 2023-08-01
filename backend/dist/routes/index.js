"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const courses_routes_1 = __importDefault(require("./courses.routes"));
const lecture_routes_1 = __importDefault(require("./lecture.routes"));
const stripe_routes_1 = __importDefault(require("./stripe.routes"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = express_1.default.Router();
router.use('/auth', auth_routes_1.default);
router.use('/users', user_routes_1.default);
router.use('/stripe', stripe_routes_1.default);
router.use('/courses', auth_middleware_1.authMiddleware, courses_routes_1.default);
router.use('/lectures', auth_middleware_1.authMiddleware, lecture_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map