"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_config_1 = require("./config/db.config");
const index_1 = __importDefault(require("./routes/index"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const passport_middleware_1 = require("./middlewares/passport.middleware");
const cors_1 = __importDefault(require("cors"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const initializeFirebase_1 = __importDefault(require("./firebase/initializeFirebase"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
//initialize a socket io server instance
const io = new socket_io_1.Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
});
(0, db_config_1.dbConnection)();
(0, initializeFirebase_1.default)();
app.use((0, express_session_1.default)({
    secret: 'test123#',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
}));
(0, passport_middleware_1.passportInitialize)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(index_1.default);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8085;
// Add socket io event handling
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    //data refers to room id sent from frontend
    socket.on('join_room', (data) => {
        socket.join(data);
        console.log(`User with id ${socket.id} joined room: ${data}`);
    });
    //in this case, data refers to message sent from client -> object
    socket.on('send_message', (data) => {
        //data base save message here
        socket.to(data.room).emit('receive_message', data);
    });
    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id);
    });
});
io.listen(9000);
app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});
//# sourceMappingURL=index.js.map