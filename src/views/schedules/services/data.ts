import type DayPonent from "../adapters/dayPonent";

const DOMAIN_CIIS = "https://ciistacna.com/reports/15/cronograma.json";

const dataPonents = async () => {
  try {
    const response = await fetch(`${DOMAIN_CIIS}`);
    if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
    }
    const result = await response.json();
    const transformedData: DayPonent[] = result.map((item: any) => ({
      day: item.day,
      date: item.date,
      early: item.early.map((earlyItem: any) => ({
        id: earlyItem.id,
        topic: earlyItem.topic,
        start: earlyItem.start,
        end: earlyItem.end,
        type: earlyItem.type,
        isMorning: earlyItem.isMorning,
        speaker: earlyItem.speaker,
        idSpeaker: earlyItem.idSpeaker,
        country: earlyItem.country,
        description: earlyItem.description,
        avatar: earlyItem.avatar
      })),
      late: item.late.map((lateItem: any) => ({
        id: lateItem.id,
        topic: lateItem.topic,
        start: lateItem.start,
        end: lateItem.end,
        type: lateItem.type,
        isMorning: lateItem.isMorning,
        speaker: lateItem.speaker,
        idSpeaker: lateItem.idSpeaker,
        country: lateItem.country,
        description: lateItem.description,
        avatar: lateItem.avatar
      }))
    }));
    return transformedData;
} catch (error) {
    console.error("Error al obtener los datos de los speakers:", error);
}
};

export default dataPonents;


// const data = [
//   {
//     day: "lunes",
//     date: "2024-11-11T22:00:00.000Z",
//     early: [],
//     late: [
//         {
//             id: 7,
//             topic: "PONENCIA 1",
//             start: "2024-11-11T22:00:00.000Z",
//             end: "2024-11-11T23:00:00.000Z",
//             type: "Ponencia",
//             isMorning: false,
//             speaker: "Claudio Meneses Villegas",
//             idSpeaker: 7,
//             country: "Chile",
//             description: "Profesor en la Universidad Católica del Norte de Chile",
//             avatar: "speakers/60017868-0ab4-4340-9d0e-3bac6065b953.webp"
//         }
//     ]
//   },
//   {
//       day: "martes",
//       date: "2024-11-12T15:00:00.000Z",
//       early: [
//           {
//               id: 12,
//               topic: "PONENCIA 3",
//               start: "2024-11-12T15:00:00.000Z",
//               end: "2024-11-12T16:00:00.000Z",
//               type: "Ponencia",
//               isMorning: true,
//               speaker: "Ricardo Pérez Sánchez",
//               idSpeaker: 10,
//               country: "Chile",
//               description: "Profesor en la Universidad Católica del Norte de Chile",
//               avatar: "speakers/843c1436-eb77-4998-af03-546387bc7e7a.webp"
//           },
//           {
//               id: 20,
//               topic: "PONENCIA 4",
//               start: "2024-11-12T16:00:00.000Z",
//               end: "2024-11-12T17:00:00.000Z",
//               type: "Ponencia",
//               isMorning: true,
//               speaker: "Roxana Flores Quispe",
//               idSpeaker: 22,
//               country: "Peru",
//               description: "Profesora en Ciencias de la Computación de la Universidad Nacional San Agustin de Arequipa",
//               avatar: "speakers/fd45638e-8811-45a2-866f-584195a7af5d.webp"
//           }
//       ],
//       late: []
//   },
// ]

// export default data;