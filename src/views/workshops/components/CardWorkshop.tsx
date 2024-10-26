import IconDate from "../../../assets/workshops/IconDate"
import IconLocation from "../../../assets/workshops/IconLocation"
import IconPrice from "../../../assets/workshops/IconPrice"
import IconTime from "../../../assets/workshops/IconTime"

interface Props {
  id: number,
  src_speaker: string,
  src_workshop: string,
  title: string,
  date: string,
  start: string,
  end: string,
  location: string
  price: string
}

const CardWorkshop = ({ id, title, date, start, end, location, price, src_speaker, src_workshop }: Props) => {
  const handleClick = () => {
    window.location.href = `/workshops/pago/${encodeURIComponent(id)}`;
  }

  return (
      <div className="flex h-[300px] overflow-hidden border border-white/30 rounded-sm max-w-4xl hover:scale-105 group flex-col lg:flex-row px-2 py-4 sm:pl-6 sm:py-2 sm:px-1 lg:px-0 lg:py-0 lg:pl-8">
          <div className="flex w-full items-center gap-x-8">
              <div className="w-24 h-min rounded-full overflow-hidden">
                  <img className="w-full object-cover" src={src_speaker} alt="Imagen del expositor" loading="lazy"/>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-y-4 items-center lg:items-start gap-x-4">
                  <div className="flex flex-col gap-y-1">
                      <h4 className="uppercase font-bold text-sm sm:text-base md:text-lg lg:text-xl text-white/95 group-hover:underline">{title}</h4>
                      <div className="flex gap-x-2 text-white/80 text-xs md:text-sm lg:text-base">
                        <IconDate size={24} color="#7AAEF1" />
                        <span>{date}</span>
                      </div>
                      <div className="flex gap-x-2 text-white/80 text-xs md:text-sm lg:text-base">
                        <IconTime size={24} color="#7AAEF1" />
                        <span>{start} - {end}</span>
                      </div>
                      <div className="flex gap-x-2 text-white/80 text-xs md:text-sm lg:text-base">
                        <IconLocation size={24} color="#7AAEF1" />
                        <span>{location}</span>
                      </div>
                      <div className="flex gap-x-2 text-white/80 text-xs md:text-sm lg:text-base">
                        <IconPrice size={24} color="#7AAEF1" />
                        <span>S/.{price}</span>
                      </div>
                      <div></div>
                  </div>
                  <div className="w-full sm:w-min">
                      <button className="px-6 py-1 sm:px-6 sm:py-2 w-full text-sm sm:text-base bg-[#FAAEF1] font-semibold hover:font-bold hover:bg-[#AAAEF1] transition-colors rounded-full uppercase tracking-wider text-[#333333]" onClick={handleClick}>Inscribirse</button>
                  </div>
              </div>
          </div>
          <div className="h-full relative hidden lg:block">
              <img className="h-full object-cover" src={src_workshop} alt="Imagen de algo relacionado al taller" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/70"></div>
          </div>
      </div>
  )
}

export default CardWorkshop