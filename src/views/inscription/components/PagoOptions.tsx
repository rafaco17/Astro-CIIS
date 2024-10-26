import { useState } from "react";
import { AuthProvider } from "../../panel/context/AuthContext";

interface PaymentOption {
  name: string;
  number: string;
  cod: string;
  qr?: string;
}

const paymentOptions: PaymentOption[] = [
  { name: "BCP", number: "540-99754411-0-54", cod: "002-540-199754411054-33", qr: "/logobcp.png", },
  {
    name: "Yape",
    number: "Joaquin Alonzo Bazan Quispe",
    cod: "952248310",
    qr: "/yapeqr.jpg",
  },
];

interface Props {
  tipoplan: string;
  typeEvent: string;
}

function PagoOptions({ tipoplan, typeEvent }: Props) {
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0]);

  const handleClick = () => {
    if (typeEvent === "ciis") {
      location.href = `/registro/upload/${encodeURIComponent(tipoplan)}`;
    }
    if (typeEvent === "postmaster") {
      location.href = `/postmaster/registro/upload/${encodeURIComponent(tipoplan)}`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <p className="text-gray-300 mb-6 text-center">
        El pago es opcional para la preinscripción; podrás realizarlo más
        adelante si no lo haces ahora.
      </p>

      <div className="flex flex-col gap-6 mb-6 md:flex-row">
        <div
          className="relative p-4 rounded-lg bg-gradient-to-br from-blue-950 to-blue-700 md:p-6"
        >
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
            <div>
              <h3 className="text-xl font-semibold text-white text-center">BCP</h3>
              <p className="mt-2 text-white text-lg">Número de cuenta: </p>
              <div className="mt-1 font-normal bg-white rounded-md px-2 py-1 text-gray-900">{paymentOptions[0].number}</div>
              <p className="mt-2 text-lg text-white">Código CCI: </p>
              <div className="mt-1 font-normal bg-white rounded-md px-2 py-1 text-gray-900">{paymentOptions[0].cod}</div>
            </div>
            <div>
              <img
                src={paymentOptions[0].qr}
                alt="Logo BCP"
                className="w-48 h-48 mt-2 rounded-lg md:mt-4"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div
          className="relative p-6 rounded-lg bg-gradient-to-br from-purple-950 to-purple-700"
        >
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
            <div>
              <h3 className="text-xl font-semibold text-white text-center">YAPE</h3>
              <p className="mt-2 text-white text-lg">Titular: </p>
              <div className="mt-1 font-normal bg-white rounded-md px-2 py-1 text-gray-900">{paymentOptions[1].number}</div>
              <p className="mt-2 text-white text-lg">Número de teléfono: </p>
              <div className="fmt-1 font-normal bg-white rounded-md px-2 py-1 text-gray-900">{paymentOptions[1].cod}</div>
            </div>
            <div>
              <img
                src={paymentOptions[1].qr}
                alt="Yape QR"
                className="w-48 h-48 mt-2 rounded-lg md:mt-4"
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="px-12 py-3 rounded-md bg-[#3e5ba380] text-white font-semibold cursor-pointer transition-colors hover:bg-[#3e5ba370]"
        onClick={handleClick}
      >
        Siguiente
      </div>
    </div>
  );
}

export default ({ tipoplan, typeEvent }: Props) => (
  <AuthProvider>
    <PagoOptions tipoplan={tipoplan} typeEvent={typeEvent} />
  </AuthProvider>
);
