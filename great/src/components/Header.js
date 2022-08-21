import React from "react";
import {Navbar, Nav,Container} from 'react-bootstrap'
const header = () => {
  return (
    <header>
       <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">KJewellers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="/login"> <i className='fas fa-user'></i> Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  
  );
};

export default header;
