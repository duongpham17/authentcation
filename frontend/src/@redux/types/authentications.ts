/*TYPES**************************************************************************************************************/
import { IUsersApi } from './users';

export interface ResponseType {
    [key: string]: any
};

export interface IAuthenticationsSignup {
    name: string,
    title: string,
    email: string
}
/*STATE**************************************************************************************************************/

export interface INITIALSTATE {
    user: IUsersApi | null,
    status: ResponseType,
    errors: ResponseType,
};

export type AuthenticationsObjectKeys = keyof INITIALSTATE

/*ACTION**************************************************************************************************************/

export enum TYPES {
    AUTHENTICATIONS_LOGIN            = "AUTHENTICATIONS_LOGIN",
    AUTHENTICATIONS_SIGNUP           = "AUTHENTICATIONS_SIGNUP",
    AUTHENTICATIONS_CODE             = "AUTHENTICATIONS_CODE",
    AUTHENTICATIONS_LOAD             = "AUTHENTICATIONS_LOAD",
    AUTHENTICATIONS_RESPONSE_ERROR   = "AUTHENTICATIONS_RESPONSE_ERROR",
    AUTHENTICATIONS_RESPONSE_STATUS  = "AUTHENTICATIONS_RESPONSE_STATUS",
    AUTHENTICATIONS_RESPONSE_CLEAR   = "AUTHENTICATIONS_RESPONSE_CLEAR",
    AUTHENTICATIONS_STATE_CLEAR      = "AUTHENTICATIONS_STATE_CLEAR",
};

interface Login {
    type: TYPES.AUTHENTICATIONS_LOGIN,
    payload: ResponseType
};

interface Signup {
    type: TYPES.AUTHENTICATIONS_SIGNUP,
    payload: ResponseType
};

interface Code {
    type: TYPES.AUTHENTICATIONS_CODE,
    payload: IUsersApi
};

interface Load {
    type: TYPES.AUTHENTICATIONS_LOAD,
    payload: IUsersApi
};

interface Response_Status {
    type: TYPES.AUTHENTICATIONS_RESPONSE_STATUS,
    payload: ResponseType
};

interface Response_Error {
    type: TYPES.AUTHENTICATIONS_RESPONSE_ERROR,
    payload: ResponseType
};

interface Response_Clear {
    type: TYPES.AUTHENTICATIONS_RESPONSE_CLEAR
    payload?: string
};

interface State_Clear {
    type: TYPES.AUTHENTICATIONS_STATE_CLEAR,
    payload: {
        key: AuthenticationsObjectKeys,
        value: any
    }
};

export type ACTIONS = Login | Signup | Code | Load | Response_Status | Response_Clear | Response_Error | State_Clear