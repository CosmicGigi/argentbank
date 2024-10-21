import React from "react";
import Header from "../components/Header";
import Account from "../components/Profile";
import ProfileName from "../components/EditProfileName";
import Footer from "../components/Footer";

function ProfileProfile() {
  const accounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="bg-dark">
        <ProfileName />
        <h2 className="sr-only">Accounts</h2>
        <div className="group-accounts">
          {accounts.map((account, index) => (
            <Account
              key={index}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ProfileProfile;
