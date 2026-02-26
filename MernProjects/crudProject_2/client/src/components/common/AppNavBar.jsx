import React, {Component} from 'react';
import { Toaster } from 'react-hot-toast';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
class AppNavBar extends Component {
    render() {
        return (
            <Navbar bg="primary" data-bs-theme="dark">
                <Toaster/>
                <Container>
                    <Navbar.Brand href="/">CRUD-APP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/create">Create</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default AppNavBar;