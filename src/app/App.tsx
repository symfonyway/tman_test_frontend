import React, {Component} from 'react';
import './assets/css/App.css';
import {Container} from "react-bootstrap";
import {AppRouter} from "./routing";
import {configureStore} from 'app/store/store.factory'
import {Provider} from 'react-redux';
import {HttpClientProvider} from "./HttpClientProvider";

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HttpClientProvider store={store}>
                    <Container className="App">
                        <AppRouter />
                    </Container>
                </HttpClientProvider>
            </Provider>
        );
    }
}

export default App;