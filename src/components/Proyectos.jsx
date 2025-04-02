import React from 'react';

const Proyectos = () => {
    return (
        <section
            id="proyectos"
            className="min-h-screen flex flex-col items-center justify-center" >
            <img src="src/assets/img/planetas/jupiter.png" alt="Planeta" className="jupiter animate-float" />
            <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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


                    <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                        <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                        </div>
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

                    <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                            <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
                        </div>
                    </div>
                    <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                        <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
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
    );
};

export default Proyectos;
