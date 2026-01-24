import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import dark_mode from "../assets/dark_mode.svg";
import light_mode from "../assets/light_mode.svg";
import moment from "moment";
import { Link, NavLink, useNavigate } from "react-router";

function NavbarComponent({ toggleDarkMode, username, setUsername }) {
  const navigate = useNavigate();

  console.log("Username in navbar:", username);

  const logout = () => {
    setUsername(null);
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <button id="theme-switch" onClick={toggleDarkMode}>
                <img src={dark_mode} />
                <img src={light_mode} />
              </button>
              <Nav.Link as={NavLink} to="/" className="fw-bold">
                {moment().format("MMMM Do YYYY, h:mm a")}
              </Nav.Link>
            </div>

            <Navbar.Brand as={NavLink} to="/">
              East Bay Times
            </Navbar.Brand>

            <div className="d-flex align-items-center">
              {username ? (
                <>
                  <p className="mb-0 me-2 fw-bolder" id="username">
                    Welcome, {username}
                  </p>
                  <Button variant="danger" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/register" className="mt-1">
                    <Button className="me-2" variant="dark" size="sm">
                      Register
                    </Button>
                  </Link>
                  <Link to="/login" className="mt-1 me-2">
                    <Button variant="secondary" size="sm">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
