import { Inicio, Generales, Fondo, Sistema, Juventudes } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Inicio",
    path: "/inicio",
    element: <Inicio />,
  },
  {
    icon: UserCircleIcon,
    name: "Convocatorias Generales",
    path: "/generales",
    element: <Generales />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Convocatorias Fondo Solidario y de Oportunidades",
    path: "/fondo",
    element: <Fondo />,
  },
  {
    icon: UserPlusIcon,
    name: "Convocatorias Sistema Desarrollo Empresarial",
    path: "/sistema",
    element: <Sistema />,
  },
  {
    icon: UserPlusIcon,
    name: "Convocatorias Juventudes",
    path: "/juventudes",
    element: <Juventudes />,
  },
];

export default routes;
