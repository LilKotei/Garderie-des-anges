import React from 'react';
import Navbar from '../_components/NavBar';
import Link from 'next/link';

const LocalisationPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-32"> 
        <h1 className="text-4xl font-bold text-center my-10 text-blue-900">Localisation</h1>
        <div className="content">
    <h2 className="text-3xl font-bold text-center my-10 text-blue-900">Où nous trouver ?</h2>
    <span className="text-center text-blue-900">
      <p>Riviera Saint Viateur pharmacie ENICA face au groupe scolaire ISMAT à 100m </p>
      <p>Pour avoir notre position exacte sur votre appareil cliquez <a
          href="https://www.google.fr/maps/place/Garderie+des+Anges/@5.3805232,-3.9540757,19z/data=!4m9!1m2!2m1!1sgarderie+des+anges!3m5!1s0xfc1edf48e02061b:0x8d000976c869b452!8m2!3d5.3805231!4d-3.9530457!15sChJnYXJkZXJpZSBkZXMgYW5nZXMiA4gBAZIBD2RheV9jYXJlX2NlbnRlcuABAA">ici</a>
      </p>
      <iframe className="mx-auto my-auto" 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.0596931899487!2d-3.9540757!3d5.3805232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edf48e02061b%3A0x8d000976c869b452!2sCr%C3%A8che%20garderie%20pr%C3%A9scolaire%20des%20Anges%20-%20Palmeraie!5e0!3m2!1sfr!2sfr!4v1673374549457!5m2!1sfr!2sfr"
        width="800" height="550" loading="lazy">
      </iframe>
    </span>
  </div>
        </div>
    </>
  );
};

export default LocalisationPage;
