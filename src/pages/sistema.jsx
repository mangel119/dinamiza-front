import { Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Table } from "@/widgets/cards";
import { Convcard } from "@/widgets/cards/convcard.jsx";

export function Sistema() {
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
                  Convocatorias Sistema Desarrollo Empresarial
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
                      El Sistema de Desarrollo Empresarial es un organismo que reúne a las entidades de apoyo y fortalecimiento a emprendedores y empresarios de la ciudad. Conectamos a los emprendedores y empresarios con las oportunidades que los impulsan a crecer.
                    </Typography>
                  </div>
                  <div className="container mx-auto flex flex-wrap justify-center">
                    <Convcard />
                    <Convcard />
                    <Convcard />
                    <Convcard />
                    <Convcard />
                    <Convcard />
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
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full flex-col text-center px-4 lg:w-9/12">
                <Typography className="mb-8 font-normal text-blue-gray-500">
                  La Alcaldía de Cali a través de la Secretaría de Desarrollo Económico lidera el Sistema de Desarrollo Empresarial que apoya y acompaña a empresas de la ciudad para su crecimiento y fortalecimiento por medio de la articulación de 58 entidades enfocadas al emprendimiento y que aportan al progreso de Cali.
                  El SIDE tiene como propósito facilitar las condiciones para el fortalecimiento del tejido empresarial en el Municipio de Santiago de Cali.
                  <ul>
                  <li>
                    1.Identificar la necesidad y oportunidades en el ecosistema.
                  </li>
                  <li>
                    2.Dinamizar un modelo de desarrollo empresarial para atención al empresario.
                  </li>
                  <li>
                    3.Generar estrategias que permitan cohesión y pertinencia.
                  </li>
                  <li>
                    4.Propiciar la continuidad de un crecimiento colectivo.
                  </li>
                  </ul>
                </Typography>
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

export default Sistema;
