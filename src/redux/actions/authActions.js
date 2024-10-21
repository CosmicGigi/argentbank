export const ProfileLogin = (ProfileData) => ({
  type: "Profile_LOGIN",
  payload: ProfileData,
});

export const setLoggedIn = (isLoggedIn) => ({
  type: "SET_LOGGED_IN",
  payload: isLoggedIn,
});

export const ProfileLogout = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: "LOGOUT",
  };
};
