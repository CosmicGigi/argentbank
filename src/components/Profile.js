import React from "react";

const Account = ({
  title = "Unknown Account",
  amount = "$0.00",
  description = "No description",
}) => {
  return (
    <div className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">Voir les transactions</button>
      </div>
    </div>
  );
};

export default Account;
