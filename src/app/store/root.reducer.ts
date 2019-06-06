import {combineReducers} from 'redux-immutable';
import {authReducer} from './auth/reducer';

export function createReducer(injectedReducers = {}) {
    return combineReducers({
        auth: authReducer,
        ...injectedReducers
    })
}