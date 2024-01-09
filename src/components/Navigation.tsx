import {useState, useEffect} from 'react';
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <div className={"ContainerNavigation"}>
      <nav className="navigation">
      {(toggleMenu || screenWidth > 500) && (
        <ul className="nav-links">
          <li className='items'><a href="#home">Home</a></li>
          <li className='items'><a href="#modules">Módulos</a></li>
          <li className='items'><a href="#users">Usuários</a></li>  
          <li className='items'><button className="login">Login</button></li>         
        </ul>
      )}
        <button onClick={toggleNav} className="btn-menu"><IoMdMenu size={'35px'} /></button>     
      </nav>
    </div>
  );
};
