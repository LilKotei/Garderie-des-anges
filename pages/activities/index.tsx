import Navbar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

type Activity = {
  id: number;
  name: string;
  description: string;
  hours: string | string[];
  advantages: {
    plan: string;
    elements: string[];
  }[];
  progress: string;
};

type Workshop = {
  id: number;
  title: string;
  description: string;
  activities: string[];
};

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const responseActivities = await fetch("/JSON/activities.json");
      const responseWorkshops = await fetch("/JSON/workshops.json");
    const dataWorkshops = await responseWorkshops.json();
      const dataActivities = await responseActivities.json();
      setWorkshops(dataWorkshops.workshops);
      setActivities(dataActivities.activities);
    };

    fetchActivities();
  }, []);

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen pt-32">

      <div className="w-full lg:w-4/5 mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Nos objectifs</h2>
        <p className="mb-4 text-black">
          L'objectif principal du programme d'éducation préscolaire de qualité
          est de soutenir le plein développement de chaque enfant dans tous les
          aspects de sa vie, en favorisant le respect de soi et en proposant des
          activités expérimentales qui constituent les fondations de
          l'apprentissage. Ainsi, à chaque section préscolaire, tout est mis en
          oeuvre pour atteindre nos différents objectifs.
        </p>

        <p className="mb-4 text-black">
          Au terme de chaque section préscolaire, nous nous assurons que
          l'enfant soit capable de :
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Petite section
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Moyenne section
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grande section
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ul className="list-disc list-inside text-black">
                    <li>Acquérir le langage</li>
                    <li>Tendre vers son autonomie</li>
                    <li>Découvrir son environnement</li>
                    <li>Découvrir son schéma corporel</li>
                    <li>Enrichir son vocabulaire</li>
                    <li>Développer sa motricité large et fine</li>
                    <li>Dépasser le stade de gribouillage</li>
                    <li>Découvrir son(ou ses) prénom(s) et son nom</li>
                    <li>Comprendre les consignes ordinaires de la classe</li>
                    <li>Exprimer ses besoins</li>
                    <li>
                      Entrer en relation avec autrui par la médiation du langage
                    </li>
                    <li>Utiliser le pronom "je" pour parler de soi</li>
                    <li>
                      Répondre aux salutations de l'adulte en se faisant
                      comprendre
                    </li>
                    <li>
                      S'exprimer, dire des comptines très simples, chanter
                      devant les autres
                    </li>
                    <li>Comprendre les consignes simples</li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ul className="list-disc list-inside text-black">
                    <li>Acquérir son autonomie</li>
                    <li>Maîtriser son schéma corporel</li>
                    <li>Cultiver son esprit d'imagination</li>
                    <li>Se situer dans l'espace (être latéralisé)</li>
                    <li>Se repérer dans le temps</li>
                    <li>Développer sa curiosité</li>
                    <li>Se socialiser</li>
                    <li>
                      Construire des structures de phrases simples et correctes
                    </li>
                    <li>Agir et s'exprimer avec son corps</li>
                    <li>Tendre vers une motricité fine</li>
                    <li>Maîtriser le geste graphique</li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ul className="list-disc list-inside text-black">
                    <li>Développer des compétences sociales</li>
                    <li>Acquérir une autonomie complète</li>
                    <li>Cultiver sa créativité</li>
                    <li>
                      Avoir la capacité de se repérer dans l'espace et le temps
                    </li>
                    <li>Améliorer la structure de son langage</li>
                    <li>
                      Être initié à l'écriture, la lecture et les mathématiques
                    </li>
                    <li>Comprendre le principe alphabétique</li>
                    <li>Effectuer des opérations mathématiques simples</li>
                    <li>Construire des phrases simples et correctes</li>
                    <li>Améliorer sa motricité fine</li>
                    <li>
                      Écrire son prénom en majuscules d'imprimerie en respectant
                      l'horizontalité et l'orientation de gauche à droite
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">Nos activités</h1>
        <div className="flex flex-wrap justify-center items-center">
          {activities.map((activity: Activity) => (
            <Link key={activity.id} href={`/activities/${activity.id}`}>
              <div className="cursor-pointer m-4 p-6 bg-white shadow-lg rounded-lg max-w-sm w-64 h-64 overflow-auto">
                <h2 className="text-xl font-semibold text-blue-500 mb-2">
                  {activity.name}
                </h2>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <p className="text-sm text-gray-600">
                  Hours:{" "}
                  {Array.isArray(activity.hours)
                    ? activity.hours.join(", ")
                    : activity.hours}
                </p>
                {activity.advantages.map((adv, index) => (
                  <div key={index} className="mt-3">
                    <h3 className="font-semibold">{adv.plan}</h3>
                    {adv.elements.map((element, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {element}
                      </p>
                    ))}
                  </div>
                ))}
                <p className="text-sm text-gray-600 mt-3">
                  Progress: {activity.progress}
                </p>
              </div>
            </Link>
          ))},
          {workshops.map((workshop: Workshop) => (
            <Link key={workshop.id} href={`/workshops/${workshop.id}`}>
                <div className="cursor-pointer m-4 p-6 bg-white shadow-lg rounded-lg max-w-sm w-64 h-64 overflow-auto">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">
                    {workshop.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{workshop.description}</p>
                    <p className="text-sm text-gray-600">
                    Activities: {Array.isArray(workshop.activities) && <p>Activities: {workshop.activities.join(', ')}</p>}
                    </p>
                </div>
            </Link>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export const getStaticProps = async () => {
  const filePathActivities = path.join(
    process.cwd(),
    "public",
    "JSON",
    "activities.json"
  );
  const filePathWorkshops = path.join(
    process.cwd(),
    "public",
    "JSON",
    "workshops.json"
  );
  const jsonDataActivities = await fs.readFile(filePathActivities);
  const jsonDataWorkshops = await fs.readFile(filePathWorkshops);
  const dataActivities = JSON.parse(jsonDataActivities.toString());
  const dataWorkshops = JSON.parse(jsonDataWorkshops.toString());

  return {
    props: {
      activities: dataActivities.activities,
      workshops: dataWorkshops.workshops,
    },
  };
};

export default ActivitiesPage;
