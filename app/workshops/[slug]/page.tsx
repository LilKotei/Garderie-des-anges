"use client";
import { useEffect, useState } from "react";
import Navbar from "../../_components/NavBar";

type Workshop = {
  id: number;
  title: string;
  description: string;
  activities: string[] | { [key: string]: string[] };
};

const WorkshopDetails = ({ params }: { params: { slug: string } }) => {
  const id = params.slug;
  const [workshop, setWorkshop] = useState<Workshop | null>(null);

  useEffect(() => {
    const fetchWorkshop = async () => {
      const response = await fetch(`/JSON/workshops.json`);
      const data = await response.json();
      const foundWorkshop = data.workshops.find((workshop: Workshop) => workshop.id.toString() === id);
      setWorkshop(foundWorkshop);
    };

    if (id) {
      fetchWorkshop();
    }
  }, [id]);

  if (!workshop) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto px-4 py-8 pt-32">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">{workshop.title}</h1>
        <p className="mb-4 text-lg text-gray-700">{workshop.description}</p>
        <p className="mb-4 font-medium">
          Activities: {
            Array.isArray(workshop.activities)
              ? workshop.activities.join(', ')
              : Object.entries(workshop.activities).map(([key, value]) => {
                  if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
                    return (
                      <div key={key} className="mb-3 p-4 shadow-lg border-l-4 border-blue-500 pl-2 rounded-lg bg-white">
                        <h3 className="font-semibold text-lg mb-2 text-blue-600">{key}</h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {value.map((element, idx) => (
                            <li key={idx}>{element}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                })
          }
        </p>
      </div>
    </>
  );
}

export default WorkshopDetails;