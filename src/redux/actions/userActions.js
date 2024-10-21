// Profile - Actions //

// Types d'actions
export const SET_PROFILE = "USER_PROFILE"; // Action pour définir le profil utilisateur
export const UPDATE_USERNAME = "UPDATE_USER_NAME"; // Action pour mettre à jour le nom d'utilisateur
export const PROFILE_ERROR = "PROFILE_ERROR"; // Action pour gérer les erreurs de profil

// Helper pour obtenir le token //
const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token"); // Récupère le token depuis le localStorage ou le sessionStorage

// Action pour récupérer le profil de l'utilisateur //
export const fetchUserProfile = () => async (dispatch) => {
  const token = getToken(); // Obtient le token
  if (!token) return; // Si pas de token, ne fait rien

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST", // Méthode POST pour récupérer le profil
      headers: {
        "Content-Type": "application/json", // Type de contenu JSON
        Authorization: `Bearer ${token}`, // Ajoute le token dans les headers
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile"); // Lance une erreur si la réponse n'est pas OK
    }

    const userProfile = await response.json(); // Parse la réponse en JSON
    dispatch({
      type: SET_PROFILE, // Dispatch l'action pour définir le profil
      payload: userProfile.body, // Charge utile contenant le profil utilisateur
    });
  } catch (error) {
    console.error(error); // Affiche l'erreur dans la console
    dispatch({
      type: PROFILE_ERROR, // Dispatch l'action pour gérer l'erreur
      payload: error.message, // Charge utile contenant le message d'erreur
    });
  }
};

// Action pour mettre à jour le nom d'utilisateur //
export const updateUserName = (userName) => async (dispatch) => {
  const token = getToken(); // Obtient le token
  if (!token) return; // Si pas de token, ne fait rien

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT", // Méthode PUT pour mettre à jour le profil
      headers: {
        "Content-Type": "application/json", // Type de contenu JSON
        Authorization: `Bearer ${token}`, // Ajoute le token dans les headers
      },
      body: JSON.stringify({ userName }), // Corps de la requête contenant le nouveau nom d'utilisateur
    });

    if (!response.ok) {
      throw new Error("Failed to update user name"); // Lance une erreur si la réponse n'est pas OK
    }

    dispatch({
      type: UPDATE_USERNAME, // Dispatch l'action pour mettre à jour le nom d'utilisateur
      payload: userName, // Charge utile contenant le nouveau nom d'utilisateur
    });
  } catch (error) {
    console.error(error); // Affiche l'erreur dans la console
    dispatch({
      type: PROFILE_ERROR, // Dispatch l'action pour gérer l'erreur
      payload: error.message, // Charge utile contenant le message d'erreur
    });
  }
};
