import React from "react";

const UserPage = ({ logoutHandler }) => {
  return (
    <section>
      <nav>
        <h2>Welcome</h2>
        <button onClick={logoutHandler}>Logout</button>
      </nav>
    </section>
  );
};

export default UserPage;
