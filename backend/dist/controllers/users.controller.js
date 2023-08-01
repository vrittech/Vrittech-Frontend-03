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
exports.getInfo = exports.signin = exports.signup = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const currentUser = yield users_model_1.default.findOne({ email });
        if (!currentUser) {
            const user = new users_model_1.default(req.body);
            yield user.save();
            res.status(200).json({
                status: true,
                message: 'User created successfully',
                data: user
            });
        }
        else {
            return res.status(400).json({
                status: false,
                message: 'User is already registered',
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { email, password, fcm } = req.body;
        const user = yield users_model_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({
                status: false,
                message: 'Invalid user or password',
            });
        }
        else {
            const matchPass = yield user.matchPassword(password);
            if (matchPass) {
                const secretKey = (_a = process.env.JWT_SECRET_KEY) !== null && _a !== void 0 ? _a : '';
                const token = jsonwebtoken_1.default.sign({ email: user.email }, secretKey, {
                    expiresIn: '3d'
                });
                const updatedUser = yield users_model_1.default.findOneAndUpdate({
                    _id: user._id
                }, {
                    $set: {
                        jwt: token,
                        fcm
                    }
                }, {
                    new: true
                });
                return res.status(200).json({
                    status: true,
                    message: 'User logged in successfully',
                    data: {
                        jwt: updatedUser.jwt,
                        role: updatedUser.roles
                    }
                });
            }
            else {
                return res.status(401).json({
                    status: false,
                    message: 'Invalid user or password',
                });
            }
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.signin = signin;
const getInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            status: true,
            data: req.user
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getInfo = getInfo;
//# sourceMappingURL=users.controller.js.map