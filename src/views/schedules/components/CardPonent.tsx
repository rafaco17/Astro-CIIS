type ComponentProps = {
  time: string;
  name: string;
  profession: string;
  theme: string;
  img: string;
};

const CardPonent = ({ time, name, profession, theme, img }:ComponentProps) => {
  const convertTo12HourFormat = (dateString:string) => {
    const date = new Date(dateString)
    
    // Obtiene las horas y minutos
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0')
  
    // Determina si es AM o PM
    const ampm = hours >= 12 ? 'PM' : 'AM'
  
    // Convierte a formato de 12 horas
    hours = hours % 12
    hours = hours ? hours : 12 // El 0 se convierte en 12
  
    return `${hours}:${minutes} ${ampm}`
  }

  return (
    <article className="w-full card-custom flex rounded-2xl px-10 py-7 gap-7 text-slate-400 mx-2">
      <span className="font-bold text-5xl">{convertTo12HourFormat(time)}</span>
      <div>
        <p className="text-md">
          {name}
          <span className="text-gray-300"> - {profession}</span>
        </p>
        <h4 className="font-bold text-xl text-slate-100">{theme}</h4>
      </div>
      <div>
        <img src={img} alt="Foto perfil" />
      </div>
    </article>
  );
};

// Componente adicional, descomentado y convertido a React
const CardPonentCompact = ({ time, name, theme, img }:ComponentProps) => {
  return (
    <article className="component2 hidden w-full text-slate-400 mx-2">
      <header className="flex items-center gap-x-4">
        <h4 className="text-sm text-midu-primary">{name}</h4>
        <div className="flex-1 bg-white w-full h-[1px]"></div>
        <span className="text-sm text-white/50">{time}</span>
      </header>
      <div className="flex items-center mt-3 gap-x-3">
        <img className="object-cover object-center w-16 h-16 rounded-full" src={img} alt="Foto" />
        <h5 className="flex-1 font-bold text-white">{theme}</h5>
      </div>
    </article>
  );
};

// Exportando ambos componentes
export { CardPonent, CardPonentCompact };
