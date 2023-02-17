// Arquivo App onde se une todas as classes e funções da aplicação

import dotenv from 'dotenv';
dotenv.config();

import './src/database/connection';
import express from 'express';
import homeRoutes from './src/routes/home';
import userRoutes from './src/routes/user';
import tokenRoutes from './src/routes/token';

class App {
    declare app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/token/', tokenRoutes);
    }
}

export default new App().app;
