import React, { useEffect, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/img/argentBankLogo.png";
import { userLogout, setLoggedIn } from "../redux/actions/authActions";
import { fetchUserProfile } from "../redux/actions/userActions";

const Header = () => {
  // Récupère l'état de connexion de l'utilisateur depuis le store Redux
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // Récupère le profil de l'utilisateur depuis le store Redux
  const userProfile = useSelector((state) => state.profile.userProfile);
  // Initialise la fonction dispatch pour envoyer des actions au store Redux
  const dispatch = useDispatch();
  // Initialise la fonction navigate pour naviguer entre les pages
  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = useCallback(() => {
    dispatch(userLogout()); // Envoie l'action de déconnexion
    navigate("/login"); // Redirige vers la page de connexion
  }, [dispatch, navigate]);

  // Effet qui s'exécute au montage du composant
  useEffect(() => {
    // Récupère le token depuis le localStorage ou le sessionStorage
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      dispatch(setLoggedIn()); // Met à jour l'état de connexion
      dispatch(fetchUserProfile()); // Récupère le profil de l'utilisateur
    }
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          src={Logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
          loading="lazy"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLoggedIn ? (
          <>
            <NavLink to="/userpage" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userProfile.userName} {/* Affiche le nom de l'utilisateur */}
            </NavLink>
            <button className="main-nav-item-logout" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
