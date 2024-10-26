import type Workshop from "../adapters/workshopAdapter";
import { useEffect, useState } from "react";
import { URI } from "../../../helpers/endpoints";
import { useAuth } from "../../../hooks/use-auth";
import CardWorkshop from "../../panel/components/workshops/components/card-workshop";
import { AuthProvider } from "../../panel/context/AuthContext";

const ListWorkshop = () => {
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
    <>
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
                src_speaker={`https://ciistacna.com/${workshop.speaker.dir_img_speaker}`}
                src_workshop="https://i.imgur.com/89Wsfpc.jpeg"
                avaible={workshop.avaible}
                registered={Boolean(cwk)}
                state={cwk?.state}
              />
            )
          })}
    </>
  );
};
export default () => {
  return (
    <AuthProvider>
      <ListWorkshop />
    </AuthProvider>
  )
};
