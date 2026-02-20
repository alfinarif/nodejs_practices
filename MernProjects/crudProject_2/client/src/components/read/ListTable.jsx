import React, {Component, useEffect, useState} from 'react';
import {Container, Row, Col, Card, Button, Form, InputGroup, Badge} from "react-bootstrap";
import {ReadProduct} from "../../APIServices/CRUDServices.js";
const ListTable = ()=>{
    let [dataList, setDataList] = useState([]);
    useEffect(()=>{
        ReadProduct()
            .then((result)=>{
                setDataList(result);
            })
    })

    return (
        <Container className="mt-5">
            {/* Header */}
            <Card className="shadow-lg border-0">
                <Card.Body>
                    <h2 className="text-center mb-4">My Todo List</h2>

                    {/* Todo Items */}
                    <Row>

                        <Col md={6} lg={4} className="mb-4">
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <Card.Title>Product Name</Card.Title>
                                        <Badge bg="warning">Product Code</Badge>
                                    </div>
                                    <Card.Text className="text-muted">
                                        Product Image:
                                    </Card.Text>
                                    <Card.Text className="text-muted">
                                        Product Quantity:
                                    </Card.Text>
                                    <Card.Text className="text-muted">
                                        Product Unit Price:
                                    </Card.Text>
                                    <Card.Text className="text-muted">
                                        Product Total Price: 
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

export default ListTable;