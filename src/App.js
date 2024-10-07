import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import UserAccounts from "./pages/UserAccounts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/user-accounts" element={<UserAccounts />} />
      </Routes>
    </Router>
  );
}

export default App;
