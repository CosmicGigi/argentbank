const initialState = {
  isLoggedIn: false,
  Profile: null,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "Profile_LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        Profile: action.payload.Profile,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        Profile: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
