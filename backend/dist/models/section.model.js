"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const sectionSchema = new mongoose_1.default.Schema({
    title: String,
    lectures: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Lecture'
        }
    ]
}, {
    timestamps: true
});
const Section = mongoose_1.default.model('Section', sectionSchema);
exports.default = Section;
//# sourceMappingURL=section.model.js.map