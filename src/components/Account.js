import React from "react";

// Composant fonctionnel 'Account' qui prend 'title', 'amount' et 'description' comme props
const Account = ({ title, amount, description }) => {
  return (
    <div className="account">
      {/* Wrapper pour le contenu du compte */}
      <div className="account-content-wrapper">
        {/* Affiche le titre du compte */}
        <h3 className="account-title">{title}</h3>
        {/* Affiche le montant du compte */}
        <p className="account-amount">{amount}</p>
        {/* Affiche la description du compte */}
        <p className="account-amount-description">{description}</p>
      </div>
      {/* Wrapper pour le contenu de l'appel à l'action */}
      <div className="account-content-wrapper cta">
        {/* Bouton pour voir les transactions */}
        <button className="transaction-button">Voir les transactions</button>
      </div>
    </div>
  );
};

// Exporte le composant 'Account' comme exportation par défaut
export default Account;
