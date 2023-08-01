"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const path_1 = __importDefault(require("path"));
const initializeFirebaseApp = () => {
    const serviceAccount = path_1.default.join(`${__dirname}/config/e-learning-app-e1477-firebase-adminsdk-adugi-ff624c9bf8.json`);
    (0, app_1.initializeApp)({
        credential: firebase_admin_1.default.credential.cert(serviceAccount)
    });
};
exports.default = initializeFirebaseApp;
//# sourceMappingURL=initializeFirebase.js.map