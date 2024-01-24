import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom"
import { getRouter } from "./router"

export const AuthorizeContext = createContext<any>(null);

export const App = () => {
    const  [token, setToken] = useState(localStorage.getItem('token') || '');
    return (
        <AuthorizeContext.Provider value={{token, setToken}}>
            <RouterProvider router={getRouter(token)}/>
        </AuthorizeContext.Provider>
        
    );
}


/*import React from 'react';
import Navbar from './components/General/Navbar';
import TelaPrincipal from './components/General/TelaPrincipal';
import Footer from './components/General/footer';
import ScrollToTopButton from './components/General/ScrollToTopButton';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <TelaPrincipal/>
      <Footer/>
      <ScrollToTopButton />
      
    </div>
  );
};

export default App;*/


