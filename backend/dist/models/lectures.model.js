"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const lectureSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    lectureUrl: {
        type: String
    }
}, {
    timestamps: true
});
const Lecture = mongoose_1.default.model('Lecture', lectureSchema);
exports.default = Lecture;
//# sourceMappingURL=lectures.model.js.map