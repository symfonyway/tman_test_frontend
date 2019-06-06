import React, {FormEvent, ReactNode} from 'react';
import {Form, Button} from 'react-bootstrap'
import {AuthDataD} from "app/model/authData";


interface Props {
    onSubmit: { (data: AuthDataD): void }
}

interface State {
    login: string | null,
    password?: string | null
}

export class LoginForm extends React.Component<Props, State> {
    state = {
        login: '',
        password: '',
    };

    onSubmit = (e: FormEvent): void => {
        e.preventDefault();

        const data: AuthDataD = {
            ...this.state
        };

        this.props.onSubmit(data);
    };

    render(): ReactNode {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter login"
                        onChange={(e: any) => this.setState({login: e.target.value})}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        onChange={(e: any) => this.setState({password: e.target.value})}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
