import express from 'express';
import security from './security';
import parser from './parser';
import port from './port';
import frontend from './frontend';
import routes from './routes';
import database from './database';

const app = express();

export default (): void => {
    
    security(app);

    parser(app, express);

    routes(app);

    database();

    frontend(app, express);

    port(app);

};