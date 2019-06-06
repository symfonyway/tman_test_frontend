import {createSelector} from 'reselect';

const selectAuth = (state: any) => state.get('auth');
const makeSelectIsLogged = () => createSelector(selectAuth, state => state.is_logged);

export {makeSelectIsLogged}