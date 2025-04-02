import { useEffect, useState } from "react";

//OPCION A FUTURO PUNTERO PERSONALIZADO CON IMAGEN DE COHETE

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <img
      src="/cohete.png"
      alt="Cursor Cohete"
      className="fixed pointer-events-none w-12 h-12 transition-transform duration-75"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%) rotate(-10deg)",
        zIndex: 9999,
      }}
    />
  );
}
