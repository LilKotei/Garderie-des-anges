import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type workshops = {
    id : number;
    title : string;
    description : string;
    activities : string[];
  }

const WorkshopDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [workshop, setWorkshop] = useState<workshops | null>(null);

    useEffect(() => {
        const fetchWorkshop = async () => {
          const response = await fetch('/JSON/workshops.json');
          const data = await response.json();
          const foundWorkshop = data.workshops.find((workshop: workshops) => workshop.id.toString() === id);
          setWorkshop(foundWorkshop);
        };
      
        if (id) {
          fetchWorkshop();
        }
      }, [id]);
      
      if (!workshop) {
        return <p>Loading...</p>;
      }
      
      return (
        <div>
          <h1>{workshop?.title}</h1>
          <p>Description: {workshop?.description}</p>
          <p>Activities: {workshop?.activities?.join(', ')}</p>
        </div>
      );
      
}

export default WorkshopDetails;