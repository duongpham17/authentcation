import {Express} from 'express';
import {corsPrivate} from '../@utils/cors';
import {errorMessage} from '../@utils/helper';
import master_api_routes from '../master/routes';

const routes = (app: Express) => {

    app.use(corsPrivate);

    master_api_routes(app);

    app.use(errorMessage);
};

export default routes;