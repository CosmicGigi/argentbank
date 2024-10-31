import { SET_PROFILE, UPDATE_USERNAME, PROFILE_ERROR } from "../actionTypes";
import apiRequest from "../utils/apiUtils";

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const userProfile = await apiRequest("/user/profile", "POST");
    dispatch({ type: SET_PROFILE, payload: userProfile.body });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR, payload: error.message });
  }
};

export const updateUserName = (userName) => async (dispatch) => {
  try {
    await apiRequest("/user/profile", "PUT", { userName });
    dispatch({ type: UPDATE_USERNAME, payload: userName });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR, payload: error.message });
  }
};
