import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeUser ({ user } : { user: any}) {
    
  const qrRef = useRef<HTMLCanvasElement>(null);


    const handleDownload = () => {
        const canvas = qrRef.current;
        if (!canvas) return;
    
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "qrcode.png";
        link.click();
      };

    return (
        <>
            <div className="w-[200px] h-[200px] bg-white rounded-sm">
              <QRCodeCanvas
                ref={qrRef}
                size={200}
                id="QRcredencial"
                value={JSON.stringify(user, [
                  "id",
                  "dni",
                  "role",
                  "name",
                  "lastname",
                ])}
                marginSize={2}
              />
            </div>
            <div className="space-y-1">
              <span className="text-center block text-xl text-green-400 font-bold">
                Credencial QR para la asistencia
              </span>
              <button
                className="w-full px-6 py-2 border border-stone-500 rounded-full hover:bg-slate-600 transition-colors"
                onClick={handleDownload}
              >
                Descargar Credencial
              </button>
            </div>
        </>
    )
}