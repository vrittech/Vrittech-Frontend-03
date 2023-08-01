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
exports.deleteLecture = exports.editLecture = exports.getLectureById = exports.getLecture = exports.createLecture = void 0;
const cloudinary_config_1 = __importDefault(require("../config/cloudinary.config"));
const lectures_model_1 = __importDefault(require("../models/lectures.model"));
const createLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, duration } = req.body;
        let result;
        if (req.file.mimetype === 'image/jpeg'
            || req.file.mimetype === 'image/png'
            || req.file.mimetype === 'image/jpg') {
            result = yield cloudinary_config_1.default.v2.uploader.upload(req.file.path);
        }
        else {
            result = yield cloudinary_config_1.default.v2.uploader.upload(req.file.path, {
                resource_type: 'video',
                folder: 'videos'
            });
        }
        let lecture = { title, content, duration, lectureUrl: result.secure_url };
        const lec = new lectures_model_1.default(lecture);
        yield lec.save();
        return res.status(201).json({
            status: true,
            message: 'Lecture created successfully',
            data: lec
        });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Error occured',
        });
    }
});
exports.createLecture = createLecture;
const getLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lectures = yield lectures_model_1.default.find({});
        res.status(200).json({
            status: true,
            message: 'Lecture fetched successfully',
            data: lectures
        });
    }
    catch (error) {
    }
});
exports.getLecture = getLecture;
const getLectureById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lecture = yield lectures_model_1.default.findById(req.params.id);
        return res.status(200).json({
            status: true,
            message: 'Lecture fetched successfully',
            data: lecture
        });
    }
    catch (error) {
    }
});
exports.getLectureById = getLectureById;
const editLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { isVideoEdited, title, content, duration } = req.body;
        const lecture = yield lectures_model_1.default.findById(id);
        if (!lecture) {
            return res.status(404).json({
                status: false,
                message: 'Lecture not found'
            });
        }
        else {
            if (isVideoEdited) {
                let result;
                if (req.file) {
                    //cloudinary destroy method here
                    if (req.file.mimetype === 'image/jpeg'
                        || req.file.mimetype === 'image/png'
                        || req.file.mimetype === 'image/jpg') {
                        result = yield cloudinary_config_1.default.v2.uploader.upload(req.file.path);
                    }
                    else {
                        result = yield cloudinary_config_1.default.v2.uploader.upload(req.file.path, {
                            resource_type: 'video',
                            folder: 'videos'
                        });
                    }
                    lecture.lectureUrl = result.secure_url;
                }
                lecture.title = title;
                lecture.content = content;
                lecture.duration = duration;
                const updatedLecture = yield lecture.save();
                return res.status(200).json({
                    status: true,
                    message: 'Lecture edited successfully',
                    data: updatedLecture
                });
            }
            else {
                lecture.title = title;
                lecture.content = content;
                lecture.duration = duration;
                const updatedLecture = yield lecture.save();
                return res.status(200).json({
                    status: true,
                    message: 'Lecture edited successfully',
                    data: updatedLecture
                });
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.editLecture = editLecture;
const deleteLecture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const lecture = yield lectures_model_1.default.findById(id);
        if (!lecture) {
            return res.status(404).json({
                status: false,
                message: 'Lecture not found'
            });
        }
        else {
            const deletedLec = yield lectures_model_1.default.findOneAndDelete({
                _id: id
            });
            if (deletedLec) {
                return res.status(200).json({
                    status: true,
                    message: 'Lecture deleted successfully'
                });
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteLecture = deleteLecture;
//# sourceMappingURL=lecture.controller.js.map