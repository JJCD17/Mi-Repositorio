import { useState } from "react";

const Habilidades = () => {
    const [activeTab, setActiveTab] = useState("tecnicas");

    return (
        <section id="habilidades">
            <img src="src/assets/img/planetas/saturno.png" alt="Planeta" className="saturno animate-float" />
            <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                {/* Select para móviles */}
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select tab</label>
                    <select
                        id="tabs"
                        className="block w-full p-2.5 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        <option value="tecnicas">Técnicas</option>
                        <option value="blandas">Blandas</option>
                    </select>
                </div>

                {/* Tabs para escritorio */}
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 ">
                    <li className="w-full">
                        <button
                            onClick={() => setActiveTab("tecnicas")}
                            className={`inline-block w-full p-4 hover:transform-none ${activeTab === "tecnicas"
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                                }`}
                        >
                            Técnicas
                        </button>
                    </li>
                    <li className="w-full">
                        <button
                            onClick={() => setActiveTab("blandas")}
                            className={`inline-block w-full p-4 hover:transform-none ${activeTab === "blandas"
                                ? "bg-gray-100 dark:bg-gray-700"
                                : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                                }`}
                        >
                            Blandas
                        </button>
                    </li>
                </ul>

                {/* Contenido de los Tabs */}
                <div className="border-t border-gray-200 dark:border-gray-600 p-4">
                    {activeTab === "tecnicas" && (
                        <div className="p-4 bg-gray-800 rounded-lg md:p-8">
                            <h2 className="text-2xl font-bold mb-8">Habilidades Técnicas</h2>
                            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-white sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/html.png" alt="HTML5" />
                                    <dd className="text-gray-400">HTML5</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/css-3.png" alt="CSS3" />
                                    <dd className="text-gray-400">CSS3</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/angular.png" alt="Angular" />
                                    <dd className="text-gray-400">Angular</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/react.png" alt="React" />
                                    <dd className="text-gray-400">React</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/js.png" alt="JavaScript#" />
                                    <dd className="text-gray-400">JavaScript</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/mysql.png" alt="MySQL" />
                                    <dd className="text-gray-400">MySQL</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/csharp.png" alt="C#" />
                                    <dd className="text-gray-400">C#</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/flutter.png" alt="Flutter" />
                                    <dd className="text-gray-400">Flutter</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/Android_Studio.png" alt="Android Studio" />
                                    <dd className="text-gray-400">Android Studio</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/git.png" alt="Git" />
                                    <dd className="text-gray-400">Git</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/vscode.png" alt="VSCode" />
                                    <dd className="text-gray-400">VSCode</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="w-16 h-16" src="src/assets/img/logos/figma.png" alt="Figma" />
                                    <dd className="text-gray-400">Figma</dd>
                                </div>
                            </dl>
                        </div>
                    )}

                    {activeTab === "blandas" && (
                        <div className="p-4 bg-gray-800 rounded-lg md:p-8">
                            <h2 className="text-2xl font-bold mb-8">Habilidades Blandas</h2>
                            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-white sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-20 w-20" src="src/assets/img/habilidades/trabajo-en-equipo.png" />
                                    <dd className="text-gray-400">Trabajo en equipo</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-20 w-20" src="src/assets/img/habilidades/resolucion-de-problemas.png" />
                                    <dd className="text-gray-400">Resolución de problemas</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-20 w-20" src="src/assets/img/habilidades/creatividad.png" />
                                    <dd className="text-gray-400">Creatividad</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-20 w-20" src="src/assets/img/habilidades/reloj-de-arena.png" />
                                    <dd className="text-gray-400">Gestión del tiempo</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-20 w-20" src="src/assets/img/habilidades/libro.png" />
                                    <dd className="text-gray-400">Aprendizaje autónomo</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <img className="h-20 w-20" src="src/assets/img/habilidades/adaptacion.png" />
                                    <dd className="text-gray-400">Adaptación</dd>
                                </div>
                            </dl>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Habilidades;
