import {
  SET_PROFILE,
  UPDATE_ProfileNAME,
  PROFILE_ERROR,
} from "../actions/profileActions";

const initialState = {
  ProfileProfile: {
    firstName: "",
    lastName: "",
    ProfileName: "",
  },
  error: null,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ProfileProfile: action.payload,
        error: null,
      };
    case UPDATE_ProfileNAME:
      return {
        ...state,
        ProfileProfile: {
          ...state.ProfileProfile,
          ProfileName: action.payload,
        },
        error: null,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
