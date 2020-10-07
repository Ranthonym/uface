import React, { useState, useEffect } from "react";

import classes from "./App.module.css";

import { Jumbotron, Form, Button } from "react-bootstrap/";

import Login from "../src/components/Login/Login";
import Signup from "../src/components/Signup/Signup";

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
    <div className={classes.App}>
      <Jumbotron>
        <h1 className={classes.AppHeader}> GigEco Code Challenge</h1>
        <Login />
        <Signup />
      </Jumbotron>
    </div>
  );
}

export default App;
