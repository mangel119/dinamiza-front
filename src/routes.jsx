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
    name: "inicio",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "convocatorias",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "fondo solidario y de oportunidades",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "sistema de desarrollo empresarial",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
