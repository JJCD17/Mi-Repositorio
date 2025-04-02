import React, { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Cierra el menú al dar clic en una sección
  };

  return (
    <div className={`menu ${isOpen ? 'active' : ''}`}>
      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <ul>
        <li onClick={() => handleScroll('inicio')}>Inicio</li>
        <li onClick={() => handleScroll('educacion')}>Educación</li>
        <li onClick={() => handleScroll('proyectos')}>Proyectos</li>
        <li onClick={() => handleScroll('habilidades')}>Habilidades</li>
      </ul>
    </div>
  );
};

export default Menu;
