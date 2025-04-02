import React from "react";
import SpaceBackground from "./components/SpaceBackground";
import Menu from "./components/Menu";
import "./App.css";
import "./index.css";
import Footer from "./components/Footer";
import Habilidades from "./components/Habilidades";

const handleDownload = () => {
  // Ruta del archivo a descargar
  const fileUrl = "src/assets/CV.pdf";
  const fileName = "CV.pdf";

  // Crear un enlace temporal
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;

  // Simular el clic en el enlace para iniciar la descarga
  document.body.appendChild(link);
  link.click();

  // Eliminar el enlace del DOM
  document.body.removeChild(link);
};

function App() {
  return (
    <div className="App">
      <SpaceBackground />
      <Menu />
      {/* Sección Inicio */}
      <section
        id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center p-5 relative">
        <img src="src/assets/img/planetas/tierra.png" alt="Planeta" className="tierra animate-float" />
        <h1 className="text-5xl font-bold mb-4 text-cyan-500">
          Jonathan Javier Cobos Domínguez
        </h1>
        <h2 className="text-3xl mb-8">
          Ingeniero en Gestión y Desarrollo de Software
        </h2>
        <p>
          Hola, Soy Jonathan, desarrollador de software con pasión por la innovación y la creación de soluciones tecnológicas.
          Siempre en busca de nuevos retos que me ayuden a crecer profesionalmente y a llevar mis habilidades al siguiente nivel.
          Me motiva aprender, crear y construir experiencias.
          <span className="font-bold block">
            ¡Listo para la próxima gran oportunidad! 🚀
          </span>
        </p>
        <h2 className="text-mid">
          <span className="font-bold">Correo: </span>jjcd1706@gmail.com
        </h2>

        <div className="buttons flex gap-4 pt-5">
          <button
            className="btn-github px-6 py-2 rounded-lg transition-all flex items-center gap-2"
            onClick={() => window.open("https://github.com/JJCD17", "_blank")}>
            <img className="w-5 h-5" src="src/assets/img/logos/github.png" alt="GitHub" />
            <span>GitHub</span>
          </button>
          <button className="btn-cv px-6 py-2 rounded-lg transition-all flex items-center gap-2" onClick={handleDownload} >
            <img className="w-5 h-5" src="src/assets/img/logos/cv.png" alt="CV" />
            <span>Descargar CV</span>
          </button>
        </div>
      </section>

      {/* Educación */}
      <section
        id="educacion"
        className="min-h-screen flex flex-col items-center justify-center text-center p-5 relative" >
        <img src="src/assets/img/planetas/marte.png" alt="Planeta" className="marte animate-float" />
        <h2 className="text-3xl font-bold mb-4">Educación</h2>
        <div className="education-item">
          <h3>Ingeniería en Desarrollo y Gestión de Software</h3>
          <p className="text-center">Universidad Tecnológica de Chihuahua</p>
        </div>
        <div className="education-item">
          <h3>
            Técnico Superior Universitario en Desarrollo de Software Multiplataforma
          </h3>
          <p className="text-center">Universidad Tecnológica de Chihuahua</p>
        </div>
        <div className="education-item">
          <h3>Técnico Medio Superior en Programación</h3>
          <p className="text-center">
            Centro de Estudios Tecnológicos Industriales y de Servicios
          </p>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section
        id="proyectos"
        className="min-h-screen flex flex-col items-center justify-center" >
        <img src="src/assets/img/planetas/jupiter.png" alt="Planeta" className="jupiter animate-float" />
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="bg-gradient-to-b from-gray-800 to-transparent p-6 rounded-2xl shadow-lg max-w-sm text-white border 
          border-gray-700">
            <h2 className="text-xl font-semibold">
              App de inventario para Ferretería
            </h2>
            <p className="text-gray-400 mt-2">
              Aplicacion de inventario para la ferreteria del hogar donde se puede agregar, eliminar y actualizar los productos en
              la ferreteria. En la aplicacion se puede agregar productos, eliminar productos y actualizar productos.
            </p>
            <div className="mt-6 bg-gray-800 rounded-xl p-4 flex items-center justify-center">
              <img src="src/assets/img/varios/laptop.png" alt="Devtools Preview" className="w-full h-auto rounded-md" />
            </div>
            <div className="mt-4 flex flex-row justify-center gap-6">
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/flutter.png" alt="Flutter" />
                <p className="text-sm mt-2">Flutter</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/sqlite.png" alt="SQLite" />
                <p className="text-sm mt-2">SQLite</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-gradient-to-b from-gray-800 to-transparent p-6 rounded-2xl shadow-lg max-w-sm text-white border 
          border-gray-700">
            <h2 className="text-xl font-semibold">Videojuego NightRide</h2>
            <p className="text-gray-400 mt-2">
              Videojuego de carreras con personalizacion de vehiculos, donde se puede elegir el color, la marca y el modelo del
              vehiculo. En una ciudad futurista emergida por la noche y las carreras callejeras.
            </p>
            <div className="mt-6 bg-gray-800 rounded-xl p-4 flex items-center justify-center">
              <img src="src/assets/img/varios/laptop.png" alt="Devtools Preview" className="w-full h-auto rounded-md" />
            </div>
            <div className="mt-4 flex flex-row justify-center gap-6">
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/unity.png" alt="Unity" />
                <p className="text-sm mt-2">Unity</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/mongodb.png" alt="MongoDB" />
                <p className="text-sm mt-2">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/react.png" alt="React" />
                <p className="text-sm mt-2">React</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-gradient-to-b from-gray-800 to-transparent p-6 rounded-2xl shadow-lg max-w-sm text-white border 
          border-gray-700">
            <h2 className="text-xl font-semibold pb-5">
              Sitio web Marfilighting
            </h2>
            <p className="text-gray-400 mt-2">
              Reconstruccion de sitio web la empresa Marfilighting donde se actualiza el sitio web a nuevas tecnologias asi evitando vulnerabilidades de seguridad.
            </p>
            <div className="mt-6 bg-gray-800 rounded-xl p-4 flex items-center justify-center">
              <img src="src/assets/img/varios/laptop.png" alt="Devtools Preview" className="w-full h-auto rounded-md" />
            </div>
            <div className="mt-4 flex flex-row justify-center gap-6">
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/angular.png" alt="Angular" />
                <p className="text-sm mt-2">Angular</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/mysql.png" alt="MySQL" />
                <p className="text-sm mt-2">MySQL</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/nodejs.png" alt="Nodejs" />
                <p className="text-sm mt-2">Nodejs</p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-gradient-to-b from-gray-800 to-transparent p-6 rounded-2xl shadow-lg max-w-sm text-white border 
          border-gray-700">
            <h2 className="text-xl font-semibold">
              Puerta de cerradura inteligente
            </h2>
            <p className="text-gray-400 mt-2">
              App de control de puertas de cerradura inteligente utilizando un mecanismo de reconocimiento en la puerta y cuando
              uno desee abrir la puerta se puede hacer con el click de un boton en la aplicacion o en el sitio web.
            </p>
            <div className="mt-6 bg-gray-800 rounded-xl p-4 flex items-center justify-center">
              <img src="src/assets/img/varios/laptop.png" alt="Devtools Preview" className="w-full h-auto rounded-md" />
            </div>
            <div className="mt-4 flex flex-row justify-center gap-6">
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/flutter.png" alt="Flutter" />
                <p className="text-sm mt-2">Flutter</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/mongodb.png" alt="MongoDB" />
                <p className="text-sm mt-2">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/nodejs.png" alt="Nodejs" />
                <p className="text-sm mt-2">Nodejs</p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="bg-gradient-to-b from-gray-800 to-transparent p-6 rounded-2xl shadow-lg max-w-sm text-white border 
          border-gray-700">
            <h2 className="text-xl font-semibold">Portafolio</h2>
            <p className="text-gray-400 mt-2">
              Mi portafolio es una PWA interactiva con temática espacial, diseñada para mostrar mis proyectos de desarrollo de
              software, videojuegos y aplicaciones. Utiliza tecnologías modernas para ofrecer una experiencia fluida y envolvente.
            </p>
            <div className="mt-6 bg-gray-800 rounded-xl p-4 flex items-center justify-center">
              <img src="src/assets/img/varios/laptop.png" alt="Devtools Preview" className="w-full h-auto rounded-md" />
            </div>
            <div className="mt-4 flex flex-row justify-center gap-6">
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/react.png" alt="React" />
                <p className="text-sm mt-2">React</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/taildwind.png" alt="Tildwind" />
                <p className="text-sm mt-2">Taildwind</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/js.png" alt="JavaScript" />
                <p className="text-sm mt-2">JavaScript</p>
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="bg-gradient-to-b from-gray-800 to-transparent p-6 rounded-2xl shadow-lg max-w-sm text-white border border-gray-700">
            <h2 className="text-xl font-semibold pb-5">Basar de Funkos</h2>
            <p className="text-gray-400 mt-2">
              Sitio web realizado como proyecto escolar que simula un e-commerce de venta de Funko-Pops. Utilizando las
              tecnologias y conocimientos adquiridos durante los primeros 3 cuatrimestres de la carrera.
            </p>
            <div className="mt-6 bg-gray-800 rounded-xl p-4 flex items-center justify-center">
              <img src="src/assets/img/varios/laptop.png" alt="Devtools Preview" className="w-full h-auto rounded-md" />
            </div>
            <div className="mt-4 flex flex-row justify-center gap-6">
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/html.png" alt="HTML" />
                <p className="text-sm mt-2">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/css-3.png" alt="CSS" />
                <p className="text-sm mt-2">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/js.png" alt="JavaScript" />
                <p className="text-sm mt-2">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="w-12 h-12" src="src/assets/img/logos/php.png" alt="PHP" />
                <p className="text-sm mt-2">PHP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Habilidades />
      <Footer />
    </div>
  );
}

export default App;
