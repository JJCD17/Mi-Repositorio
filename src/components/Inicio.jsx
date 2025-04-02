import React from 'react';

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

const Inicio = () => {
    return (
        <section
            id="inicio" className="min-h-screen flex flex-col items-center justify-center text-center p-5 relative">
            <img src="src/assets/img/planetas/tierra.png" alt="Planeta" className="tierra animate-float" />
            <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
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
                    <svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>
                    <span>Descargar CV</span>
                </button>
            </div>
        </section>
    );
};

export default Inicio;
