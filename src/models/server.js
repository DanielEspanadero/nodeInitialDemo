const express = require('express');
require('dotenv').config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.uploadPath = '/upload';
        this.userPath = '/user';
        this.route();
    };

    route() {
        this.app.use(this.userPath, require('../routes/user'));
        this.app.use(this.uploadPath, require('../routes/upload'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}.`)
        })
    };
};


module.exports = Server;