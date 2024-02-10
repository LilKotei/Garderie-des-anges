import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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

const ActivityDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    const fetchActivity = async () => {
      const response = await fetch('/JSON/activities.json');
      const data = await response.json();
      const foundActivity = data.activities.find((activity : Activity) => activity.id.toString() === id);
      setActivity(foundActivity);
    };

    if (id) {
      fetchActivity();
    }
  }, [id]);

if (!activity) {
  return <p>Loading...</p>;
}

return (
  <div>
    <h1>{activity.name}</h1>
    <p>Description: {activity.description}</p>
    <p>Hours: {activity.hours}</p>
    <p>Advantages plan: {activity.advantages.map(element => (
      <div key={element.plan}>
        <p>{element.plan}</p>
        <p>{element.elements}</p>
      </div>
    ))}</p>
    <p>Progress: {activity.Progress}</p>
  </div>
);
    }

export default ActivityDetails;


