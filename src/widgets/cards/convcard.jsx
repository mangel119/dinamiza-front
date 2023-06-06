import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Expand } from "@/widgets/cards/expand";

export function Convcard() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/convocatorias");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpen = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      {data.map((item) => (
        <Card className="m-5 w-96" key={item.id}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img src="public\img\teamwork.jpeg" alt="img-blur-shadow" layout="fill" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {item.name}
            </Typography>
            <Typography>{item.description}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Expand propiedad1={item.name} propiedad2={item.description} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

Convcard.displayName = "/src/widgets/layout/convcard.jsx";

export default Convcard;