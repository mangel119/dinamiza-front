import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from "react";

import { Expand } from "@/widgets/cards/expand";

export function Convcard() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/convocatorias");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="public\img\teamwork.jpeg"
          alt="img-blur-shadow"
          layout="fill"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Titulo
        </Typography>
        <Typography>
          Texto
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Expand />
        </div>
      </CardFooter>
    </Card>
  );
}

Convcard.displayName = "/src/widgets/layout/convcard.jsx";

export default Convcard;
