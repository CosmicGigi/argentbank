import { USER_LOGIN, LOGOUT } from "../actionTypes";
import apiRequest from "../utils/apiUtils";

export const userLogin =
  ({ email, password, rememberMe }) =>
  async (dispatch) => {
    try {
      const response = await apiRequest("/user/login", "POST", {
        email,
        password,
      });

      const token = response.body.token;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      dispatch({
        type: USER_LOGIN,
        payload: { token, user: response.body.user },
      });

      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

export const userLogout = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  return { type: LOGOUT };
};
