import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { ComputerDesktopIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Inicio() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Bienvenidos a Dinamiza
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Desde la Secretaría de Desarrollo Económico de Cali, nace
                Dinamiza. Aquí encontraras información relacionada con las
                convocatorias que la Secretaría y sus aliados tienen para
                nuestra comunidad caleña.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <ComputerDesktopIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Economía Digital
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                La economía digital se refiere al uso de las tecnologías de la información en los procesos de producción de bienes y servicios, así como en su comercialización y consumo. Este término pone de manifiesto cómo la industria crea productos y servicios nuevos o transforma los existentes, aprovechando la tecnología.
                <br />
                <br />
              </Typography>
              <a target="_blank" href="https://talentotic.cali.gov.co">
              <Button variant="outlined">Saber más</Button>
              </a> 
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="h-50">
                  <img
                    alt="Card Image"
                    src="/img/talentotic.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Talento TIC
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Es una iniciativa de la Secretaría de Desarrollo Económico de Cali, cuyo objetivo es proveer al sector empresarial de Cali de personas que pudan suplir sus necesidades de talento humano con competencias en tecnología.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <ArrowPathIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Economía Circular
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              La economía circular promueve la eficiencia en el uso de materiales, agua y energía; considerando la capacidad de recuperación de los ecosistemas, el uso circular de los flujos de materiales y la extensión de la vida útil a través de la innovación tecnológica, colaboración y alianzas entre actores y el impulso de modelos de negocios sostenibles.
                <br />
                <br />
              </Typography>
              <a target="_blank" href="http://calicircular.cali.gov.co">
              <Button variant="outlined">Saber más</Button>
              </a> 
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-50">
                  <img
                    alt="Card Image"
                    src="/img/calicircular.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    CaliCircular
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Es un modelo de desarrollo y gestión de ciudad para fomentar la transición hacia la Economía Circular, el cual es gestionado a través de la Secretaría de Desarrollo Económico de Cali.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="¡Anímate!">
            Inscríbete en alguna de las convocatorias que tenemos para ti.
          </PageTitle>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Inicio;
