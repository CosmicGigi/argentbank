// Importation de la fonction configureStore depuis @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
// Importation du reducer d'authentification
import authReducer from "./reducers/authReducer";
// Importation du reducer de l'utilisateur
import userReducer from "./reducers/userReducer";

// Définition de l'objet reducer avec les reducers d'authentification et de profil utilisateur
const reducer = {
  auth: authReducer, // Reducer pour l'authentification
  profile: userReducer, // Reducer pour le profil utilisateur
};

// Configuration du store Redux avec les reducers définis
const store = configureStore({
  reducer: reducer,
});

// Exportation du store pour l'utiliser dans l'application
export default store;
