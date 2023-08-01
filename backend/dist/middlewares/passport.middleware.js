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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.passportInitialize = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const users_model_1 = __importDefault(require("../models/users.model"));
const clientID = (_a = process.env.GOOGLE_CLIENT_ID) !== null && _a !== void 0 ? _a : '';
const clientSecret = (_b = process.env.GOOGLE_CLIENT_SECRET) !== null && _b !== void 0 ? _b : '';
const passportInitialize = () => {
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID,
        clientSecret,
        callbackURL: "/auth/google/callback"
    }, function (accessToken, refreshToken, profile, cb) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield users_model_1.default.findOne({ email: profile['_json'].email });
            if (existingUser) {
                cb(null, profile);
            }
            else {
                const data = {
                    fullName: profile['_json'].name,
                    email: profile['_json'].email,
                };
                const user = new users_model_1.default(data);
                yield user.save();
                cb(null, profile);
            }
        });
    }));
    passport_1.default.serializeUser((user, done) => {
        done(null, user);
    });
    passport_1.default.deserializeUser((user, done) => {
        done(null, user);
    });
};
exports.passportInitialize = passportInitialize;
exports.default = passport_1.default;
//# sourceMappingURL=passport.middleware.js.map