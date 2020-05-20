import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <span>3M</span> Innovation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Innovation Systems" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Innovation system1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Innovation system2
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Technology</Nav.Link>
            <Nav.Link href="#link">Technology1</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;
