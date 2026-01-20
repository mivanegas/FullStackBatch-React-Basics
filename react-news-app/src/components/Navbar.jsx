import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import newspaper from "../assets/newspaper.png";
import Button from "react-bootstrap/Button";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={newspaper}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          News App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Monday, January 19, 26</Nav.Link>
            <Nav.Link href="#subscription">Subscription</Nav.Link>
          </Nav>
          <Nav>
            <Button className="me-2" variant="dark">
              Register
            </Button>
            <Button variant="secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
