import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import ProfileReducer from "./reducers/profileReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: ProfileReducer,
  },
});

export default store;
