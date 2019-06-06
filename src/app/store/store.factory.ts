import {createStore, Store} from 'redux';
import {fromJS} from 'immutable';
import {createReducer} from './root.reducer';

export function configureStore(initialState = {}): Store {
    return createStore(
        createReducer(),
        fromJS(initialState),
    );
}
