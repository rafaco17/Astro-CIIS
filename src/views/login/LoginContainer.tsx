import React, { useState } from 'react';
import { Color } from "../../models/colors";
import { useColorWithOpacity } from "../../utilities/use-color-with-opacity";


interface Props {
    disabled: boolean;
    handleLogin: () => void;
}

const LoginContainer = ({ disabled, handleLogin }: Props) => {

    const colorOverlay = Color.COLOR_BG_SURFACE_PRIMARY_CURRENT;
    const bg_overlay = useColorWithOpacity(colorOverlay, 0.7);
    const disabledStyle = disabled ? 'hidden' : '';
    console.log(disabledStyle);

    return (
        <div style={{ backgroundColor: bg_overlay }} className={`${disabledStyle}  w-dvw h-dvh overflow-hidden fixed z-[9999]`}>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="relative w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className="flex items-center mb-6 text-2xl font-semibold justify-between">
                                <h2>Iniciar sesión</h2>
                                <button onClick={handleLogin} className="text-gray-400 hover:text-white focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
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
                                        className="mt-8 w-2/3 text-white bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 hover:bg-green-800 md:text-md sm:w-1/2"
                                    >
                                        Crear cuenta nueva
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default LoginContainer;
