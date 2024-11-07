const TableAttendance = () => {
  return (
    <div className="flex flex-col items-center my-10 bg-slate-800 p-4 rounded-xl">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="text-xl text-white/80 uppercase">
            <th></th>
            <th className="w-48">LUNES</th>
            <th className="w-48">MARTES</th>
            <th className="w-48">MIÉRCOLES</th>
            <th className="w-48">JUEVES</th>
            <th className="w-48">VIERNES</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-52 text-white/80 font-bold text-xl">
            <td
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
              }}
            >
              MAÑANA
            </td>
            <td className="relative group">
              <div className="w-16 h-16 rounded-full bg-[#93F786] mx-auto"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md px-6 py-1 bg-black text-[#93F786] text-sm opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                Asistió
              </div>
            </td>

            <td className="relative group">
              <div className="w-16 h-16 rounded-full bg-[#f19696] mx-auto"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md px-6 py-1 bg-black text-[#f19696] text-sm opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                No Asistió
              </div>
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto"></div>
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto"></div>
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto"></div>
            </td>
          </tr>
          <tr className="h-52 text-white/80 font-bold text-xl">
            <td
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
              }}
            >
              TARDE
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-[#93F786] mx-auto"></div>
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto"></div>
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto"></div>
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto"></div>
            </td>
            <td>
              <div className="w-16 h-16 rounded-full bg-gray-400 mx-auto"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4">
        <p className="flex gap-x-12 text-xl uppercase font-bold tracking-wide">
          <span className="text-[#93F786]">✓ Asistió</span>
          <span className="text-[#f19696]">✗ No asistió</span>
          <span className="text-[#D9D9D9]">⬤ Pendiente</span>
        </p>
      </div>
    </div>
  );
};


export default TableAttendance