import type Ponent from "../adapters/ponent";
import { CardPonent } from "./CardPonent";
import { format } from "date-fns";

interface props {
  ponentes: any,
  day: string,
  date: string
}

export const DaySchedules = ({ponentes, day, date}: props) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // const ponentsEarly = ponentes.early
  // const ponentsLate = ponentes['late']
  return (
    <div className="w-full flex flex-col rounded-2xl gap-5">
      <h3 className="text-center text-4xl font-bold mb-4 text-blue-500">{capitalizeFirstLetter(day)} {format(new Date(date), "dd/MM/yyyy")}</h3>
      {
        capitalizeFirstLetter(day) != "Lunes" ? 
        <CardAlmuerzo
          classname="bg-yellow-600"
          time="8:30 - 9:00"
          text="CONTROL Y REGISTRO DE ASISTENCIA"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Lunes" ? 
        <CardAlmuerzo
          classname="bg-yellow-600"
          time="8:30 - 12:30"
          text="INFORMES, INSCRIPCIONES"
        />
        : ""
      }
      {ponentes.early.map((ponente:Ponent) => {
        return (
          <CardPonent
            key={ponente.id}
            time={ponente.start}
            lastTime={ponente.end}
            name={ponente.speaker}
            profession={ponente.description /** Cambiar */}
            theme={ponente.topic}
            img={ponente.avatar}
          />
        );
      })}
      {
        capitalizeFirstLetter(day) == "Jueves" ? 
        <CardAlmuerzo
          classname="bg-yellow-600"
          time="11:00 - 14:00"
          text="FERIA TECNOLÓGICA"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Viernes" ? 
        <CardAlmuerzo 
          classname="bg-yellow-600"
          time="11:00 - 13:00"
          text="CONCURSO DE PROGRAMACIÓN"
        />
        : ""
      }
      <CardAlmuerzo
        classname="bg-blue-600"
        time="12:30 - 14:00"
        text="RECESO / ALMUERZO"
      />
      {
        capitalizeFirstLetter(day) == "Miércoles" ? 
        <CardAlmuerzo 
          classname="bg-yellow-600"
          time="15:00 - 17:00"
          text="CONCURSO DE CONOCIMIENTO"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Jueves" ? 
        <CardAlmuerzo 
          classname="bg-yellow-600"
          time="14:00 - 16:00"
          text="CONCURSO DE ROBÓTICA"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Lunes" ? 
        <CardAlmuerzo 
          classname="bg-yellow-600"
          time="14:00 - 16:00"
          text="INFORMES, INSCRIPCIONES"
        />
        : ""
      }
      {ponentes.late.map((ponente:Ponent) => {
        return (
          <CardPonent
            key={ponente.id}
            time={ponente.start}
            lastTime={ponente.end}
            name={ponente.speaker}
            profession={ponente.description}
            theme={ponente.topic}
            img={ponente.avatar}
          />
        );
      })}
      {
        capitalizeFirstLetter(day) == "Lunes" ? 
        <CardAlmuerzo
          classname="bg-blue-600"
          time="18:00 - 19:30"
          text="INAUGURACIÓN"
        />
        : ""
      }
      {
        capitalizeFirstLetter(day) == "Viernes" ? 
        <CardAlmuerzo
          classname="bg-blue-600"
          time="18:00 - 19:30"
          text="CLAUSURA"
        />
        : ""
      }
      
    </div>
  );
};

interface propsCard {
  time?:string, text:string, classname:string
}

const CardAlmuerzo = ({time, text, classname}:propsCard) => {
  return (
    <div className={`${time ? "grid grid-cols-7 sm:grid-cols-9" : "flex items-center justify-center"} rounded-2xl px-2 sm:px-2 py-2 gap-1 sm:gap-5 mx-2 border-2 border-slate-800 ${classname}`}>
        {
          time ? 
          <span className="font-bold text-2xl sm:text-lg col-span-7 sm:col-span-2 text-center">
            {time}
          </span>
          : ""
        }
        <div className={`${time ? "flex justify-center sm:justify-start sm:items-start col-span-7":  ""}`}>
          <h2 className="text-lg text-white font-semibold tracking-widest text-center">
            {text}
          </h2>
        </div>
    </div>
  )
}