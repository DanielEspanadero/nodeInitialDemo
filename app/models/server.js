const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.usersPath = '/user';
        this.uploadPath = '/upload';

        // Middlewares
        this.middlewares();

        // Routes of my app
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Reading and parsing the body
        this.app.use(express.json())
    };

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
        this.app.use(this.uploadPath, require('../routes/upload'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening in the port ${this.port}`);
        })
    };




};

module.exports = Server;