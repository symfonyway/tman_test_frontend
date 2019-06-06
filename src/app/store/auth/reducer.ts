import {LOGOUT, LOGIN, DEFAULT_IS_LOGGED} from './constants'

interface State {
    is_logged: boolean
}

const initialState: State = {
    is_logged: DEFAULT_IS_LOGGED
};

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case LOGIN:
            return {
                is_logged: true,
            };
        case LOGOUT:
            return {
                is_logged: false
            };
        default:
            return state;
    }
}