import React from "react";

// Importation des composants nécessaires
import Header from "../components/Header";
import Account from "../components/Account";
import UserName from "../components/UserName";
import Footer from "../components/Footer";

// Définition de la fonction userAccount
function userAccount() {
  return (
    <div>
      {/* En-tête de la page */}
      <header>
        <Header />
      </header>
      {/* Contenu principal de la page avec un fond sombre */}
      <main className="bg-dark">
        {/* Affichage du nom de l'utilisateur */}
        <UserName />
        {/* Titre pour les lecteurs d'écran */}
        <h2 className="sr-only">Accounts</h2>
        {/* Groupe de comptes bancaires */}
        <div className="group-accounts">
          {/* Compte courant */}
          <Account
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
          />
          {/* Compte épargne */}
          <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
          />
          {/* Carte de crédit */}
          <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
          />
        </div>
      </main>
      {/* Pied de page */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// Exportation de la fonction userAccount
export default userAccount;
