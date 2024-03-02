import React from 'react';
import Navbar from "@/components/NavBar";

const TarifsPage = () => {
  // Example content, replace with actual content from your HTML file
  const tarifsInfo = [
    {
      title: "Horaires",
      details: [
        { label: "Du lundi au vendredi", time: "De 07h30 à 17h" },
        { label: "Samedi", time: "De 07h30 à 18h" },
      ],
      ageCondition: "4 mois - 3 ans",
    },
    {
      title: "Inscription",
      fees: "30 000 fcfa",
      dailyRates: [
        { type: "À la journée", price: "15 000 fcfa" },
        { type: "À la demi-journée", price: "5 000 fcfa" },
        { type: "À l'heure", price: "3 000 fcfa" },
      ],
      saturdayRates: [
        { type: "À la journée", price: "20 000 fcfa" },
        { type: "À la demi-journée", price: "10 000 fcfa" },
      ],
    },
    // Add other sections similarly...
  ];

  return (
    <>
      <Navbar />
      <div className="mx-auto pt-32">
        <h1 className="text-4xl font-bold text-center my-10">Nos Tarifs</h1>
        <div className="flex flex-wrap justify-center">
          {tarifsInfo.map((section, index) => (
            <div key={index} className="max-w-sm w-full lg:max-w-full lg:flex">
              <div className="border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">{section.title}</div>
                  {section.details && section.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-base">{detail.label}: {detail.time}</p>
                  ))}
                  <p className="text-gray-600 text-base">Conditions d'âge: {section.ageCondition}</p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">Frais d'inscription</p>
                    <p className="text-gray-600">{section.fees}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TarifsPage;
