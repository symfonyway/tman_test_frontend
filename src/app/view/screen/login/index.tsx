import React from 'react';
import {Container, Card} from "react-bootstrap";
import {LoginForm} from "app/view/component/login-form";
import {AuthDataD} from "app/model/authData";
import {login} from "app/store/auth/actions";
import {connect} from 'react-redux';
import {createSelector} from "reselect";
import {makeSelectIsLogged} from "../../../store/auth/selectors";
import {Redirect} from "react-router";
import {withClient} from "app/HttpClientProvider";
import {AxiosInstance} from "axios";

interface Props {
    is_logged: boolean
    login: () => void,
    client: AxiosInstance
}

class LoginClass extends React.Component<Props> {
    onSubmit = async (data: AuthDataD) => {
        const resp = await this.props.client.post('/login/email', data);

        if (resp && resp.data && resp.data.status) {
            this.props.login();
        }
    };

    render() {
        console.log( this.props);
        if (this.props.is_logged) {
            return <Redirect to="/" />
        }

        return (
            <Container>
                <Card className="mt-5">
                    <Card.Body>
                        <LoginForm onSubmit={this.onSubmit} />
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    login: () => {
        return dispatch(login());
    },
    dispatch,
});

const mapStateToProps = createSelector(makeSelectIsLogged(), (is_logged: boolean) => ({
    is_logged,
}));

export const Login = withClient(connect(mapStateToProps, mapDispatchToProps)(LoginClass));
