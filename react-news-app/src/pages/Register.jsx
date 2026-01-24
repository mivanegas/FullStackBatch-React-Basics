import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";

function Register({ setUsername }) {
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
        className="m-4 p-4 shadow-sm"
      >
        <Row className="mb-3 ">
          <h3 className="mb-4 ms-2 fw-bold">Registration</h3>
          <Form.Group as={Col} md="4" controlId="1">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom0231"
            className="mb-2"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
          ></Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername33">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend2">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Register;
