import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FormPage from "./FormPage";
import LoginSignup from "./LoginSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/found" element={<FormPage type="found" />} />
        <Route path="/lost" element={<FormPage type="lost" />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
