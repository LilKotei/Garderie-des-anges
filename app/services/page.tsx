"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../_components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from 'next/image';

type Activity = {
  id: number;
  name: string;
  image: string;
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
  const [selectedTab, setSelectedTab] = useState("La petite section");

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

  const handleTabColor = (tab: string) => {
    if (tab === "La petite section") {
      return "bg-green-200";
    } else if (tab === "La moyenne section") {
      return "bg-red-200";
    } else if (tab === "La grande section") {
      return "bg-blue-200";
    }
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-32">
        <div className="w-full lg:w-4/5 mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center z-10">
            Nos objectifs
          </h2>
          <p className="mb-4 text-blue-900">
            L'objectif principal du programme d'éducation préscolaire de qualité
            est de soutenir le plein développement de chaque enfant dans tous
            les aspects de sa vie, en favorisant le respect de soi et en
            proposant des activités expérimentales qui constituent les
            fondations de l'apprentissage. Ainsi, à chaque section préscolaire,
            tout est mis en oeuvre pour atteindre nos différents objectifs.
          </p>

          <p className="mb-4 text-blue-900">
            Au terme de chaque section préscolaire, nous nous assurons que
            l'enfant soit capable de :
          </p>
          <div className="flex flex-row items-center">
            <Tabs defaultValue="La petite section" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100 h-8 rounded p-1">
                <TabsTrigger
                  value="La petite section"
                  onClick={() => handleTabClick("La petite section")}
                >
                  <div
                    className={`rounded text-blue-900 font-bold ${
                      selectedTab === "La petite section"
                        ? handleTabColor("La petite section")
                        : "bg-gray-100"
                    }`}
                  >
                    La petite section
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="La moyenne section"
                  onClick={() => handleTabClick("La moyenne section")}
                >
                  <div
                    className={`rounded text-blue-900 font-bold ${
                      selectedTab === "La moyenne section"
                        ? handleTabColor("La moyenne section")
                        : "bg-gray-100"
                    }`}
                  >
                    La moyenne section
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="La grande section"
                  onClick={() => handleTabClick("La grande section")}
                >
                  <div
                    className={`rounded text-blue-900 font-bold ${
                      selectedTab === "La grande section"
                        ? handleTabColor("La grande section")
                        : "bg-gray-100"
                    }`}
                  >
                    La grande section
                  </div>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="La petite section">
                <Card className="w-full bg-green-100">
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      La petite section
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-blue-900">
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
                        Entrer en relation avec autrui par la médiation du
                        langage
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="La moyenne section">
                <Card className="w-full bg-red-100">
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      La moyenne section
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-blue-900">
                      <li>Acquérir son autonomie</li>
                      <li>Maîtriser son schéma corporel</li>
                      <li>Cultiver son esprit d'imagination</li>
                      <li>Se situer dans l'espace (être latéralisé)</li>
                      <li>Se repérer dans le temps</li>
                      <li>Développer sa curiosité</li>
                      <li>Se socialiser</li>
                      <li>
                        Construire des structures de phrases simples et
                        correctes
                      </li>
                      <li>Agir et s'exprimer avec son corps</li>
                      <li>Tendre vers une motricité fine</li>
                      <li>Maîtriser le geste graphique</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="La grande section">
                <Card className="w-full bg-blue-100">
                  <CardHeader>
                    <CardTitle className="text-blue-900">
                      La grande section
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-blue-900">
                      <li>Développer des compétences sociales</li>
                      <li>Acquérir une autonomie complète</li>
                      <li>Cultiver sa créativité</li>
                      <li>
                        Avoir la capacité de se repérer dans l'espace et le
                        temps
                      </li>
                      <li>Améliorer la structure de son langage</li>
                      <li>
                        Être initié à l'écriture, la lecture et les
                        mathématiques
                      </li>
                      <li>Comprendre le principe alphabétique</li>
                      <li>Effectuer des opérations mathématiques simples</li>
                      <li>Construire des phrases simples et correctes</li>
                      <li>Améliorer sa motricité fine</li>
                      <li>
                        Écrire son prénom en majuscules d'imprimerie en
                        respectant l'horizontalité et l'orientation de gauche à
                        droite
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-10">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-blue-900 mb-8 text-center">
              Nos activités
            </h1>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">

              {activities.map((activity: Activity) => (
                <Link key={activity.id} href={`/activities/${activity.id}`}>
                  <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg rounded-lg w-full h-[350px] overflow-hidden p-4 transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={activity.image}
                      alt="Activity"
                      width={200}
                      height={300}
                      className="object-cover w-full h-48 md:h-52 lg:h-60 rounded-lg"
                    />
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-blue-900 mb-2 text-center">{activity.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <h1 className="text-5xl font-bold text-blue-900 mb-8 text-center mt-10">
              Nos ateliers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {workshops.map((workshop: Workshop) => (
                <Link key={workshop.id} href={`/workshops/${workshop.id}`}>
                  <Card className="cursor-pointer m-4 bg-gray-100 shadow-lg my-auto rounded-lg w-full h-[175px] overflow-hidden p-4 transform transition-transform duration-500 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-blue-900 mb-2 text-center">{workshop.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesPage;
