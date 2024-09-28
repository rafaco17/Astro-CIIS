import type { Props } from "../adapters/adapter";

export const Plan = ({ name, src, description, price }: Props) => {

    return (
        <div
            className={`w-[350px] h-[450px] rounded-xl hover:scale-105 transition-transform overflow-hidden`}
        >
            <div
                className="w-full h-full  overflow-hidden flex flex-col justify-center items-center pb-6 bg-[#0e0e20]"
            >
                <div className="w-full h-1/2 relative">
                    <img
                        src={src}
                        className="object-cover h-full w-full opacity-50 blur-sm"
                        alt="Background"
                    />
                    <div
                        className="absolute inset-0 flex flex-col justify-center items-center z-50 text-center"
                    >
                        <div className={`text-3xl font-bold p-1 mb-3 `}>
                            {name}
                        </div>

                        <div className="font-normal text-[1rem] mb-5 text-[#b3b3b3] px-4">
                            {description}
                        </div>
                        <div className={`mt-2 text-5xl font-bold`}>{`S/. ${price}`}</div>
                    </div>
                </div>
                <div
                    className="w-full h-1/2 p-4 flex flex-col items-center justify-between"
                >
                    <ul className="planBenefits">
                        <li>Certificado de 120 horas</li>
                        <li>Kit de herramientas útiles en tu asistencia al evento</li>
                    </ul>
                    <button className={`w-1/2 bg-[#3e5ba380] py-2 text-white rounded-md font-bold`}>
                        !Lo quiero!
                    </button>
                </div>
            </div>
        </div>
    );
};