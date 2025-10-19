import { Dispatch } from 'redux';
import { ACTIONS, TYPES, IAuthenticationsSignup, AuthenticationsObjectKeys } from '@redux/types/authentications';
import { api } from '@redux/api';
import { user_authentication } from '@localstorage';

const login = (email: string) => async (dispatch: Dispatch<ACTIONS>) => {
    try{
        const res = await api.post(`/authentications/login`, {email});
        dispatch({
            type: TYPES.AUTHENTICATIONS_LOGIN,
            payload: {login: res.data.message as "sent"}
        });
    } catch(error:any){
        console.log(error.response)
        dispatch({
            type: TYPES.AUTHENTICATIONS_RESPONSE_ERROR,
            payload: {login: error.response.data.message as "failed"}
        });
    }
};

const signup = (data: IAuthenticationsSignup) => async (dispatch: Dispatch<ACTIONS>) => {
    try{
        const res = await api.post(`/authentications/signup`, data);
        dispatch({
            type: TYPES.AUTHENTICATIONS_SIGNUP,
            payload: {signup: res.data.message as "sent"}
        });
    } catch(error:any){
        console.log(error.response)
        dispatch({
            type: TYPES.AUTHENTICATIONS_RESPONSE_ERROR,
            payload: {signup: error.response.data.message as "exist"}
        });
    }
};

const code = (email: string, code: string) => async (dispatch: Dispatch<ACTIONS>) => {
    try{
        const res = await api.post(`/authentications/code`, {email, code});
        dispatch({
            type: TYPES.AUTHENTICATIONS_CODE,
            payload: res.data.data
        });
        user_authentication.set(res.data.cookie);
    } catch(error:any){
        console.log(error.response)
        dispatch({
            type: TYPES.AUTHENTICATIONS_RESPONSE_ERROR,
            payload: { code: "failed"}
        });
    }
};

const load = () => async (dispatch: Dispatch<ACTIONS>) => {
    try{
        const res = await api.get(`/authentications/load`);
        dispatch({
            type: TYPES.AUTHENTICATIONS_LOAD,
            payload: res.data.data
        });
    } catch(error:any){
        console.log(error.response)
        dispatch({
            type: TYPES.AUTHENTICATIONS_RESPONSE_ERROR,
            payload: { load: error.response.data.message as string }
        });
    }
};

const state_clear = (key:AuthenticationsObjectKeys, value: any) => async (dispatch: Dispatch<ACTIONS>) => {
    dispatch({
        type: TYPES.AUTHENTICATIONS_STATE_CLEAR,
        payload: { key, value }
    });
};

const Authentication = {
    login,
    signup,
    code,
    load,
    state_clear
};

export default Authentication