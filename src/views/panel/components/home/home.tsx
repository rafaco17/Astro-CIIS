import CardHome from "./components/CardHome";
import ItemStateSubscription from "./components/item-state-subscription";

const Home = () => {
  const revisionDate = "19/10/2024";

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
              src="https://scontent.ftcq3-1.fna.fbcdn.net/v/t39.30808-6/462773478_1065990592198921_7237956819216671983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=vjr15Tf3qOAQ7kNvgF6YJhu&_nc_zt=23&_nc_ht=scontent.ftcq3-1.fna&_nc_gid=A9pSfPBrLoJLPKSP91gtaED&oh=00_AYAU376xBCO67DxnEzzviE6lMXIH17meXE2gaYTOc4ZFUQ&oe=6718F040"
              alt="ficha de ciis"
              loading="lazy"
            />
          </div>
        </div>
      </CardHome>
      <CardHome
        title="Estado de Inscripciones"
        cardTitle="Verifica el estado de tu inscripción realizada"
        dateEvent={`Ultima revisión el ${revisionDate}`}
      >
        <ul className="space-y-6">
          <ItemStateSubscription description="Estado de inscripción Postmaster" state={false}/>
          <ItemStateSubscription description="Estado de inscripción Congreso" state={true}/>
        </ul>
      </CardHome>
    </div>
  );
};

export default Home;
