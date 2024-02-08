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
    progress: string;
  };

const ActivityDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activity, setActivity] = useState(null);

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
        <h1>{(activity as Activity).name}</h1>
        <p>Description: {(activity as Activity).description}</p>
        <p>Hours: {(activity as Activity).hours}</p>
        <p>Advantages: {(activity as Activity).advantages.join(', ')}</p>
        <p>Progress: {(activity as Activity).progress}</p>
    </div>
);
};

export default ActivityDetails;
