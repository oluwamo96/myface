import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username === "faceclone" && password === "get_rich") {
      navigate("/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Admin Login</h2>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="login-button" onClick={login}>Log in</button>
      </div>
    </div>
  );
}

export default Admin;
