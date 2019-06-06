import React from 'react';
import {Container, Card} from "react-bootstrap";

export class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Card className="mt-5">
                    <Card.Body>
                        Welcome!
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
