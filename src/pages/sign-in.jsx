import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export function SignIn() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/teamwork.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Convocatorias Fondo Solidario y de Oportunidades
                </Typography>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Santiago de Cali, Valle del Cauca
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    El Fondo Solidario y de Oportunidades es una iniciativa de la Administración Distrital, que busca apoyar a los microempresarios y vendedores formales e informales, para fortalecer sus unidades de negocio a través de un crédito público.
                    </Typography>
                    <Button variant="text">Ver más</Button>

                    <div className="mb-2 flex items-center justify-center gap-2">
                      <div>
                      Categoria
                        <div>
                          <Checkbox label="Empleo" />
                          <Checkbox label="Emprendimiento" />
                        </div>
                      </div>
                      <div>
                      Equipo
                        <div>
                          <Checkbox label="Equipo1" />
                          <Checkbox label="Equipo2" />
                          <Checkbox label="Equipo3" />
                        </div>
                      </div>
                    </div>

                    <div className="Tabla">
                      <table>
                        <tr>
                          <th>Categoría</th>
                          <th>Nombre de la Convocatoria</th>
                          <th>Descripción</th>
                          <th>Fecha Inicio</th>
                          <th>Fecha Fin</th>
                          <th>Términos de Referencia</th>
                          <th>Equipo</th>
                          <th>Pieza Publicitaria</th>
                        </tr>
                        <tr>
                          <td>Empleo</td>
                          <td>Convocatoria 3</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                          <td>03/05/2023</td>
                          <td>03/05/2024</td>
                          <td>Documento.pdf</td>
                          <td>Equipo 2</td>
                          <td>Imagen.jpeg</td>
                        </tr>
                        <tr>
                          <td>Empleo</td>
                          <td>Convocatoria 1</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                          <td>13/10/2023</td>
                          <td>13/10/2024</td>
                          <td>Documento.pdf</td>
                          <td>Equipo 1</td>
                          <td>Imagen.jpeg</td>
                        </tr>
                        <tr>
                          <td>Emprendimiento</td>
                          <td>Convocatoria 6</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                          <td>08/02/2023</td>
                          <td>08/02/2024</td>
                          <td>Documento.pdf</td>
                          <td>Equipo 1</td>
                          <td>Imagen.jpeg</td>
                        </tr>
                        <tr>
                          <td>Empleo</td>
                          <td>Convocatoria 4</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                          <td>21/07/2023</td>
                          <td>21/07/2024</td>
                          <td>Documento.pdf</td>
                          <td>Equipo 3</td>
                          <td>Imagen.jpeg</td>
                        </tr>
                        <tr>
                          <td>Emprendimiento</td>
                          <td>Convocatoria 5</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                          <td>05/01/2023</td>
                          <td>05/01/2024</td>
                          <td>Documento.pdf</td>
                          <td>Equipo 2</td>
                          <td>Imagen.jpeg</td>
                        </tr>
                        <tr>
                          <td>Emprendimiento</td>
                          <td>Convocatoria 2</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                          <td>21/07/2023</td>
                          <td>21/07/2024</td>
                          <td>Documento.pdf</td>
                          <td>Equipo 3</td>
                          <td>Imagen.jpeg</td>
                        </tr>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default SignIn;
