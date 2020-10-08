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

  return (
    <div className={classes.Login}>
      <div className={classes.LoginContainer}>
        <label className={classes.Label}>Username</label>
        <input
          className={classes.Input}
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className={classes.ErrorMsg}>{emailError}</p>
        <label className={classes.Label}>Password</label>
        <input
          className={classes.Input}
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={classes.ErrorMsg}>{passwordError}</p>
        <div className={classes.BtnContainer}>
          {hasAccount ? (
            <>
              <button className={classes.Button} onClick={loginHandler}>
                Sign in
              </button>
              <p className={classes.SmallText}>
                Need an acount?
                <span
                  className={classes.ToggleText}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign up
                </span>
              </p>
            </>
          ) : (
            <>
              <button className={classes.Button} onClick={signupHandler}>
                Sign up
              </button>
              <p className={classes.SmallText}>
                Already have an account?
                <span
                  className={classes.ToggleText}
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Login
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
