import * as React from "react";

import {connect} from 'react-redux';
import {makeSelectIsLogged} from 'app/store/auth/selectors';
import {createSelector} from 'reselect';

import {Route, Redirect, RouteProps} from 'react-router-dom'

interface Props extends RouteProps{
    is_logged: boolean
    component: any
}

class PrivateRouteClass extends React.Component<Props> {
    render() {
        const {component: Component, is_logged, ...rest} = this.props;

        return (
            <Route {...rest} render={(props) => (
                is_logged ? <Component {...props} /> : <Redirect to='/login' />
            )} />
        )
    }
}

const mapStateToProps = createSelector(makeSelectIsLogged(), (is_logged: boolean) => ({
    is_logged,
}));

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteClass);