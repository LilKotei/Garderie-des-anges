// pages/activities/index.tsx
import Navbar from "@/components/NavBar";
import React, { useEffect, useState } from 'react';
import path from 'path';
import fs from 'fs/promises';

// Define a type for your activity data
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
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold">Nos activités</h1>
                <div className="flex flex-wrap justify-center items-center">
                    {activities.map((activity : Activity) => (
                        <div key={activity.id} className="flex flex-col justify-center items-center m-4 p-4 bg-white shadow-md rounded-md">
                            <h2 className="text-2xl font-bold">{activity.name}</h2>
                            <p>{activity.description}</p>
                            {/* Handle both string and array for hours */}
                            <p>Hours: {Array.isArray(activity.hours) ? activity.hours.join(', ') : activity.hours}</p>
                            {/* Map through the advantages array */}
                            {activity.advantages.map((adv, index) => (
                                <div key={index}>
                                    <h3>{adv.plan}</h3>
                                    {adv.elements.map((element, idx) => (
                                        <p key={idx}>{element}</p>
                                    ))}
                                </div>
                            ))}
                            <p>Progress: {activity.progress}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

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