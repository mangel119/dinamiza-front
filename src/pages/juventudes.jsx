import { Typography } from "@material-tailwind/react";
import {
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Convcardj } from "@/widgets/cards/convcardj.jsx";

import './App.css';

export function Juventudes() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/juventudes.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Convocatorias Juventudes
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
                    Las convocatorias para juventudes son llamados o invitaciones abiertas dirigidas a jóvenes con el fin de 
                    brindarles oportunidades de participación, desarrollo y crecimiento en diversos ámbitos. 
                    </Typography>
                  </div>
                  <div className="container mx-auto flex flex-wrap justify-center">
                    <Convcardj />
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

export default Juventudes;