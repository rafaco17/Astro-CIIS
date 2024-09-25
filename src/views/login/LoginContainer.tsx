import React, { useState } from 'react';

const LoginContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
                    {/* <a href="#" className="flex items-center mb-6 text-2xl font-semiboldtext-white">
                        CIIS XXV
                    </a> */}
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" >
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white outline-none focus:outline-blue-600"
                                    placeholder="Correo electrónico"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña"
                                    className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white outline-none focus:outline-blue-600"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center hover:bg-blue-800 duration-300"
                            >
                                Iniciar sesión
                            </button>
                            <div className="flex items-center justify-center flex-col">
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline text-primary-500">
                                    ¿Olvidaste tu contraseña?
                                </a>
                                <button
                                    type="submit"
                                    className="mt-8 w-1/2 text-white bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center duration-300 hover:bg-green-800"
                                >
                                    Crear cuenta nueva
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginContainer;
