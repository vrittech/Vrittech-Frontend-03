"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const courseSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructorId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    enrolledStudents: {
        type: [
            {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    sections: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Section'
        }],
    categories: [{ type: String }],
    content: [{ type: String }],
}, {
    timestamps: true
});
const Course = mongoose_1.default.model('Course', courseSchema);
exports.default = Course;
//# sourceMappingURL=courses.model.js.map