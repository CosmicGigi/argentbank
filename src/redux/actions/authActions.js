import { USER_LOGIN, LOGOUT } from "../actionTypes";

export const userLogin =
  ({ email, password, rememberMe }) =>
  async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.body.token;

        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }

        dispatch({
          type: USER_LOGIN,
          payload: { token, user: responseData.body.user },
        });

        return true;
      } else {
        throw new Error("Invalid credentials");
      }
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
