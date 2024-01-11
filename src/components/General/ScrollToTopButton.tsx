// ScrollToTopButton.tsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';


const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(scrollTop > 100); // Exibir o botão quando o usuário rolar para baixo 100 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
