import React from "react"; // Importation de la bibliothèque React
import { createRoot } from "react-dom/client"; // Importation de la méthode createRoot de ReactDOM pour rendre l'application
import App from "./App"; // Importation du composant principal de l'application

import { Provider } from "react-redux"; // Importation du composant Provider de react-redux pour connecter Redux à l'application
import store from "./redux/store"; // Importation du store Redux

// Récupération de l'élément DOM où l'application React sera rendue
const container = document.getElementById("root");
const root = createRoot(container); // Création de la racine pour rendre l'application

// Rendu de l'application React avec le store Redux fourni à tous les composants
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Le "Provider" est un composant spécial qui enveloppe l'application React
// et permet de fournir le store Redux à tous les composants qui en ont besoin.
