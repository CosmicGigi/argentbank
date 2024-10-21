import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import UserAccount from "./pages/UserAccounts";

import "./styles/app.scss";

function App() {
  // Extrait l'état actuel de connexion //
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Route pour la page de connexion */}
        <Route
          path="/login"
          element={
            // Si l'utilisateur est connecté, redirige vers la page utilisateur, sinon affiche la page de connexion
            isLoggedIn ? <Navigate to="/userpage" replace /> : <Signin />
          }
        />
        {/* Route pour la page utilisateur */}
        <Route
          path="/userpage"
          element={
            // Si l'utilisateur est connecté, affiche la page utilisateur, sinon redirige vers la page de connexion
            isLoggedIn ? <UserAccount /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
