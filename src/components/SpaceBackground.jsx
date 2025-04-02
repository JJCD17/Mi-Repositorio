import React, { useState, useEffect } from 'react';
import '../styles/SpaceBackground.css';

const SpaceBackground = () => {
  const [cometKey, setCometKey] = useState(0);

  // Genera estrellas con mayor densidad en el centro
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 2 + 1; // Tamaño entre 1px y 3px

      // Posición basada en un patrón radial (mayor densidad en el centro)
      let angle = Math.random() * 2 * Math.PI;
      let radius = Math.pow(Math.random(), 1.5) * (window.innerWidth / 2);
      let x = Math.cos(angle) * radius + window.innerWidth / 2;
      let y = Math.sin(angle) * radius + window.innerHeight / 2;

      return (
        <div
          key={i}
          className="stars"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${y}px`,
            left: `${x}px`,
            opacity: Math.random() * 0.8 + 0.5,
          }}
        />
      );
    });
  };

  // Cambia la posición del cometa cada cierto tiempo
  useEffect(() => {
    const interval = setInterval(() => {
      setCometKey(prevKey => prevKey + 1);
    }, 7000); // Aparece cada 7 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-background">
      {/* Galaxia */}
      <div class="galaxy-center"></div>
      <div class="galaxy-arms"></div>

      {/* Estrellas */}
      {generateStars(300)}

      {/* Cometa dinámico */}
      <div
        key={cometKey}
        className="comet"
        style={{
          top: `${Math.random() * 50}vh`,
          left: `${Math.random() * 100}vw`,
        }}
      />
    </div>
  );
};

export default SpaceBackground;