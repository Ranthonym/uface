import React from "react";

import classes from "./UserPage.module.css";

const UserPage = (props) => {
  const { logoutHandler } = props;
  return (
    <section>
      <nav>
        <h2>Welcome User!</h2>
        <button className={classes.Button} onClick={logoutHandler}>
          Logout
        </button>
      </nav>
    </section>
  );
};

export default UserPage;
