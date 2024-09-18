import { Container, Nav, Navbar } from "react-bootstrap";

import SehatiSistersLogo from "./assets/SehatiSisters.png";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={SehatiSistersLogo}
            alt="SehatiSistersLogo"
            style={{ height: "60px", width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#our-story">Our Story</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
