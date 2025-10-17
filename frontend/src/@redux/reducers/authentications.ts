import { ACTIONS, TYPES, INITIALSTATE} from '@redux/types/authentications';

const initialState: INITIALSTATE = {
    user: null,
    status: {},
    errors: {}
};

export const authentication = (state = initialState, action: ACTIONS) => {
    const {type, payload} = action;

    switch(type){
        case TYPES.AUTHENTICATIONS_LOGIN:
            return{
                ...state,
                status: payload
            };
        case TYPES.AUTHENTICATIONS_SIGNUP:
            return{
                ...state,
                status: payload
            }
        case TYPES.AUTHENTICATIONS_CODE:
            return{
                ...state,
                user: payload
            }
        case TYPES.AUTHENTICATIONS_RESPONSE_ERROR:
            return{
                ...state,
                errors: payload
            }
        case TYPES.AUTHENTICATIONS_LOAD:
            return{
                ...state,
                user: payload
            }
        case TYPES.AUTHENTICATIONS_STATE_CLEAR:
            return{
                ...state,
                [payload.key]: payload.value
            }
        default: 
            return state;
    }
}

export default authentication;