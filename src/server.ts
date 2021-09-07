import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import MainRouter from './routers/GameRouter';
import pool from './dbconfig/dbconnector';
import cors from 'cors';
import PicturesController from './controllers/PicturesController';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: '1mb' }));
        this.app.use(cors({
            origin: "*"
        }));
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err);
            console.log('Connected');
        });
    }

    private routerConfig() {
        this.app.use('/game', MainRouter);
        this.app.use('/pictures/:filename', new PicturesController().get)
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;