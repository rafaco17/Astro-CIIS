import { useState } from "react";
import styles from "../../../styles/Pago.module.css";
import { paymentOptions } from "../services/payments";
import { Payment } from "./subcomponents/Payment";
import { PaymentOption } from "./subcomponents/PaymentOption";
import { AuthProvider } from "../../panel/context/AuthContext";

interface Props {
  tipoplan: string, 
  typeEvent: string,
}

function PagoOptions({ tipoplan, typeEvent }: Props) {
  const [selectedPayment, setSelectedPayment] = useState(
    paymentOptions[0]
  );

  const handleClick = () => {
    if (typeEvent === "ciis") {
      location.href = `/registro/upload/${encodeURIComponent(tipoplan)}`;
    }
    if (typeEvent === "postmaster") {
      location.href = `/postmaster/registro/upload/${encodeURIComponent(tipoplan)}`;
    }
  };

  const handlePaymentChange = (option: any) => {
    setSelectedPayment(option);
  };

  return (
    <div className={styles.pagoContainer}>
      <p className={`${styles.infoText}`}>
        El pago es opcional para la preinscripción; podrás realizarlo más
        adelante si no lo haces ahora
      </p>
      <div className={styles.containerPayment}>
        <div className={styles.paymentOptions}>
          {paymentOptions.map((option: any, index: any) => (
            <PaymentOption
              key={index}
              name={option.name}
              onClick={() => handlePaymentChange(option)}
              checked={selectedPayment === option}
            />
          ))}
        </div>
        <div className={styles.PaymentInformation}>
          {<Payment
            number={selectedPayment.number}
            cod={selectedPayment.cod}
            qr={selectedPayment.qr}
          />}
        </div>
      </div>
      <div className={styles.registerButton} onClick={handleClick}>
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
