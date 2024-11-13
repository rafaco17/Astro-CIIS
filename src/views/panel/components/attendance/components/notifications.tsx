const Notifications = ({ attendances, planCiis } : { attendances: number, planCiis: string }) => {
  const totalAttendances = 18;
  const endEvent = new Date() > new Date("2024-11-15T23:00:00Z");

  return (
    <div className="mt-8 text-base sm:text-lg font-semibold text-[#7AAEF1] pb-16">
      <p className="text-balance">
        Porcentaje de asistencia actual: <strong>{ ((attendances / totalAttendances) * 100).toFixed(0) }%</strong>
      </p>
      {endEvent && <p className="text-[#F18A7A] text-balance">
        Asistencia mínima requerida para el certificado: <strong>{planCiis === "estudiantesesis" ? "80%" : "40%"}</strong>
      </p>}
      <p className="text-sm sm:text-base text-slate-400 text-pretty">
        Si tienes alguna duda o problema con el estado de tu asistencia,
        contacta al personal encargado para regularizarlo.
      </p>
    </div>
  );
};

export default Notifications
