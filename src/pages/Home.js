import React from "react";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

function Home() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature imgSrc={iconChat} title="You are our #1 priority">
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </Feature>
        <Feature imgSrc={iconMoney} title="More savings means higher rates">
          The more you save with us, the higher your interest rate will be!
        </Feature>
        <Feature imgSrc={iconSecurity} title="Security you can trust">
          We use top of the line encryption to make sure your data and money is
          always safe.
        </Feature>
      </section>
    </main>
  );
}

export default Home;
