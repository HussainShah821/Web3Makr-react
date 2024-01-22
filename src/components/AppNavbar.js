// AppNavbar.js

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Logo from '../Assets/Images/Logo.png';
const AppNavbar = () => {
  return (
    <Navbar  expand="lg" className="nav-background">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="logo"
           
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto me-5 mb-2 mb-lg-0">
            <Nav.Link href="#" className="nav-link active me-2">
              Web3Makr
            </Nav.Link>
            <Nav.Link href="#" className="nav-link dark me-3">
              White paper
            </Nav.Link>
            <Nav.Link href="#" className="nav-link dark me-3">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="nav-link dark me-3">
              Tool
            </Nav.Link>
            <Nav.Link href="#" className="nav-link dark me-5">
              Contact us
            </Nav.Link>
            <Nav.Item>
              <Button variant="outline-info" className="me-4">
                Start for free
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
