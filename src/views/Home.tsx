
import Navbar  from "../components/General/Navbar"
//import TelaPrincipal from "../components/General/TelaPrincipal";
import Footer from "../components/General/Footer";
import Aulas from "../components/General/Aulas";

//import { Login } from "./Login";


export const Home = () => {
  return (
    <div>
     <Navbar />
      <Aulas/>  
      <Footer/> 
    </div>
  );
};
