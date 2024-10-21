import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName, fetchUserProfile } from "../redux/actions/userActions";

const UserName = () => {
  const dispatch = useDispatch(); // Utilisé pour dispatcher des actions Redux
  const userProfile = useSelector((state) => state.profile.userProfile); // Sélectionne le profil utilisateur depuis le store Redux
  const [newUserName, setNewUserName] = useState(""); // État pour le nouveau nom d'utilisateur
  const [isEditing, setIsEditing] = useState(false); // État pour savoir si on est en mode édition

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token"); // Récupère le token depuis le localStorage ou sessionStorage
    if (token) {
      dispatch(fetchUserProfile()); // Si un token est présent, on récupère le profil utilisateur
    }
  }, [dispatch]); // Dépendance sur dispatch pour éviter les effets de bord

  const handleEditClick = useCallback(() => {
    setIsEditing(true); // Passe en mode édition
  }, []);

  const handleUpdateUserName = useCallback(async () => {
    if (newUserName) {
      await dispatch(updateUserName(newUserName)); // Met à jour le nom d'utilisateur via une action Redux
      setIsEditing(false); // Quitte le mode édition
      setNewUserName(""); // Réinitialise le champ du nouveau nom d'utilisateur
    }
  }, [dispatch, newUserName]); // Dépendances sur dispatch et newUserName

  const handleCancel = useCallback(() => {
    setIsEditing(false); // Annule l'édition et quitte le mode édition
  }, []);

  return (
    <div className="edit-form">
      {isEditing ? ( // Si on est en mode édition
        <>
          <h1 className="welcome-user">Edit User Infos</h1>
          <div className="edit">
            <label htmlFor="newUserName">User Name :</label>
            <input
              type="text"
              id="newUserName"
              placeholder={userProfile.userName} // Placeholder avec le nom d'utilisateur actuel
              value={newUserName} // Valeur du champ input
              onChange={(e) => setNewUserName(e.target.value)} // Met à jour l'état newUserName à chaque changement
              aria-label="New User Name"
            />
          </div>
          <div className="edit">
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              value={userProfile.firstName} // Affiche le prénom de l'utilisateur
              disabled // Champ désactivé
              className="text_input"
              aria-label="First Name"
            />
          </div>
          <div className="edit">
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              value={userProfile.lastName} // Affiche le nom de famille de l'utilisateur
              disabled // Champ désactivé
              className="text_input"
              aria-label="Last Name"
            />
          </div>
          <div className="buttons-form">
            <button onClick={handleUpdateUserName} className="edit-button">
              Save
            </button>
            <button onClick={handleCancel} className="edit-button">
              Cancel
            </button>
          </div>
        </>
      ) : (
        // Si on n'est pas en mode édition
        <div>
          <h1 className="welcome-user">Welcome back {userProfile.userName}!</h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
};

export default UserName; // Exporte le composant UserName
