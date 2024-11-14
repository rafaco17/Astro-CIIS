import { Color } from "../../models/colors";
import { useColorWithOpacity } from "../../utilities/use-color-with-opacity";

interface Props {
  disabled: boolean;
  handleAd: () => void;
}

export default function AdContainer({ disabled, handleAd }: Props) {
  const colorOverlay = Color.COLOR_BG_SURFACE_PRIMARY_CURRENT;
  const bg_overlay = useColorWithOpacity(colorOverlay, 0.7);
  const disabledStyle = disabled ? "" : "hidden";

  return (
    <div
      style={{ backgroundColor: bg_overlay }}
      className={`${disabledStyle}  w-dvw h-dvh overflow-hidden fixed z-[9999]`}
    >
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="relative w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-center mb-6 text-2xl font-semibold justify-between">
                <h2>Anuncio Importante</h2>
                <button
                  onClick={handleAd}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4 md:space-y-6">
                <p>
                  Las ponencias del Congreso Internacional de Informatica y
                  Sistemas del día miércoles 13 de noviembre de 2024, se
                  realizarán en el Auditorio de la Escuela Profesional de
                  Medicina Veterinaria y Zootecnia de la Universidad Nacional
                  Jorge Basadre Grohmann (UNJBG).
                </p>
                <div>
                  <img className="w-full h-full" src="/ubicacion-auditorio-veterinaria.jpeg" alt="Auditorio de la Escuela Profesional de
                  Medicina Veterinaria y Zootecnia de la Universidad Nacional
                  Jorge Basadre Grohmann (UNJBG)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
