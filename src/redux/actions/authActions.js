export const userLogin = (userData) => ({
  type: "USER_LOGIN",
  payload: userData,
});

export const setLoggedIn = (isLoggedIn) => ({
  type: "SET_LOGGED_IN",
  payload: isLoggedIn,
});

export const userLogout = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: "LOGOUT",
  };
};
