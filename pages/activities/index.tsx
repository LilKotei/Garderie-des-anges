import Navbar from "@/components/NavBar";
import React, { useEffect, useState } from 'react';
import path from 'path';
import fs from 'fs/promises';

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

const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);
  
    useEffect(() => {
      const fetchActivities = async () => {
        const response = await fetch('/JSON/activities.json');
        const data = await response.json();
        setActivities(data.activities);
      };
  
      fetchActivities();
    }, []);
  
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="flex flex-col items-center justify-center py-10">
                <h1 className="text-5xl font-bold text-blue-600 mb-8">Nos activités</h1>
                <div className="flex flex-wrap justify-center items-center">
                    {activities.map((activity: Activity) => (
                        <div key={activity.id} className="m-4 p-6 bg-white shadow-lg rounded-lg max-w-sm">
                            <h2 className="text-xl font-semibold text-blue-500 mb-2">{activity.name}</h2>
                            <p className="text-gray-700 mb-4">{activity.description}</p>
                            <p className="text-sm text-gray-600">Hours: {Array.isArray(activity.hours) ? activity.hours.join(', ') : activity.hours}</p>
                            {activity.advantages.map((adv, index) => (
                                <div key={index} className="mt-3">
                                    <h3 className="font-semibold">{adv.plan}</h3>
                                    {adv.elements.map((element, idx) => (
                                        <p key={idx} className="text-sm text-gray-600">{element}</p>
                                    ))}
                                </div>
                            ))}
                            <p className="text-sm text-gray-600 mt-3">Progress: {activity.progress}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'public', 'JSON', 'activities.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    return {
        props: {
            // Ensure that we are passing the activities array, not the object
            activities: data.activities,
        },
    };
};

export default ActivitiesPage;