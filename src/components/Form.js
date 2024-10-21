import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ProfileLogin } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ProfileData = { email, password, rememberMe };

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/Profile/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ProfileData),
        }
      );

      if (response.ok) {
        const {
          body: { token },
        } = await response.json();
        rememberMe
          ? localStorage.setItem("token", token)
          : sessionStorage.setItem("token", token);
        navigate("/Profilepage");
        dispatch(ProfileLogin({ token }));
      } else if (response.status === 400) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        setErrorMessage("Invalid Profilename or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      <h1>Sign In</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="Profilename">Profilename</label>
          <input
            type="text"
            id="Profilename"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="Profilename"
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
            name="remember-me"
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
