import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import MainRouter from './routers/GameRouter';
import AwardRouter from './routers/AwardRouter';
import PlayerRouter from './routers/PlayerRouter';
import pool from './dbconfig/dbconnector';
import cors from 'cors';
import PicturesController from './controllers/PicturesController';
import Bot from './bot/bot';

class Server {
    private app;
    private bot;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
        this.bot = new Bot();
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
        this.app.use('/award', AwardRouter);
        this.app.use('/player', PlayerRouter);
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