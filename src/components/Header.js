import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/img/argentBankLogo.webp";
import { userLogout, setLoggedIn } from "../redux/actions/authActions";
import { fetchUserProfile } from "../redux/actions/userActions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faUserCircle, faSignOut);

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userProfile = useSelector((state) => state.profile.userProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(setLoggedIn(false));
    navigate("/");
  };

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const isUserLoggedIn = !!token;

    dispatch(setLoggedIn(isUserLoggedIn));

    if (isUserLoggedIn) {
      dispatch(fetchUserProfile());
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
          width="200"
          height="50"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLoggedIn ? (
          <>
            <NavLink to="/user" className="main-nav-item">
              <FontAwesomeIcon icon="user-circle" />
              {userProfile.userName}
            </NavLink>
            <button className="main-nav-item-logout" onClick={handleLogout}>
              <FontAwesomeIcon icon="sign-out" />
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className="main-nav-item">
            <FontAwesomeIcon icon="user-circle" />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
