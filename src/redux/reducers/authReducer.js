// Authentification - Reducer //

// État initial du reducer //
const initialState = {
  isLoggedIn: false, // Par défaut, l'utilisateur n'est pas connecté //
  user: null, // Initialement - aucun utilisateur n'est connecté //
  token: null, // Aucun token n'est présent initialement //
};

// Fonction reducer pour gérer les actions liées à l'authentification //
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action pour définir l'utilisateur comme connecté //
    case "SET_LOGGED_IN":
      return {
        ...state, // Crée une copie de l'état existant //
        isLoggedIn: true, // Définit l'utilisateur comme connecté //
      };
    // Action pour connecter l'utilisateur avec les informations fournies //
    case "USER_LOGIN":
      return {
        ...state, // Crée une copie de l'état existant //
        isLoggedIn: true, // Définit l'utilisateur comme connecté //
        user: action.payload.user, // Met à jour l'utilisateur avec les données fournies //
        token: action.payload.token, // Met à jour le token avec les données fournies //
      };
    // Action pour déconnecter l'utilisateur //
    case "LOGOUT":
      return {
        ...state, // Crée une copie de l'état existant //
        isLoggedIn: false, // Définit l'utilisateur comme déconnecté //
        user: null, // Réinitialise l'utilisateur à null //
        token: null, // Réinitialise le token à null lors de la déconnexion //
      };
    // Retourne l'état actuel par défaut si l'action n'est pas reconnue //
    default:
      return state;
  }
};

// Exporte le reducer pour être utilisé dans le store Redux //
export default authReducer;

// Lorsque l'action de type 'LOGIN' est dispatchée,
// le reducer renvoie un nouvel état où "isLoggedIn" est défini sur true pour indiquer que l'utilisateur est connecté //
