import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={classes.Login}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <Button
          className={classes.SignupButton}
          variant="primary"
          disabled={!validateForm()}
          type="submit"
        >
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Login;
