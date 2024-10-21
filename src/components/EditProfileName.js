import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProfileName,
  fetchProfile,
} from "../redux/actions/profileActions";

const ProfileName = () => {
  const dispatch = useDispatch();
  const ProfileProfile = useSelector((state) => state.profile.ProfileProfile);
  const [newProfileName, setNewProfileName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      dispatch(fetchProfile());
    }
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateProfileName = async () => {
    if (newProfileName) {
      await dispatch(updateProfileName(newProfileName));
      setIsEditing(false);
      setNewProfileName("");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="edit-form">
      {isEditing ? (
        <>
          <h1 className="welcome-Profile">Edit Profile Infos</h1>
          <div className="edit">
            <label htmlFor="newProfileName">Profile Name :</label>
            <input
              type="text"
              id="newProfileName"
              placeholder={ProfileProfile.ProfileName}
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              aria-label="New Profile Name"
            />
          </div>
          <div className="edit">
            <label htmlFor="firstName">First Name :</label>
            <input
              type="text"
              id="firstName"
              value={ProfileProfile.firstName}
              disabled
              className="text_input"
              aria-label="First Name"
            />
          </div>
          <div className="edit">
            <label htmlFor="lastName">Last Name :</label>
            <input
              type="text"
              id="lastName"
              value={ProfileProfile.lastName}
              disabled
              className="text_input"
              aria-label="Last Name"
            />
          </div>
          <div className="buttons-form">
            <button onClick={handleUpdateProfileName} className="edit-button">
              Save
            </button>
            <button onClick={handleCancel} className="edit-button">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <div>
          <h1 className="welcome-Profile">
            Welcome back<br></br> {ProfileProfile.ProfileName} !
          </h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileName;
