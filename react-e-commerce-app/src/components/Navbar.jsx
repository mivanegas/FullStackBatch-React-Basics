import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import quetzal from "../assets/quetzal.png";
import { NavLink } from "react-router";

function NavbarComponent({ cart }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navigation">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white ">
          <img
            alt=""
            src={quetzal}
            width="25"
            height="25"
            className="d-inline-block align-top"
          />{" "}
          Quetzal Grove Books
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart <Badge bg="dark">{cart.length}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
