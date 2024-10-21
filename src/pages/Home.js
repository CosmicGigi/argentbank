import React from "react";

// Importation du composant Header
import Header from "../components/Header";
// Importation du composant Hero
import Hero from "../components/Hero";
// Importation du composant Features
import Features from "../components/Features";
// Importation du composant Footer
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      {/* Affichage du composant Header */}
      <Header />
      <main>
        {/* Affichage du composant Hero */}
        <Hero />
        {/* Affichage du composant Features */}
        <Features />
      </main>
      {/* Affichage du composant Footer */}
      <Footer />
    </div>
  );
}

// Exportation du composant Home
export default Home;
