// Profile - Reducer //
import {
  SET_PROFILE,
  UPDATE_USERNAME,
  PROFILE_ERROR,
} from "../actions/userActions";

// État initial du reducer
const initialState = {
  userProfile: {
    firstName: "", // Prénom de l'utilisateur
    lastName: "", // Nom de l'utilisateur
    userName: "", // Nom d'utilisateur
  },
  error: null, // Ajout d'une clé pour stocker les erreurs
};

// Fonction reducer pour gérer les actions liées au profil utilisateur
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action pour définir le profil utilisateur
    case SET_PROFILE:
      return {
        ...state,
        userProfile: action.payload, // Met à jour le profil utilisateur avec les données de l'action
        error: null, // Réinitialise les erreurs
      };
    // Action pour mettre à jour le nom d'utilisateur
    case UPDATE_USERNAME:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          userName: action.payload, // Met à jour le nom d'utilisateur avec les données de l'action
        },
        error: null, // Réinitialise les erreurs
      };
    // Action pour gérer les erreurs de profil
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload, // Met à jour l'état avec l'erreur reçue
      };
    // Retourne l'état actuel par défaut si l'action n'est pas reconnue
    default:
      return state;
  }
};

export default profileReducer;
