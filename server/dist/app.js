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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, database_1.default)();
        console.log("Connected!");
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err);
        }
        else {
            console.log("nie wiem o co chodzi");
        }
        process.exit(1);
    }
}))();
//var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var indexRouter = require('./routes');
//var usersRouter = require('./routes/users');
dotenv_1.default.config();
const app = (0, express_1.default)();
//app.use(logger('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/tasks", taskRoutes_1.default);
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.get("/", (req, res) => {
    res.json({ message: "API EXPRESS+MONGO działa!!!" });
});
exports.default = app;
