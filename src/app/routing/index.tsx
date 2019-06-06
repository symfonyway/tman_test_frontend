import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import {Login} from "app/view/screen/login";
import {Dashboard} from "app/view/screen/dashboard";
import {createBrowserHistory} from "history"
import {PrivateRoute} from './PrivateRoute'

const sss = createBrowserHistory();

export class AppRouter extends React.Component {
    render() {
        return (
            <Router history={sss}>
                <Switch>
                    <Route path="/" render={() => <Redirect to="/dashboard" />} exact />
                    <Route
                        path="/login"
                        component={Login}
                        exact
                    />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}
