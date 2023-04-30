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

export function Fondo() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/teamwork.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-gray-50 py-16 px-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-50">
        <div className="container mx-auto">
          <div className="px-6">
            <div className="text-center">
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Antecedentes
              </Typography>
            </div>
            <div className="mt-2 flex flex-wrap justify-center">
              <div className="flex w-full flex-col text-center px-4 lg:w-9/12">
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  La SDE siguiendo los lineamientos establecidos en el Plan de Desarrollo Territorial de la ciudad y
                  buscando mitigar los efectos que dejaron la pandemia y la crisis económica y social que vivió la
                  ciudad inició la estructuración del programa Fondo Solidario y de Oportunidades para atender al
                  tejido empresarial. En el año 2021, tras el estallido social, la crisis se agudizó y el tejido
                  empresarial pedía a gritos ayudas y alivios económicos para no quebrar. Finalmente, tras 2 años
                  de estructuración, el 12 de mayo la SDE adjudicó el convenio con el operador, para dar inicio al
                  programa.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-50">
        <div className="container mx-auto">
          <div className="px-6">
            <div className="text-center">
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Objetivo
              </Typography>
            </div>
            <div className="mt-2 flex flex-wrap justify-center">
              <div className="flex w-full flex-col text-center px-4 lg:w-9/12">
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Contribuir a la reactivación económica de la ciudad mediante el fortalecimiento financiero de
                  emprendimientos, actividades productivas de trabajadores informales y MiPymes, mediante el
                  otorgamiento de capital semilla, microcréditos y créditos para capital de trabajo que contribuyan a
                  la generación de ingresos y al fortalecimiento del empleo para el mejoramiento de la capacidad
                  productiva de la ciudad.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-50">
        <div className="container mx-auto">
          <div className="px-6">
            <div className="text-center">
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Población Objetivo
              </Typography>
            </div>
            <div className="mt-2 flex flex-wrap justify-center">
              <div className="flex w-full flex-col text-center px-4 lg:w-9/12">
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  Cualquier emprendedor, trabajador informal o MiPymes que presente a consideración iniciativas
                  que le permita crear, reactivar o fortalecer su actividad productiva aportando al desarrollo
                  económico y al fortalecimiento empresarial del Distrito de Santiago de Cali, generando ingresos y
                  fortaleciendo el empleo.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-50">
        <div className="container mx-auto">
          <div className="px-6">
            <div className="text-center">
              <Typography variant="h2" color="blue-gray" className="mb-2">
                Líneas de crédito
              </Typography>
            </div>
            <div className="container mx-auto">
              <div className="px-6">
                <div className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Microcrédito
                  </Typography>
                </div>
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col text-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Para el financiamiento de capital de trabajo para trabajadores informales,
                      MiPymes y emprendimientos.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="px-6">
                <div className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Capital de trabajo
                  </Typography>
                </div>
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col text-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Líneas de crédito dirigidas a personas jurídicas o naturales con plazos
                      no mayores a 36 meses, con el fin de apoyar la generación y/o incremento de ingresos de su
                      empresa, mediante la destinación de los recursos prestados para la compra de inventario, materia
                      prima y/o insumos, pago de nómina y pago de proveedores.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="px-6">
                <div className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    Capital semilla
                  </Typography>
                </div>
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col text-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      Dirigida para sector rural, sector cultural y población joven para compra de
                      equipos, maquinaria, herramientas, insumos y productos, que le permitan dinamizar su unidad de
                      negocio individuales o colectivas.
                    </Typography>
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

export default Fondo;
