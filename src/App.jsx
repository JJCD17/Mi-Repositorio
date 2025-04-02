import React from "react";
import SpaceBackground from "./components/SpaceBackground";
import "./App.css";
import "./index.css";
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import Educacion from "./components/Educacion";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <div className="App">
      <SpaceBackground />
      <Menu />
      <Inicio />
      <Educacion />
      <Proyectos />
      <Habilidades />
      <Footer />
    </div>
  );
}

export default App;
