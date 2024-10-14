export const Input = () => {
    return (
        <div className="w-[30%] mb-5">
            <label className="block text-sm p-1.5"
            >Ingresa tu documento de identidad</label
            >
            <div
                className="flex items-center relative rounded-full overflow-hidden border-[2px] border-red-600"
            >
                <input
                    className="bg-[#1b1b38] w-full h-[50px] py-0 px-5 outline-none text-base"
                    type="text"
                    name="dni"
                    placeholder="Ejemplo: 71717272"
                />
                <div
                    className={`rounded-full absolute right-0 w-12  h-full flex items-center justify-center bg-[#0e0e20]`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        ></path>
                    </svg>
                </div>
            </div>
            <span className="text-red-500 text-xs pl-4"
            >Este campo es obligatorio</span
            >
        </div>
    );
};