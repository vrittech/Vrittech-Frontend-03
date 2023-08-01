"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courses_controller_1 = require("../controllers/courses.controller");
const multer_middleware_1 = require("../middlewares/multer.middleware");
const router = express_1.default.Router();
router.post('/', multer_middleware_1.upload.array('photo', 12), courses_controller_1.createCourses);
router.get('/', courses_controller_1.getCourses);
router.delete('/:id', courses_controller_1.deleteCourse);
router.get('/:id', courses_controller_1.getCourseById);
router.patch('/:id', courses_controller_1.editCourses);
exports.default = router;
//# sourceMappingURL=courses.routes.js.map