import React from "react";
import { NextPage } from "next";
import Navbar from "../_components/NavBar";
import Footer from "../_components/Footer";

const Actualite: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Actualités</h1>
      </div>
      <Footer companyName="Garderie des Anges" year={2024} />
    </div>
  );
};

export default Actualite;