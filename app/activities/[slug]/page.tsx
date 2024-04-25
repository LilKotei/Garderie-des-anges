"use client";
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../../_components/NavBar';
import Footer from '../../_components/Footer';

type Activity = {
  id: number;
  name: string;
  description: string;
  hours: string | string[];
  advantages: {
    plan: string;
    elements: string[];
  }[];
  Progress: string;
};

const ActivityDetails = ({ params }: { params: { slug: string } }) => {
  const id = params.slug;
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      const response = await fetch('/JSON/activities.json');
      const data = await response.json();
      const foundActivity = data.activities.find((activity: Activity) => activity.id.toString() === id);
      setActivity(foundActivity);
    };

    if (id) {
      fetchActivity();
    }
  }, [id]);

  if (!activity) {
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
        <h1 className="text-4xl font-bold text-blue-600 mb-6">{activity.name}</h1>
        <p className="mb-4 text-lg text-gray-700">{activity.description}</p>
        <p className="mb-4 font-medium">
          Hours: {activity && activity.hours ? (typeof activity.hours === 'string' ? activity.hours : activity.hours.join(', ')) : 'Loading...'}
        </p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Advantages Plan:</h2>
          {activity.advantages.map((adv, index) => (
            <div key={index} className="mb-3 p-4 shadow-lg border-l-4 border-blue-500 pl-2 rounded-lg bg-white">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">{adv.plan}</h3>
              <ul className="list-disc list-inside text-gray-600">
                {adv.elements.map((element, idx) => (
                  <li key={idx}>{element}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium my-4 text-blue-500">Progress: {activity.Progress}</p>
      </div>
      <Footer companyName="Creche Garderie des Anges" year={new Date().getFullYear()} />
    </>
  );
}

export default ActivityDetails;