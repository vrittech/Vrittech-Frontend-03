"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_middleware_1 = require("../middlewares/multer.middleware");
const lecture_controller_1 = require("../controllers/lecture.controller");
const router = express_1.default.Router();
router.post('/', multer_middleware_1.upload.single('video'), lecture_controller_1.createLecture);
router.get('/', lecture_controller_1.getLecture);
router.patch('/:id', multer_middleware_1.upload.single('video'), lecture_controller_1.editLecture);
router.get('/:id', lecture_controller_1.getLectureById);
router.delete('/:id', lecture_controller_1.deleteLecture);
exports.default = router;
//# sourceMappingURL=lecture.routes.js.map