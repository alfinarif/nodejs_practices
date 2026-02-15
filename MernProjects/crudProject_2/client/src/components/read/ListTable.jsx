import React, {Component} from 'react';
import {Container, Row, Col, Card, Button, Form, InputGroup, Badge} from "react-bootstrap";
class ListTable extends Component {
    render() {
        return (
            <Container className="mt-5">
                {/* Header */}
                <Card className="shadow-lg border-0">
                    <Card.Body>

                        {/* Todo Items */}
                        <Row>

                            <Col md={6} lg={4} className="mb-4">
                                <Card className="h-100 shadow-sm border-0">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <Card.Title>This Week</Card.Title>
                                            <Badge bg="warning">Pending</Badge>
                                        </div>
                                        <Card.Text className="text-muted">
                                            30 minutes of cardio.
                                        </Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="outline-secondary" size="sm">
                                                Edit
                                            </Button>
                                            <Button variant="outline-danger" size="sm">
                                                Delete
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default ListTable;