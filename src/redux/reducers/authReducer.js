import { SET_LOGGED_IN, USER_LOGIN, LOGOUT } from "../actionTypes";

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default authReducer;
