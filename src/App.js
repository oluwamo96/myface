import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FacebookLogin from "./FacebookLogin";
import Admin from "./Admin";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FacebookLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
