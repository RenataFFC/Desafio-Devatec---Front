// router/index.tsx

import { createBrowserRouter } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
//import { Register } from "../views/Register";

export const routes = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-links',
    component: <Home />,
  },
  {
    title: 'Módulos',
    url: '/modulos',
    cName: 'nav-links',
    component: <Home />, // Substitua pelo componente correto
  },
  {
    title: 'Contato',
    url: '/contato',
    cName: 'nav-links',
    component: <Home />, // Substitua pelo componente correto
  },
  {
    title: 'Login',
    url: '/login',
    cName: 'nav-links-mobile',
    component: <Login />,
  },
];

export const getRouter = (token: string | null) => {
  if (!token) {
    // Telas públicas => Rotas para usuários não autenticados
    return createBrowserRouter([
      ...routes.map((route) => ({
        path: route.url,
        id: route.title.toLowerCase(),
        element: route.component,
      })),
    ]);
  } else {
    // Telas privadas => Rotas para usuários autenticados
    return createBrowserRouter([
      ...routes.map((route) => ({
        path: route.url,
        id: route.title.toLowerCase(),
        element: route.component,
      })),
      /*{
        path: "/register",
        id: "register",
        element: <Register />,
      },*/
    ]);
  }
};
