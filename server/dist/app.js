"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var indexRouter = require('./routes');
//var usersRouter = require('./routes/users');
dotenv_1.default.config();
const app = (0, express_1.default)();
//app.use(logger('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.get("/", (req, res) => {
    res.json({ message: "API EXPRESS+MONGO działa!!!" });
});
exports.default = app;
