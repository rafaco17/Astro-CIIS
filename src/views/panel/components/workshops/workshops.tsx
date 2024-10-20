import CardWorkshop from "./components/card-workshop";

const Workshops = () => {
  return (
    <div className="p-2 sm:p-4 h-dvh w-full bg-slate-950">
      <div className="font-bold mt-8 text-left select-none flex flex-col gap-y-1">
        <p className="text-4xl tracking-wider opacity-80">¡Únete a nuestros Talleres!</p>
        <span className="text-sm text-slate-400">Explora una variedad de talleres diseñados para enriquecer tu aprendizaje y potenciar tus habilidades. ¡Inscríbete hoy y no te pierdas la oportunidad de crecer junto a nosotros!</span>
      </div>
      <div className="mt-8 flex flex-col gap-y-8 items-center">
        <CardWorkshop title="Models of deep learning" date="14/11/2024 17:00 - 14/11/2024 18:00" location="Laboratorio B de la ESIS" src_speaker="https://ciistacna.com/speakers/0f4377bc-2d8e-468e-9bb5-16c0c31c9bb7.webp" src_workshop="https://i.imgur.com/89Wsfpc.jpeg"/>
        <CardWorkshop title="Models of deep learning" date="14/11/2024 17:00 - 14/11/2024 18:00" location="Laboratorio B de la ESIS" src_speaker="https://ciistacna.com/speakers/0f4377bc-2d8e-468e-9bb5-16c0c31c9bb7.webp" src_workshop="https://i.imgur.com/89Wsfpc.jpeg"/>
        <CardWorkshop title="Models of deep learning" date="14/11/2024 17:00 - 14/11/2024 18:00" location="Laboratorio B de la ESIS" src_speaker="https://ciistacna.com/speakers/0f4377bc-2d8e-468e-9bb5-16c0c31c9bb7.webp" src_workshop="https://i.imgur.com/89Wsfpc.jpeg"/>
        
      </div>
    </div>
  );
};

export default Workshops;
