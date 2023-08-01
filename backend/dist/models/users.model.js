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
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        minLength: [5, 'Minimum length for full name should be 5']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    roles: {
        type: String,
        enum: ['student', 'instructor', 'admin'],
        default: 'student'
    },
    enrolledCourse: {
        type: [
            {
                type: mongoose_1.default.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ]
    },
    jwt: {
        type: String,
    },
    fcm: {
        type: String,
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    },
}, {
    timestamps: true
});
userSchema.pre('save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSalt(10);
        this.password = yield bcrypt_1.default.hash(this.password, salt);
    });
});
userSchema.methods.matchPassword = function (pass) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt_1.default.compare(pass, this.password);
    });
};
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=users.model.js.map