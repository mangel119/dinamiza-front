import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function Expand() {
  const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);
 
  return (
    <Fragment>
      <div className="flex gap-3">
        <Button onClick={() => handleOpen("xxl")} variant="gradient">
          Ver más
        </Button>
      </div>
      <Dialog
        open={
          size === "xxl"
        }
        size={size || "xxl"}
        handler={handleOpen}
      >
        <DialogHeader>Convocatoria</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cerrar</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Aceptar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

Expand.displayName = "/src/widgets/layout/expand.jsx";

export default Expand;