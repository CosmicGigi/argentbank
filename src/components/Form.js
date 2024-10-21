import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // Initialisation du dispatch pour envoyer des actions Redux
  const dispatch = useDispatch();
  // Initialisation de la navigation pour rediriger l'utilisateur
  const navigate = useNavigate();
  // États pour stocker l'email, le mot de passe, la case "se souvenir de moi" et les messages d'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Création de l'objet userData avec les informations de l'utilisateur
    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };

    try {
      // Envoi de la requête de connexion à l'API
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Si la réponse est OK, on récupère le token et on le stocke
        const responseData = await response.json();
        const token = responseData.body.token;
        if (rememberMe) {
          localStorage.setItem("token", token); // Stockage dans localStorage si "se souvenir de moi" est coché
        } else {
          sessionStorage.setItem("token", token); // Sinon, stockage dans sessionStorage
        }
        navigate("/userpage"); // Redirection vers la page utilisateur
        dispatch(userLogin({ token })); // Envoi de l'action de connexion avec le token
      } else if (response.status === 400) {
        // Si la réponse est une erreur 400, on affiche un message d'erreur
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      // Gestion des erreurs
      console.error("Erreur :", error);
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Form;
