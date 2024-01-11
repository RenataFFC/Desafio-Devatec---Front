import { createBrowserRouter } from "react-router-dom";
//import { Login } from "../views/Login";
//import { Register } from "../views/Register";
import { Home } from "../views/Home";



export const getRouter = (token: string | null) => {
  if (!token) {
    //telas publicas =>Rotas para usuários não autenticados
    return createBrowserRouter([
      {
        path: "*",
        id: "home",
        element: <Home />,
      },      
     /* {
        path: "/login",
        id: "login",
        element: <Login />,
      },*/
     
    ]);
  } else {
    //telas privadas => Rotas para usuários autenticados
    return createBrowserRouter([
      {
        path: "*",
        id: "home",
        element: <Home />,
      },
     /* {
        path: "/register",
        id: "register",
        element: <Register />,
      }  */
     
     
    ]);
  }
};