import { useEffect, useRef, useState } from "react";
import { DaySchedules } from "./components/DayShedules";
import dataPonents from "./services/data";
import type DayPonent from "./adapters/dayPonent"

const Schedules = () => {
  const styleButton = "px-6 py-2 rounded-lg cursor-pointer card-custom";
  const carouselRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<DayPonent[]>([]);

  const fetchData = async () => {
    try {
      console.log("Fetching data...")
      const fetchedData = await dataPonents()
      console.log("Fetched Data:", fetchedData)
      if (fetchedData) {
        setData(fetchedData)
        console.log("dat:",data)
      } else {
        console.error("No data returned from the API")
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(()=> {
    fetchData()
  }, [])

  const handleScrollToDay = (day: string) => {
    if (carouselRef.current) {
      const target = document.getElementById(`day-${day}`)
      if (target) {
        carouselRef.current.scrollTo({
          left: target.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="carrucel-custom flex flex-col justify-center items-center mb-24 max-md mt-40">
      <h2 className="text-4xl font-bold text-center text-secondary sm:text-6xl slide-top">
        Cronograma
      </h2>
      <p className="text-center text-base mb-8 mt-8">
        Todas las charlas estan en directo gracias a JohnArDev
      </p>
      <div className="w-full flex justify-around mb-5">
        {data?.map((element) => (
          <button
            className={styleButton}
            key={element.day}
            onClick={() => handleScrollToDay(element.day)}
          >
            {element.day.charAt(0).toUpperCase() + element.day.slice(1)}
          </button>
        ))}
      </div>
      <div
        ref={carouselRef}
        className="w-full overflow-hidden scroll-smooth scroll-mx-12 flex justify-around gap-12 rounded-2xl"
      >
        {data?.map((element, index) => {
          return (
            <div id={`day-${element.day}`} key={element.day}>
              <DaySchedules
                day={element.day || ""}
                ponentes={element}
                idItem={`item-${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Schedules