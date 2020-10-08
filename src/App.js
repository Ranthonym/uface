import React, { useState, useEffect } from "react";
import fire from "./fire";

import classes from "./App.module.css";
import { Jumbotron, Form, Button } from "react-bootstrap/";

import Login from "../src/components/Login/Login";
// import Signup from "../src/components/Signup/Signup";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const loginHandler = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const signupHandler = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const logoutHandler = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputField();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const clearInputField = () => {
    setEmail("");
    setPasswordError("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  return (
    <div className={classes.App}>
      <Jumbotron>
        <h1 className={classes.AppHeader}> GigEco Code Challenge</h1>
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loginHandler={loginHandler}
          signupHandler={signupHandler}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      </Jumbotron>
    </div>
  );
}

export default App;
