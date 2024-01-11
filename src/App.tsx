import React from 'react';
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

export default App;


