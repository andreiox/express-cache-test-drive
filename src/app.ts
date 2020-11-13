import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { cacheMiddleware } from './middleware';
import { mainRouter as router } from './router';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        dotenv.config();

        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
        this.app.use(cacheMiddleware);
        this.app.use('/', router);
        this.app.use(this.errorHandling.bind(this));
    }

    private errorHandling(error: any, req: any, res: any, next: any) {
        if (!error.code || error.code > 599) {
            error.code = 500;
        }

        res.status(error.code).send(error);
        next();
    }
}

export default new App().app;
