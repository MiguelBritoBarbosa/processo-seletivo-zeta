// Arquivo App onde se une todas as classes e funções da aplicação

import dotenv from 'dotenv';
dotenv.config();

import './src/database/connection';
import express from 'express';
import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/user';
import tokenRoutes from './src/routes/token';
import cors from 'cors';

const whiteList = ['http://localhost:5173', 'http://35.198.60.120'];

const corsOptions = {
    origin: function (origin: any, callback: any) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

class App {
    declare app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(cors(corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api/', homeRoutes);
        this.app.use('/api/users/', userRoutes);
        this.app.use('/api/token/', tokenRoutes);
    }
}

export default new App().app;
