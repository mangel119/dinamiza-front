import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function Expand(props) {
  const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);
 
  return (
    <Fragment>
      <div className="flex gap-3">
        <Button onClick={() => handleOpen("xl")} variant="gradient">
          Ver más
        </Button>
      </div>
      <Dialog
        open={
          size === "xl"
        }
        size={size || "xl"}
        handler={handleOpen}
      >
        <DialogHeader>{props.propiedad1}</DialogHeader>
        <DialogBody divider>
          {props.propiedad2}
        </DialogBody>
        <DialogFooter>
{/*
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cerrar</span>
          </Button>
*/}
          <Button
            variant="gradient"
            color="red"
            onClick={() => handleOpen(null)}
          >
            <span>Cerrar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

Expand.displayName = "/src/widgets/layout/expand.jsx";

export default Expand;