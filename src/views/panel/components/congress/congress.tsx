import { useEffect, useState } from "react";
import Flags from "./components/flags";
import IconCertificate from "./components/icon-certificate";
import IconClock from "./components/icon-clock";
import IconLocation from "./components/icon-location";
import TransparentsCards from "./components/transparents-cards";
import style from "./styles/congress.module.css";
import { useAuth } from "../../../../hooks/use-auth";
import { status } from "../../services/status";

const Congress = () => {
  const [inscriptionCiis, setInscriptionCiis] = useState<any | null>(null);
  const { user } = useAuth();

  const handleClick = () => {
    if (user.plan_ciis.length > 0) {
      location.href = `/registro/pago/${encodeURIComponent(user.plan_ciis)}`;
    } else {
      location.href = `/registro/planes`;
    }
  }

  useEffect(() => {
    if (user) {
      setInscriptionCiis({
        status: user.dataCiis,
        ...status[user.dataCiis]
      });
    }
  }, [user]);

  const noRegisterCongress = `bg-green-400 text-black hover:bg-green-200 active:bg-green-100 ${style.heartbeat}`;
  const RegisterCongress = "bg-slate-600/60 text-slate-400";

  const registerInCongress = (inscriptionCiis?.status < 3); /* CON ESTA VARIABLE VAMOS MANEJAR EL ESTADO DEL BOTON*/

  return (
    <div className="p-2 sm:p-4 h-dvh w-full bg-slate-950">
      <div className="font-bold tracking-tighter mt-8 text-center select-none">
        <p className="uppercase text-3xl sm:text-4xl opacity-95">congreso internacional</p>
        <p className="uppercase text-3xl sm:text-4xl opacity-85">
          de informática y sistemas{" "}
          <strong className="text-4xl sm:text-5xl opacity-100">XXV</strong>
        </p>
      </div>
      <div className="flex mt-6 w-full justify-center flex-col items-center xl:justify-evenly xl:flex-row">
        <TransparentsCards
          title_main="auditorio juan figueroa "
          title_aside="salgado"
          icono={<IconLocation size={48} color="#7AAEF1" />}
        />
        <TransparentsCards
          title_aside="Certificado"
          title_main="incluye"
          icono={<IconCertificate size={48} color="#7AAEF1" />}
        />
        <TransparentsCards
          title_aside="11 al 15"
          title_main="Noviembre 2024"
          icono={<IconClock size={48} color="#7AAEF1" />}
        />
      </div>
      <div className="flex mt-8 lg:mt-12 items-center flex-col lg:flex-row gap-y-8 lg:gap-y-0">
        <div className="flex-1 flex justify-center relative">
          <div className="w-56 sm:w-64 overflow-hidden rounded-sm transition-transform hover:scale-110 active:scale-125 sm:active:scale-150 z-10">
            <img
              className="w-full object-cover select-none"
              src="/PortadaCIIS.webp"
              alt="Ficha del CIIS XXV"
              loading="lazy"
              decoding="async"
              width={1600}
              height={900}
              draggable="false"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-y-4 relative z-0">
          <button
            className={`uppercase text-base sm:text-2xl rounded-full font-bold px-8 py-4 select-none transition-colors relative ${registerInCongress ? RegisterCongress : noRegisterCongress}`}
            onClick={handleClick}
            disabled={registerInCongress}
          >
            {registerInCongress
              ? (<>{inscriptionCiis.label}</>)
              : (user.plan_ciis ? "Completar inscripción" : "Inscribirse")}
          </button>
          {registerInCongress && (
            <>
              {inscriptionCiis.status === 0 && (<span className="text-blue-400">
                Los organizadores estarán validando la inscripción
              </span>)}
              {inscriptionCiis.status === 1 && (<span className="text-green-400">
                Completaste con éxito la inscripción
              </span>)}
              {inscriptionCiis.status === 2 && (<span className="text-red-400">
                Hubo una observación con la inscripción
              </span>)}
            </>
          )}
        </div>
      </div>

      {/* <div className="mt-8">
        <Flags />
      </div> */}
      {/* <div className="text-base text-center text-slate-200 uppercase tracking-widest space-y-1">
        <strong>
          universidad nacional jorge basadre grohmann
        </strong>
        <p>Facultad de ingeniería</p>
        <p>
          escuela profesional de ingeniería en informática y sistemas
        </p>
      </div> */}
      {/* <div className="flex-1">
          <div className="text-3xl text-center">
            <p> <strong className="text-4xl">11</strong> al <strong className="text-4xl">15</strong></p>
            <p className="uppercase font-semibold">noviembre</p>
            <p className="font-semibold">2024</p>
          </div>
          <span className="text-slate-300 block mt-2">
            Este evento reúne a expertos y profesionales de todo el mundo para
            compartir conocimientos, experiencias y avances en el campo de la
            informática y los sistemas. No te pierdas esta oportunidad de
            aprendizaje y crecimiento profesional. ¡Te esperamos!
          </span>
        </div> */}
    </div>
  );
};

export default Congress;
 