import { USER_LOGIN, SET_LOGGED_IN, LOGOUT } from "../actionTypes";

export const userLogin = (userData) => {
  const token = userData.token;
  localStorage.setItem("token", token);
  return {
    type: USER_LOGIN,
    payload: userData,
  };
};

export const setLoggedIn = (isLoggedIn) => ({
  type: SET_LOGGED_IN,
  payload: isLoggedIn,
});

export const userLogout = () => {
  sessionStorage.removeItem("token");
  localStorage.removeItem("token");
  return { type: LOGOUT };
};
