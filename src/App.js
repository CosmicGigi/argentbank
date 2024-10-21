import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import ProfileProfile from "./pages/ProfileAccount";

import "./styles/app.scss";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/Profilepage" replace /> : <Signin />
          }
        />
        <Route
          path="/Profilepage"
          element={
            isLoggedIn ? <ProfileProfile /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
