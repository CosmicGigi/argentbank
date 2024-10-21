import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";

function Signin() {
  return (
    <div>
      <Header />
      <div className="bg-form">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
