import React, { useState, useEffect } from "react";

import "./App.css";

import { Jumbotron, Form, Button } from "react-bootstrap/";

import Login from "../src/components/Login/Login";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userAuth, setUserAuth] = useState(false);

  const loginHandler = () => {};

  const registrationHandler = () => {};

  return (
    <div className="App">
      <Jumbotron>
        <h1>hello world</h1>
        <Login />
      </Jumbotron>
    </div>
  );
}

export default App;
