import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";

function Login({ setUsername }) {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const usernameValue = form.elements.username.value;
    setUsername(usernameValue);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="m-5 p-4 shadow-sm"
      >
        <h3 className="mb-4 ms-3 fw-bold">Sign in</h3>
        <Row className="mb- p-3">
          <Form.Group controlId="validationCustomUsername">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend1">@</InputGroup.Text>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3 p-3">
          <Form.Group controlId="validationCustomUsername2">
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Button type="submit" className="m-3 p-2">
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
