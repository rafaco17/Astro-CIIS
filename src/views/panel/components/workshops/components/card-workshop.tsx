interface Props {
  src_speaker: string;
  src_workshop: string;
  title: string;
  date: string;
  location: string;
}

const CardWorkshop = ({
  title,
  date,
  location,
  src_speaker,
  src_workshop,
}: Props) => {
  return (
    <div className="flex max-h-48 overflow-hidden border border-white/30 rounded-sm max-w-4xl hover:scale-105 group flex-col lg:flex-row px-2 py-4 sm:pl-6 sm:py-2 sm:px-1 lg:px-0 lg:py-0 lg:pl-8">
      <div className="flex w-full items-center gap-x-8">
        <div className="w-24 h-min rounded-full overflow-hidden">
          <img
            className="w-full object-cover"
            src={src_speaker}
            alt="Imagen del expositor"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            draggable="false"
          />
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-y-4 items-center lg:items-start gap-x-4">
          <div className="flex flex-col gap-y-1">
            <h4 className="uppercase font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white/95 group-hover:underline">
              {title}
            </h4>
            <p className="text-white/80 text-xs md:text-sm lg:text-base ">
              {date}
            </p>
            <p className="text-white/80 text-xs md:text-sm lg:text-base ">
              {location}
            </p>
          </div>
          <div className="w-full sm:w-min">
            <button className="px-6 py-1 sm:px-6 sm:py-2 w-full text-sm sm:text-base bg-[#FAAEF1] font-semibold hover:font-bold hover:bg-[#AAAEF1] transition-colors rounded-full uppercase tracking-wider text-[#333333]">
              Inscribirse
            </button>
          </div>
        </div>
      </div>
      <div className="h-full relative hidden lg:block">
        <img
          className="h-full object-cover"
          src={src_workshop}
          alt="Imagen de algo relacionado al taller"
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/70"></div>
      </div>
    </div>
  );
};

export default CardWorkshop;
