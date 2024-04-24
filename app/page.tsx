"use client";
import * as React from "react"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navbar from '@/app/_components/NavBar';
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

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

export default function Home() {
  const [activities, setActivities] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

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
      <div className="w-4/5 mx-auto">
        <div className="absolute h-200 left-0 right-0 bottom-0 top-0 w-full bg-blue-100 rounded-b-3xl p-6 -z-10"></div>
        <div className="h-104 pt-32 flex justify-center z-10">
          <div className="w-1/2 my-10 my-auto">
            <h1 className="text-4xl font-bold text-left my-10 text-blue-900">
              Bienvenue à la Crèche Garderie Préscolaire des Anges
            </h1>
            <p className="text-lg text-left text-blue-900">
              La structure les Anges est un centre de protection de la petite
              enfance privé (CPPEP). Il est réparti en trois classes (de la
              petite section à la grande section) et comporte également une
              crèche-garderie pour les enfants dont l'âge varie entre 4 mois et
              8 ans. Nous sommes situés au niveau de la pharmacie ENICA en face
              au groupe scolaire ISMAT de la Riviera palmeraie (Cocody).{" "}
            </p>
          </div>
          <div className="w-1/2">
            <Image
              className="mx-auto"
              src="/images/home/Hero.png"
              alt="Creche Garderie des Anges"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center my-10 text-blue-900">
            Notre devise !
          </h1>
          <div className="flex justify-center space-x-4 text-blue-900">
            <Card className="text-blue-900 bg-blue-300 transform transition-transform duration-500 hover:scale-105">
              <CardHeader className="flex items-center">
                <Image
                  src="/images/home/goals/learn.png"
                  alt="Education"
                  width={50}
                  height={50}
                />
                <CardTitle className="font-bold">
                  Apprendre en s'amusant !
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-900">
                  Notre garderie engage des instructeurs/trices expérimenté(e)s
                  et met à disposition de vos petits anges tous les aménagements
                  nécessaires pour leur permettre d'apprendre dans le plaisir et
                  l'épanouissement.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-blue-900 bg-yellow-200 transform transition-transform duration-500 hover:scale-105">
              <CardHeader className="flex items-center">
                <Image
                  src="/images/home/goals/Toys.png"
                  alt="Education"
                  width={50}
                  height={50}
                />
                <CardTitle className="font-bold">
                  Des jouets par milliers !
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-900">
                  Des jouets dans tous les sens ! Pour permettre à vos enfants
                  de s'épanouir et de se divertir, nous avons une gamme étendue
                  de jouets instructifs et bien entretenus pour une hygiène
                  saine.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-blue-900 bg-red-300 transform transition-transform duration-500 hover:scale-105">
              <CardHeader className="flex items-center">
                <Image
                  src="/images/home/goals/Dec.jpg"
                  alt="Education"
                  width={50}
                  height={50}
                />
                <CardTitle className="font-bold">Découverte</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-900">
                  Pour permettre à vos enfants de découvrir le monde et ses
                  règles, plein d'activité sont organisées chaque jour.Pour
                  connaître la nature de ces activités et leur déroulement, vous
                  pouvez accéder à la rubrique activité de notre site web
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-blue-900 bg-green-200 transform transition-transform duration-500 hover:scale-105">
              <CardHeader className="flex items-center">
                <Image
                  src="/images/home/goals/Env.jpg"
                  alt="Education"
                  width={50}
                  height={50}
                />
                <CardTitle className="font-bold">Un cadre adéquat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-900">
                  Un environnement sain pour un développement efficace. La
                  garderie est aménagée de sorte à ce que votre enfant ait le
                  meilleur développement possible et reste en bonne santé tout
                  le long de notre séjour chez nous.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex space-x-8 mt-20">
          <div>
            <Image
              className="rounded-lg"
              src="/images/home/Engagements.png"
              alt="Education"
              width={600}
              height={400}
            />
          </div>
          <div className="text-blue-900 my-auto">
            <h2 className="text-2xl font-bold mb-2 text-blue-900">
              Notre Engagement
            </h2>
            <p className="mb-4">
              À la crèche-garderie-préscolaire des anges, un grand effort est
              déployé pour garantir une éducation de qualité exceptionnelle,
              dispensée dans un environnement sain et adapté à l'apprentissage.
            </p>
            <p className="font-semibold mb-2 text-blue-900">
              Nous avons ainsi pour missions :
            </p>
            <ul className="list-disc ml-4 mb-4 text-blue-900">
              <li>La protection de vos enfants</li>
              <li>Leur épanouissement</li>
              <li>L'éveil et l'éducation de vos enfants</li>
              <li>Rendre vos enfants un peu plus autonome</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center my-10 text-blue-900">
            Nos activités et ateliers
          </h1>
          <div className="flex gap-y-4 justify-center text-blue-900 space-x-6">
            {activities.map((activity: Activity, index) => (
              <Link key={activity.id} href={`/activities/${activity.id}`} className="">
                <Card className="cursor-pointer m-4 bg-white shadow-lg rounded-lg w-full h-[350px] overflow-hidden p-4 bg-red-100 transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src={activity.image}
                    alt="Activity"
                    width={200}
                    height={300}
                    className="object-cover w-full h-48 md:h-52 lg:h-60 rounded-lg"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-900 mb-2 text-center">
                      {activity.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <Link href="/services">
            <div className="w-48 mt-4 mx-auto text-blue-900 px-6 py-2 rounded hover:bg-blue-100 text-center transition-color cursor-pointer">
              Voir plus
            </div>
          </Link>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center my-10 text-blue-900">
            Nos Locaux
          </h1>
          <Carousel
            plugins={[plugin.current]}
            className="w-4/5 mx-auto "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc1.png"
                  alt="Loc 1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc2.png"
                  alt="Loc 2"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc3.png"
                  alt="Loc 3"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc4.png"
                  alt="Loc 4"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc5.png"
                  alt="Loc 5"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc6.png"
                  alt="Loc 6"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc7.png"
                  alt="Loc 7"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc8.png"
                  alt="Loc 8"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
              <CarouselItem className="carousel-item">
                <Image
                  src="/images/home/area/Loc9.png"
                  alt="Loc 9"
                  width={400}
                  height={300}
                  className="object-cover"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="my-auto" />
            <CarouselNext className="my-auto" />
          </Carousel>
        </div>
      </div>
    </>
  );
}
