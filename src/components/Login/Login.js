import React from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginHandler,
    signupHandler,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={classes.Login}>
      <div className={classes.LoginContainer}>
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className={classes.ErrorMsg}>{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={classes.ErrorMsg}>{passwordError}</p>
        <div className={classes.BtnContainer}>
          {hasAccount ? (
            <>
              <button onClick={loginHandler}>Sign in</button>
              <p>
                Need an acount?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={signupHandler}>Sign up</button>
              <p>
                Already have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Login</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
