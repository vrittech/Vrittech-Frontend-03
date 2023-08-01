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
exports.deleteCourse = exports.getCourseById = exports.getCourses = exports.editCourses = exports.createCourses = void 0;
const courses_model_1 = __importDefault(require("../models/courses.model"));
const section_model_1 = __importDefault(require("../models/section.model"));
const lectures_model_1 = __importDefault(require("../models/lectures.model"));
const cloudinary_config_1 = __importDefault(require("../config/cloudinary.config"));
const fs_1 = __importDefault(require("fs"));
const users_model_1 = __importDefault(require("../models/users.model"));
const sendNotification_1 = __importDefault(require("../firebase/sendNotification"));
const createCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, duration, sections, categories, content } = req.body;
    const instructorId = req.user._id;
    try {
        const course = new courses_model_1.default({
            title,
            description,
            instructorId,
            price,
            duration,
            sections: [],
            categories,
            content
        });
        yield course.save();
        if (sections.length > 0) {
            for (let sectionData of sections) {
                const section = new section_model_1.default({
                    title: sectionData.title,
                    lectures: []
                });
                yield section.save();
                for (let lectureData of sectionData.lectures) {
                    const lecture = new lectures_model_1.default({
                        title: lectureData.title,
                        content: lectureData.content,
                        duration: lectureData.duration,
                    });
                    section.lectures.push(lecture._id);
                    yield lecture.save();
                }
                let results = [];
                for (let file of req.files) {
                    let result;
                    if (file.mimetype === 'image/jpeg'
                        || file.mimetype === 'image/png'
                        || file.mimetype === 'image/jpg') {
                        result = yield cloudinary_config_1.default.v2.uploader.upload(file.path);
                    }
                    else {
                        result = yield cloudinary_config_1.default.v2.uploader.upload(file.path, {
                            resource_type: 'video',
                            folder: 'videos'
                        });
                    }
                    results.push(result);
                }
                let resultIndex = 0;
                for (let lectureId of section.lectures) {
                    const lecture = yield lectures_model_1.default.findById(lectureId);
                    lecture.lectureUrl = results[resultIndex].secure_url;
                    yield lecture.save();
                    resultIndex++;
                }
                yield section.save();
                course.sections.push(section._id);
            }
            yield course.save();
            for (let file of req.files) {
                if (fs_1.default.existsSync(file.path)) {
                    fs_1.default.unlinkSync(file.path);
                }
            }
        }
        const users = yield users_model_1.default.find({ roles: 'student' });
        users.forEach((user) => {
            if (user.fcm) {
                console.log(user);
                (0, sendNotification_1.default)(user.fcm, `There is a new course available ${course.title}. Please check you app to add to cart.`);
            }
        });
        return res.status(201).json({
            status: true,
            message: 'Course created successfully',
            data: course
        });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: 'An error occured while creating this course',
            error
        });
    }
});
exports.createCourses = createCourses;
const editCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        const course = yield courses_model_1.default.findById(id);
        if (!course) {
            res.send('Not found course');
        }
        else {
            const updatedCourse = yield courses_model_1.default.findOneAndUpdate({ _id: id }, {
                $set: data
            }, {
                new: true
            });
            res.status(200).json({
                status: true,
                message: 'Course updated successfully',
                data: updatedCourse
            });
        }
    }
    catch (error) {
    }
});
exports.editCourses = editCourses;
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield courses_model_1.default.find({}).populate("instructorId");
        return res.status(200).json({
            status: true,
            message: 'Courses fetched',
            data: courses
        });
    }
    catch (error) {
    }
});
exports.getCourses = getCourses;
const getCourseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const course = yield courses_model_1.default.findById(id);
        if (!course) {
            res.send('Not found course');
        }
        else {
            res.status(200).json({
                status: true,
                message: 'Course fetched successfully',
                data: course
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCourseById = getCourseById;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        //use cloudinary destroy method
        const course = yield courses_model_1.default.findById(id);
        if (!course) {
            res.send('Not found course');
        }
        else {
            const sections = yield section_model_1.default.find({ _id: { $in: course.sections } });
            Promise.all(sections.map((section) => __awaiter(void 0, void 0, void 0, function* () {
                yield lectures_model_1.default.deleteMany({ _id: { $in: section.lectures } });
            })));
            yield section_model_1.default.deleteMany({ _id: { $in: course.sections } });
            yield courses_model_1.default.findOneAndDelete({ _id: id });
            res.status(200).json({
                status: true,
                message: 'Course deleted successfully'
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteCourse = deleteCourse;
//# sourceMappingURL=courses.controller.js.map