import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Media/Logo.jpg'

function NavBar() {
  return(
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='mx-auto'><img src={logo} alt="IndiaPost" style={{"width":"60px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-3">
            <Nav.Link href="/" style={{"color":"black","fontWeight":"bold"}}>Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
