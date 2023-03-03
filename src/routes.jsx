import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Inicio",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Convocatorias Generales",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Convocatorias Fondo Solidario y de Oportunidades",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Convocatorias Sistema de Desarrollo Empresarial",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
