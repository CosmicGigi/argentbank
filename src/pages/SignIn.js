import React from "react";

// Importation du composant Header
import Header from "../components/Header";
// Importation du composant Form
import Form from "../components/Form";
// Importation du composant Footer
import Footer from "../components/Footer";

function Signin() {
  return (
    <div>
      {/* Affichage du composant Header */}
      <Header />
      <main className="bg-dark">
        {/* Affichage du composant Form */}
        <Form />
      </main>
      <footer>
        {/* Affichage du composant Footer */}
        <Footer />
      </footer>
    </div>
  );
}

// Exportation du composant Signin
export default Signin;
