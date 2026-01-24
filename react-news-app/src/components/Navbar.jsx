import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import dark_mode from "../assets/dark_mode.svg";
import light_mode from "../assets/light_mode.svg";
import moment from "moment";
import { Link, NavLink } from "react-router";

function NavbarComponent({ toggleDarkMode, darkMode }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <Nav.Link as={NavLink} to="/" className="fw-bold">
                {moment().format("MMMM Do YYYY, h:mm a")}
              </Nav.Link>
              <Nav.Link href="#subscription">Subscription</Nav.Link>
            </div>

            <Navbar.Brand as={NavLink} to="/">
              East Bay Times
            </Navbar.Brand>

            <div className="d-flex">
              <Link to="/register" className="mt-1">
                <Button className="me-2" variant="dark">
                  Register
                </Button>
              </Link>
              <Link to="/login" className="mt-1">
                <Button variant="secondary">Login</Button>
              </Link>

              <button id="theme-switch" onClick={toggleDarkMode}>
                <img src={dark_mode} />
                <img src={light_mode} />
              </button>

              <p id="username">username</p>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
