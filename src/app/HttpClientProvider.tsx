import React from 'react';
import {Store} from 'redux';
import axios, {AxiosInstance} from 'axios';
import {HttpClientContext} from './HttpClientContext'
import {logout} from 'app/store/auth/actions'

interface Props {
    store: any
}

interface State {
    client: AxiosInstance | null
}

export class HttpClientProvider extends React.Component<Props, State> {
    state = {
        client: null
    };

    componentDidMount(): void {
        const client = axios.create({
            baseURL: 'http://localhost'
        });

        client.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            // this.props.store.dispatch(logout())
        });

        this.setState({
            client
        })
    }

    render() {
        return (
            <HttpClientContext.Provider value={{client: this.state.client}}>
                {this.props.children}
            </HttpClientContext.Provider>
        )
    }
}

export const withClient = (BaseComponent: any) => (props: any) => (
    <HttpClientContext.Consumer>
        {(data) => <BaseComponent {...props} {...data} />}
    </HttpClientContext.Consumer>
);