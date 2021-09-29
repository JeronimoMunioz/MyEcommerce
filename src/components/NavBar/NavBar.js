import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"


function BarraBt(){
  return(
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">MyEcommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Nike</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Jordan</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Adidas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Proximas marcas...</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

}

export default BarraBt;