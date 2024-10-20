import type Ponent from "../adapters/ponent";
import { CardPonent } from "./CardPonent";

interface props {
  ponentes: any,
  day: string
  idItem: string
}

export const DaySchedules = ({ponentes, day, idItem}: props) => {
  const dayTitle = "text-center text-xl font-bold mb-4 text-blue-500"
  // const ponentsEarly = ponentes.early
  // const ponentsLate = ponentes['late']
  return (
    <div id={idItem} className="w-full relative flex flex-col items-center justify-center rounded-2xl">
      <h3 className={dayTitle}>{day}</h3>
      {ponentes.early.map((ponente:Ponent) => {
        return (
          <CardPonent
            key={ponente.id}
            time={ponente.start}
            name={ponente.speaker}
            profession={ponente.topic /** Cambiar */}
            theme={ponente.topic}
            img={ponente.avatar}
          />
        );
      })}
      {ponentes.late.map((ponente:Ponent) => {
        return (
          <CardPonent
            key={ponente.id}
            time={ponente.start}
            name={ponente.speaker}
            profession={ponente.topic}
            theme={ponente.topic}
            img={ponente.avatar}
          />
        );
      })}
    </div>
  );
};
