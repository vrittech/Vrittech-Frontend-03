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
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const sendNotification = (fcm, message) => __awaiter(void 0, void 0, void 0, function* () {
    const notification = {
        token: fcm,
        notification: {
            title: 'New course alert',
            body: message
        }
    };
    const not = yield firebase_admin_1.default.messaging().send(notification);
    console.log(`Push notification sent ${not}`);
});
exports.default = sendNotification;
//# sourceMappingURL=sendNotification.js.map