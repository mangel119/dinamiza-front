import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";

import { Expand } from "@/widgets/cards/expand";
   
  export function Convcard() {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src="public\img\teamwork.jpeg" alt="img-blur-shadow" layout="fill" />
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