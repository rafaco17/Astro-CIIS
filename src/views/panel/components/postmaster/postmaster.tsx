import IconCertificate from "../congress/components/icon-certificate";
import IconClock from "../congress/components/icon-clock";
import IconLocation from "../congress/components/icon-location";
import TransparentsCards from "../congress/components/transparents-cards";
import style from "../congress/styles/congress.module.css";

const PostMaster = () => {
  const noRegisterCongress = `bg-green-400 text-black hover:bg-green-200 active:bg-green-100 ${style.heartbeat}`;
  const RegisterCongress = "bg-slate-600/60 text-slate-400";

  const registerInCongress =
    true; /* CON ESTA VARIABLE VAMOS MANEJAR EL ESTADO DEL BOTON*/

  return (
    <div className="p-2 sm:p-4 h-dvh w-full bg-slate-950">
      <div className="font-bold tracking-tighter mt-8 text-center select-none">
        
        <p className="uppercase text-3xl sm:text-4xl opacity-80">
        <strong className="text-4xl sm:text-5xl opacity-95">XXI</strong> postmaster
        </p>
        <p className="uppercase text-3xl sm:text-4xl opacity-75">
          Encuentro de egresados
          
        </p>
      </div>
      <div className="flex mt-6 w-full justify-center flex-col items-center xl:justify-evenly xl:flex-row">
        <TransparentsCards
          title_main="auditorio central "
          title_aside="de la UNJBG"
          icono={<IconLocation size={48} color="#7AAEF1" />}
        />
        <TransparentsCards
          title_aside="Certificado"
          title_main="incluye"
          icono={<IconCertificate size={48} color="#7AAEF1" />}
        />
        <TransparentsCards
          title_aside="13"
          title_main="Setiembre 2024"
          icono={<IconClock size={48} color="#7AAEF1" />}
        />
      </div>
      <div className="flex mt-8 lg:mt-12 items-center flex-col lg:flex-row gap-y-8 lg:gap-y-0">
        <div className="flex-1 flex justify-center relative">
          <div className="w-56 sm:w-64 overflow-hidden rounded-sm transition-transform hover:scale-110 active:scale-125 sm:active:scale-150 z-10">
            <img
              className="w-full object-cover select-none"
              src="https://scontent.ftcq3-1.fna.fbcdn.net/v/t39.30808-6/462773478_1065990592198921_7237956819216671983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vjr15Tf3qOAQ7kNvgF6YJhu&_nc_zt=23&_nc_ht=scontent.ftcq3-1.fna&_nc_gid=A9pSfPBrLoJLPKSP91gtaED&oh=00_AYAU376xBCO67DxnEzzviE6lMXIH17meXE2gaYTOc4ZFUQ&oe=6718F040"
              alt="ficha de ciis"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-y-4 relative z-0">
          <button
            className={`uppercase text-base sm:text-2xl rounded-full font-bold px-8 py-4 select-none transition-colors relative ${registerInCongress ? RegisterCongress : noRegisterCongress}`}
          >
            {registerInCongress
              ? "Evento finalizado"
              : "Completar inscripción"}
          </button>
          {registerInCongress ? (
            <span className="text-blue-400">
              Muchas gracias por su participación, lo esperamos el próximo año.
            </span>
          ) : (
            ""
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

export default PostMaster;
