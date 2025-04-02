import React from 'react';

const Educacion = () => {
    return (
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
    );
};

export default Educacion;
