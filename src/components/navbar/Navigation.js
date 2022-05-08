import React from "react";
import { Container, Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";

function Navigation() {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">
    <img
          alt="AS-Web-Logo"
          src="/AS Logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        AS Web Design</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
                
        <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Web-Design">Web Design</NavDropdown.Item>
          <NavDropdown.Item href="/Social-Media-Integration">Social Media Integration</NavDropdown.Item>
          <NavDropdown.Item href="/Logo-Design">Logo Design</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>

        <Nav.Link href="/Pricing">Pricing</Nav.Link>

        <Nav.Link href="/Contact">Contact</Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;
