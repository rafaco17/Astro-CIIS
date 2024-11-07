import { useState } from "react";
import ButtonAttendance from "./components/button-attendance";
import CardAttendance from "./components/card-attendance";
import Notifications from "./components/notifications";
import TableAttendance from "./components/table-attendance";
import { AttendanceProvider } from "./context/AttendanceContext";

const Attendance = () => {
  const [indexContext, setIndexContext] = useState(0);

  return (
    <div className="p-2 mx-6 2xl:mx-auto sm:p-4 h-dvh w-[calc(100% - 48px)] md:max-w-[1200px] bg-slate-950">
      <div className="font-bold tracking-wider mt-8 text-center sm:text-left select-none space-y-2">
        <p className="text-4xl opacity-80 uppercase text-balance">
          Estado de asistencia
        </p>
        <span className="block text-sm text-slate-400 max-w-5xl text-pretty">
          Consulta el estado de tus asistencias durante el evento. Puedes ver
          cada día en el calendario si tu asistencia ha sido registrada. Si
          tienes alguna duda, contacta al personal encargado de asistencia.
        </span>
      </div>
      <div className="mt-8 flex justify-evenly gap-2 flex-col sm:flex-row">
        <AttendanceProvider index={indexContext}>
          <ButtonAttendance
            description="Lunes"
            index={0}
            onClick={() => {
              setIndexContext(0);
            }}
          />
          <ButtonAttendance
            description="Martes"
            index={1}
            onClick={() => {
              setIndexContext(1);
            }}
          />
          <ButtonAttendance
            description="Miercoles"
            index={2}
            onClick={() => {
              setIndexContext(2);
            }}
          />
          <ButtonAttendance
            description="Jueves"
            index={3}
            onClick={() => {
              setIndexContext(3);
            }}
          />
          <ButtonAttendance
            description="Viernes"
            index={4}
            onClick={() => {
              setIndexContext(4);
            }}
          />
        </AttendanceProvider>
      </div>

      {indexContext === 0 ? (
        <div className="flex flex-col mt-8 items-center gap-6">
          <CardAttendance
            src_workshop="https://i.imgur.com/89Wsfpc.jpeg"
            title="Taller: IOT dos aplicaciones típicas en la industria"
            degree_speaker="Mg."
            lastname_speaker="Ricardo"
            name_speaker="Pérez Sánchez"
            src_speaker="https://ciistacna.com/speakers/41dbb54d-dfaf-41af-9290-9bd45fa8f2ce.webp"
            startDate="11:00"
            endDate="13:00"
          />
          <CardAttendance
            src_workshop="https://i.imgur.com/89Wsfpc.jpeg"
            title="Taller: IOT dos aplicaciones típicas en la industria"
            degree_speaker="Mg."
            lastname_speaker="Ricardo"
            name_speaker="Pérez Sánchez"
            src_speaker="https://ciistacna.com/speakers/41dbb54d-dfaf-41af-9290-9bd45fa8f2ce.webp"
            startDate="11:00"
            endDate="13:00"
          />
        </div>
      ) : indexContext === 1 ? (
        "Martes"
      ) : indexContext === 2 ? (
        "Miercoles"
      ) : indexContext === 3 ? (
        "Jueves"
      ) : indexContext === 4 ? (
        "Viernes"
      ) : null}

      {/* <TableAttendance /> */}
      <Notifications />
    </div>
  );
};

export default Attendance;
