export const SET_PROFILE = "Profile_PROFILE";
export const UPDATE_ProfileNAME = "UPDATE_Profile_NAME";
export const PROFILE_ERROR = "PROFILE_ERROR";

const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

export const fetchProfile = () => async (dispatch) => {
  const token = getToken();

  if (!token) {
    dispatch({
      type: PROFILE_ERROR,
      payload: "Token non disponible. Veuillez vous reconnecter.",
    });
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/Profile/profile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Erreur: ${response.status} - Impossible de récupérer le profil utilisateur.`
      );
    }

    const Profile = await response.json();

    if (!Profile || !Profile.body) {
      throw new Error("Données de profil manquantes ou invalides.");
    }

    dispatch({ type: SET_PROFILE, payload: Profile.body });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR, payload: error.message });
  }
};

export const updateProfileName = (ProfileName) => async (dispatch) => {
  const token = getToken();

  if (!token) {
    dispatch({
      type: PROFILE_ERROR,
      payload: "Token non disponible. Veuillez vous reconnecter.",
    });
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/Profile/profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ProfileName }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Erreur: ${response.status} - Impossible de mettre à jour le nom d'utilisateur.`
      );
    }

    dispatch({ type: UPDATE_ProfileNAME, payload: ProfileName });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR, payload: error.message });
  }
};
