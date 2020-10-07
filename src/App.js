import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  return (
    <div className="App">
      <h1>Hello let's do this</h1>
    </div>
  );
}

export default App;
