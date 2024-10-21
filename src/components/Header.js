import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/img/argentBankLogo.webp";
import { ProfileLogout, setLoggedIn } from "../redux/actions/authActions";
import { fetchProfile } from "../redux/actions/profileActions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(ProfileLogout());
    navigate("/login");
  };

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      dispatch(setLoggedIn());
      dispatch(fetchProfile());
    }
  }, [dispatch]);

  library.add(faUserCircle, faSignOut);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          src={Logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
          loading="lazy"
          width="200"
          height="50"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLoggedIn ? (
          <>
            <NavLink to="/Profilepage" className="main-nav-item">
              <FontAwesomeIcon icon="user-circle" />
              {profile.profileName}
            </NavLink>
            <button className="main-nav-item-logout" onClick={handleLogout}>
              <FontAwesomeIcon icon="sign-out" />
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="main-nav-item">
            <FontAwesomeIcon icon="Profile-circle" />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
