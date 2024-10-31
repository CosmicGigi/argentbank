// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: userReducer,
  },
});

export default store;
