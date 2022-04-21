import express from 'express';
import 'dotenv/config';

import user from '../routes/user';
import upload from '../routes/upload';
import time from '../routes/time';
import error404 from '../routes/404';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.userPath = '/user';
        this.uploadPath = '/upload';
        this.timePath = '/time';
        this.error404 = '*';
        this.route();
    };

    route() {
        this.app.use(this.userPath, user);
        this.app.use(this.uploadPath, upload);
        this.app.use(this.timePath, time);
        this.app.use(this.error404, error404);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}.`)
        })
    };
};

export default Server;