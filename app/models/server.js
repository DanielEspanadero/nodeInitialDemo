const express = require('express');
const path = require('path');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.indexPath = '/';
        this.nivell1Path = '/nivell-1';
        this.nivell2Path = '/nivell-2';
        this.nivell3Path = '/nivell-3';
        this.usersPath = '/user';
        this.uploadPath = '/upload';

        // Middlewares
        this.middlewares();

        // Routes of my app
        this.routes();
    }

    middlewares(){

        this.app.use(express.static(path.resolve(__dirname, '../public')));
        // CORS
        this.app.use(cors());

        // Reading and parsing the body
        this.app.use(express.json())
    };

    routes() {
        this.app.use(this.indexPath, require('../routes/index'));
        this.app.use(this.nivell1Path, require('../routes/nivell1'));
        this.app.use(this.nivell2Path, require('../routes/nivell2'));
        this.app.use(this.nivell3Path, require('../routes/nivell3'));
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