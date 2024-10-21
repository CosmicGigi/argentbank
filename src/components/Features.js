import React from "react";

// Importation des images des icônes
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

// Composant fonctionnel pour afficher une fonctionnalité
function Feature({ icon, title, description }) {
  return (
    <div className="feature-item">
      {/* Affichage de l'icône */}
      <img src={icon} alt={title} className="feature-icon" />
      {/* Titre de la fonctionnalité */}
      <h3 className="feature-item-title">{title}</h3>
      {/* Description de la fonctionnalité */}
      <p>{description}</p>
    </div>
  );
}

// Composant fonctionnel pour afficher la section des fonctionnalités
function Features() {
  return (
    <section className="features">
      {/* Titre de la section pour les lecteurs d'écran */}
      <h2 className="sr-only">Features</h2>
      {/* Affichage de chaque fonctionnalité avec ses icônes, titres et descriptions */}
      <Feature
        icon={iconChat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature
        icon={iconMoney}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <Feature
        icon={iconSecurity}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

// Exportation du composant Features pour utilisation dans d'autres fichiers
export default Features;
