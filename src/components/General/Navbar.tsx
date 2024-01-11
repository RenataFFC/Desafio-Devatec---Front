import  { useState } from "react";
import { MenuItems } from "./MenuItems";
import Logo from "../../assets/imagens/imgLogo.svg";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Button } from "../General/Button";



const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <img className="ImgLogo" src={Logo} alt="Logo " />
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? <IoMdMenu /> : <MdClose />}
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Button type="button" onClick={() => console.log('Login clicked')} buttonStyle="btn--outline" buttonSize="btn--medium">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
