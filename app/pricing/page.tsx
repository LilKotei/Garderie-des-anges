import React from "react";
import Navbar from "../_components/NavBar";
import Footer from "../_components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TarifsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32">
        <h1 className="text-4xl font-bold text-center my-10 text-blue-900">
          Tarifs
        </h1>
        <h2 className="text-3xl font-bold text-center my-10 text-blue-900">
          Tarifs de la Crèche-Garderie
        </h2>
        <div className="flex justify-center space-x-4 text-blue-900">
          <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg rounded-lg w-full p-4 transform transition-transform duration-500">
            <CardHeader>
              <CardTitle className="text-blue-900">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Du lundi au vendredi</li>
                  <li>De 07h30 à 17h</li>
                </ul>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Samedi</li>
                  <li>De 07h30 à 18h</li>
                </ul>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Conditions d'âge</li>
                  <li>4 mois - 3 ans</li>
                </ul>
            </CardContent>
          </Card>

          <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg rounded-lg w-full overflow-hidden p-4 transform transition-transform duration-500">
            <CardHeader>
              <CardTitle className="text-blue-900">Inscription</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Frais d'inscription</li>
                  <li>30 000 FCFA</li>
                </ul>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Hors effectif (jours ouvrés)</li>
                  <li>À la journée : 15 000 FCFA</li>
                  <li>À la demi-journée : 5 000 FCFA</li>
                  <li>À l'heure : 3 000 FCFA</li>
                </ul>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Hors effectif (Samedi)</li>
                  <li>À la journée : 20 000 FCFA</li>
                  <li>À la demi-journée : 10 000 FCFA</li>
                </ul>
            </CardContent>
          </Card>
          <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg rounded-lg w-full overflow-hidden p-4 transform transition-transform duration-500">
            <CardHeader>
              <CardTitle className="text-blue-900">Scolarité</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Sur 12 mois</li>
                  <li>45 000 FCFA/mois</li>
                  <li>À payer par trimestre</li>
                  <li>Total : 540 000 FCFA</li>
                </ul>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Sur 6 mois</li>
                  <li>60 000 FCFA/mois</li>
                  <li>À payer chaque 3 mois (en avance)</li>
                  <li>Total : 360 000 FCFA</li>
                </ul>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Le mois</li>
                  <li>70 000 FCFA/mois</li>
                  <li>À payer avant le début du mois</li>
                </ul>
            </CardContent>
          </Card>
        </div>
        <h2 className="text-3xl font-bold text-center my-10 text-blue-900">
          Tarifs du préscolaire
        </h2>
        <div className="flex justify-center space-x-4 text-blue-900">
          <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg rounded-lg w-full p-4 transform transition-transform duration-500">
            <CardHeader>
              <CardTitle className="text-blue-900">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Du lundi au vendredi</li>
                  <li>Le matin : 08h30 - 11h30</li>
                  <li>L'après-midi : 14h30 - 16h30</li>
                </ul>
                <h2 className="text-blue-900">Conditions d'âge</h2>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Petite section : 2 - 3 ans</li>
                  <li>Moyenne section : 3 - 4 ans</li>
                  <li>Grande section : 4 - 5 ans</li>
                </ul>
            </CardContent>
          </Card>

          <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg rounded-lg w-full p-4 transform transition-transform duration-500">
            <CardHeader>
              <CardTitle className="text-blue-900">Inscription</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Frais d'inscription : 70 000/an</li>
                  <li>Donnent droit à</li>
                  <li>1 tissu pour 2 tenues</li>
                  <li>1 tenue de sport</li>
                  <li>1 tablier</li>
                  <li>2 macarons</li>
                  <li>1 carte d'accès</li>
                  <li>1 carnet de correspondance</li>
                  <li>1 assurance</li>
                  <li>Kit scolaire : 45 000 fcfa</li>
                  <li>Pièces à fournir à l'inscription</li>
                  <li>1 copie originale d'extrait d'acte de naissance</li>
                  <li>2 photos d'identité</li>
                  <li>1 demande d'inscription remise par l'école</li>
                  <li>1 certificat de vaccination</li>
                </ul>
            </CardContent>
          </Card>

          <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg rounded-lg w-full p-4 transform transition-transform duration-500">
            <CardHeader>
              <CardTitle className="text-blue-900">Scolarité</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-blue-900">
                  <li>Scolarité : 200 000/an</li>
                  <li>Modalités de paiement : 60 000/mois</li>
                  <li>1er versement (Août-Sept) : 60 000 fcfa</li>
                  <li>2e versement (Oct-Nov) : 50 000 fcfa</li>
                  <li>3e versement (Jan-Fev) : 45 000 fcfa</li>
                  <li>4e versement (Avril) : 45 000 fcfa</li>
                </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer companyName="Garderie des Anges" year={2024} />
    </>
  );
};
export default TarifsPage;
