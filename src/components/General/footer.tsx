// Footer.tsx

import { FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="tel:+123456789">
          <FaPhone /> Telefone
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;

