// Authentification - Actions //

// Action pour gérer la connexion de l'utilisateur //
export const userLogin = (userData) => {
  return {
    type: "USER_LOGIN", // Type de l'action pour la connexion de l'utilisateur
    payload: userData, // Données de l'utilisateur à envoyer avec l'action
  };
};

// Action pour vérifier la connexion de l'utilisateur //
export const setLoggedIn = (isLoggedIn) => {
  return {
    type: "SET_LOGGED_IN", // Type de l'action pour définir l'état de connexion
    payload: isLoggedIn, // Booléen indiquant si l'utilisateur est connecté ou non
  };
};

// Action pour gérer la déconnexion de l'utilisateur //
export const userLogout = () => {
  localStorage.removeItem("token"); // Supprime le token du localStorage
  sessionStorage.removeItem("token"); // Supprime le token du sessionStorage
  return {
    type: "LOGOUT", // Type de l'action pour la déconnexion de l'utilisateur
  };
};
