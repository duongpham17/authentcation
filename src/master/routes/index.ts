import {Express} from 'express';

import authentications from './authentications';
import users from './users';

const endpoints = (app: Express) => {
    app.use('/api/authentications', authentications)
    app.use('/api/users',           users);
};

export default endpoints