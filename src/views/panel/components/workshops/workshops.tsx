import { useEffect, useState } from "react";
import CardWorkshop from "./components/card-workshop";
import { URI } from "../../../../helpers/endpoints";
import type Workshop from "./adapters/workshopAdapter";
import { useAuth } from "../../../../hooks/use-auth";

const Workshops = () => {
  const { user } = useAuth();
  const [workshops, setWorkshops] = useState<Workshop[] | undefined>();

  useEffect(() => {
    const useWorkshops = async () => {
      try {
        const response = await fetch(URI.workshop.src);
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json();
        setWorkshops(result);
      } catch (error) {
        console.error("Error al obtener los datos de los talleres:", error);
      }
    };
    useWorkshops();
  }, []);

  return (
    <div className="p-2 sm:p-4 mx-6 h-dvh w-[calc(100% - 48px)] bg-slate-950">
      <div className="font-bold mt-8 text-left select-none flex flex-col gap-y-1">
        <p className="text-4xl tracking-wider opacity-80">
          ¡Únete a nuestros Talleres!
        </p>
        <span className="text-sm text-slate-400">
          Explora una variedad de talleres diseñados para enriquecer tu
          aprendizaje y potenciar tus habilidades. ¡Inscríbete hoy y no te
          pierdas la oportunidad de crecer junto a nosotros!
        </span>
      </div>
      <div className="mt-8 flex flex-col gap-y-8 items-center">
        {workshops &&
          workshops.map((workshop, index) => {
            let cwk = user?.talleres.find((t: any) => t.id == workshop.id);
            return (
              <CardWorkshop
                key={index}
                id={workshop.id}
                title={workshop.name}
                date={workshop.date}
                start={workshop.start}
                end={workshop.end}
                location={workshop.place}
                price={workshop.price}
                degree_speaker={workshop.speaker.degree_speaker}
                name_speaker={workshop.speaker.name_speaker}
                lastname_speaker={workshop.speaker.lastname_speaker}
                src_speaker={`https://ciistacna.com/${workshop.speaker.dir_img_speaker}`}
                src_workshop="https://i.imgur.com/89Wsfpc.jpeg"
                avaible={workshop.avaible}
                registered={Boolean(cwk)}
                state={cwk?.state}
              />
            )
          })}
      </div>
    </div>
  );
};

export default Workshops;
