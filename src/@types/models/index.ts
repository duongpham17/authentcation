import { Request } from 'express';
import { IUsersApi } from '../../master/models/users';

export interface InjectUserToRequest extends Request {
    user: IUsersApi
}