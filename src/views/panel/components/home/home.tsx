import { useEffect, useState } from "react";
import CardHome from "./components/CardHome";
import ItemStateSubscription from "./components/item-state-subscription";
import { useAuth } from "../../../../hooks/use-auth";
import { status } from "../../services/status";

const Home = () => {
  const revisionDate = "19/10/2024";
  const [inscriptionPostmaster, setInscriptionPostmaster] = useState<any | null>(null);
  const [inscriptionCiis, setInscriptionCiis] = useState<any | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setInscriptionPostmaster(status[user?.dataPostmaster]);
      setInscriptionCiis(status[user?.dataCiis]);
    }
  }, [user]);

  return (
    <div className="flex justify-center pt-12 flex-col lg:flex-row lg:justify-evenly items-center lg:items-start">
      <CardHome
        title="Próximo Evento"
        cardTitle="Congreso Internacional de informática y sistemas"
        secondTitle="Edición XXV"
        dateEvent="11 de noviembre de 2024"
      >
        <div className="flex justify-center">
          <div className="w-56 sm:w-64 overflow-hidden rounded-sm transition-transform active:scale-125 sm:active:scale-150 z-10">
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
      </CardHome>
      <CardHome
        title="Estado de Inscripciones"
        cardTitle="Verifica el estado de tu inscripción realizada"
        //dateEvent={`Ultima revisión el ${revisionDate}`}
      >
        <ul className="space-y-6">
          {inscriptionPostmaster && user.dataPostmaster < 4 && <ItemStateSubscription description="Estado de inscripción Postmaster" color={inscriptionPostmaster?.color} label={inscriptionPostmaster?.label} />}
          {inscriptionCiis && <ItemStateSubscription description="Estado de inscripción Congreso" color={inscriptionCiis?.color} label={inscriptionCiis?.label} />}
        </ul>
      </CardHome>
    </div>
  );
};

export default Home;
