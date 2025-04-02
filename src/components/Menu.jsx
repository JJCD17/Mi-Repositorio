import React, { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Cierra el menú al dar clic en una sección
  };

  return (
    <div className="container">
      <div class="flex pt-5 pl-10 items-center gap-4">
        <img class="w-20 h-20 rounded-full" src="src/assets/img/yo/yo.jpg" alt="" />
        <div class="font-medium dark:text-white">
          <div>Jonathan Javier Cobos Domínguez</div>
          <div class="text-md text-gray-500 dark:text-gray-400">Ingeniero en Desarrollo y Gestión de Software
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Menu;
