import express from 'express';
import 'dotenv/config';

import user from '../routes/user';
import upload from '../routes/upload';
import time from '../routes/time';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.userPath = '/user';
        this.uploadPath = '/upload';
        this.timePath = '/time'
        this.route();
    };

    route() {
        this.app.use(this.userPath, user);
        this.app.use(this.uploadPath, upload);
        this.app.use(this.timePath, time);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}.`)
        })
    };
};

export default Server;