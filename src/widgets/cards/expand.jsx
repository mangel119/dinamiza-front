import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
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
        open={size === "xl"}
        size={size || "xl"}
        handler={handleOpen}
      >
        <div className="columns-2">
          <div>
            <DialogHeader>{props.nombre}</DialogHeader>
            <DialogBody divider>
              <div className="h-[8rem] overflow-scroll">
                {props.descripcion}
              </div>
              <div className="columns-3 mt-4">
                <Typography variant="h6">
                  Equipo:
                </Typography>
                <Typography>
                  {props.equipo}
                </Typography>
                <Typography variant="h6">
                  Categoria:
                </Typography>
                <Typography>
                  {props.categoria}
                </Typography>
                <Typography variant="h6">
                  Teléfono:
                </Typography>
                <Typography>
                  {props.telefono}
                </Typography>
                <Typography variant="h6">
                  Correo:
                </Typography>
                <Typography>
                  {props.correo}
                </Typography>
                <Typography variant="h6">
                  Inicio:
                </Typography>
                <Typography>
                  {new Date(props.inicio).toLocaleDateString("es-ES")}
                </Typography>
                <Typography variant="h6">
                  Fin:
                </Typography>
                <Typography>
                  {new Date(props.fin).toLocaleDateString("es-ES")}
                </Typography>
              </div>
            </DialogBody>
            <div className="fixed ml-4 pt-4 flex items-center justify-center">
              <Button color="blue">
                <a href={props.pdf} target="_blank">Términos y Referencias</a>
              </Button>
            </div>
          </div>
          <div className="pt-16 flex items-center justify-center">
            <img className="object-cover h-64 w-96" src={props.imagen} />
          </div>
        </div>
        <DialogFooter>
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
