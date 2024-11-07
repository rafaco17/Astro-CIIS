import IconTime from "../../../../../assets/workshops/IconTime";

interface Props {
  src_speaker: string;
  degree_speaker: string;
  name_speaker: string;
  lastname_speaker: string;
  src_workshop: string;
  title: string;
  startDate: string;
  endDate: string;
}

const BtnWorkshop = ({
    className,
    label,
    handleClick,
    disabled = false
  }: {
    className: string;
    label: string;
    handleClick?: () => void
    disabled?: boolean
  }) => {
    return (
      <button
        className={`px-6 py-1 sm:px-6 sm:py-2 w-full lg:w-60 text-sm sm:text-base ${className} font-semibold hover:font-bold transition-colors rounded-full uppercase tracking-wider text-[#333333]`}
        onClick={handleClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  };

const CardAttendance = ({
  title,
  src_speaker,
  degree_speaker,
  name_speaker,
  lastname_speaker,
  src_workshop,
  startDate,
  endDate
}: Props) => {
  return (
    <div className="flex min-h-48 lg:h-[300px] overflow-hidden border border-white/30 rounded-sm max-w-4xl  group flex-col lg:flex-row px-2 py-4 sm:pl-6 sm:py-2 sm:px-1 lg:px-0 lg:py-0 lg:pl-8">
      <div className="flex w-full items-center gap-x-8">
        <div className="flex flex-col items-center gap-y-4">
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
          <span className="text-white/80 text-xs md:text-sm lg:text-base text-center">
            {degree_speaker} {lastname_speaker} {name_speaker}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-y-4 items-center lg:items-start gap-x-4">
          <div className="flex flex-col gap-y-1">
            <h4 className="uppercase font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white/95 group-hover:underline">
              {title}
            </h4>
            <div className="flex gap-x-2 text-white/80 text-xs md:text-sm lg:text-base">
              <IconTime size={24} color="#7AAEF1" />
              <span>
                {startDate} - {endDate} 
              </span>
            </div>
          </div>
          <div className="w-full sm:w-min">
            <BtnWorkshop
              className="bg-[#FAAEF1] hover:bg-[#AAAEF1]"
              label="Marcar Asistencia"
              handleClick={() => {}}
            />
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
          width={900}
          height={900}
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/70"></div>
      </div>
    </div>
  );
};

export default CardAttendance;
