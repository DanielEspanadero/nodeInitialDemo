import express from 'express';
import { dbConnectMongo } from '../database/config-mongoose';
import sequelize from '../database/config-sequelize';

import routerPlayers from '../routes/players';
import routerLogin from '../routes/login';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();

        this.connectionDB()

        this.playersPath = '/players';
        this.loginPath = '/login';
        this.routes();

        this.listen()
    }

    async connectionDB() {
        if (process.env.DB === 'mongodb') {
            return await dbConnectMongo();
        } else if (process.env.DB === 'mysql'){
            await sequelize.authenticate();
            console.log('Database online MySQL');
        } else {
            throw new Error('Define the database (mongodb or mysql) in the environment variables (.env).')
        }
    };

    middlewares(){
        this.app.use(express.json());
    };

    routes() {
        this.app.use(this.playersPath, routerPlayers);
        this.app.use(this.loginPath, routerLogin);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenning on port ${this.port}`);
        });
    };
};

export default Server;