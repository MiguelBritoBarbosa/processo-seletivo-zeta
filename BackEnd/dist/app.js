"use strict";
// Arquivo App onde se une todas as classes e funções da aplicação
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./src/database/connection");
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("./src/routes/home"));
const user_1 = __importDefault(require("./src/routes/user"));
const token_1 = __importDefault(require("./src/routes/token"));
const cors_1 = __importDefault(require("cors"));
const whiteList = ['http://localhost:5173', 'http://35.198.60.120'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use((0, cors_1.default)(corsOptions));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use('/api/', home_1.default);
        this.app.use('/api/users/', user_1.default);
        this.app.use('/api/token/', token_1.default);
    }
}
exports.default = new App().app;
