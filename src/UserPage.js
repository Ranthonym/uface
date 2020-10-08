import React from "react";

const UserPage = (props) => {
  const { logoutHandler } = props;
  return (
    <section>
      <nav>
        <h2>Welcome User!</h2>
        <button onClick={logoutHandler}>Logout</button>
      </nav>
    </section>
  );
};

export default UserPage;
