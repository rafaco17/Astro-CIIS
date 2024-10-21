import CustomDropzone from "../../../components/CustomDropzone";
import { useState } from "react";
import { URI } from "../../../helpers/endpoints";
import { useDialog } from "../../../hooks/use-dialog";
import Dialog from "../../../components/Dialog";
import { useAuth } from "../../../hooks/use-auth";
import { AuthProvider } from "../../panel/context/AuthContext";

interface Props {
  tipoplan: string;
  idEvent: Number;
  typeEvent: string;
}

function UploadRegister({ tipoplan, idEvent, typeEvent }: Props) {
  const { user, updateStatusUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectFileComprobante, setSelectedFileComprobante] = useState(null);
  const [selectedFileFichaMatricula, setSelectedFileFichaMatricula] =
    useState(null);
  const [messageErr, setMessageErr] = useState(null);
  const [scholarCode, setScholarCode] = useState("");
  const successDialog = useDialog();
  const errorDialog = useDialog();

  const showFichaMatricula = ["delegaciones", "estudiantesunjbg", "estudiantesesis"].includes(tipoplan);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("scholar_code", scholarCode);
    if (selectFileComprobante) formData.append("payment_doc", selectFileComprobante);
    if (selectedFileFichaMatricula) formData.append("scholar_doc", selectedFileFichaMatricula);

    fetch(URI.events.one(idEvent).reservation.ciis(tipoplan, typeEvent), {
      method: "POST",
      body: formData,
      credentials: "include",
    })
      .then(async (res) => {
        if (res.ok) return res.json();
        else {
          let error = await res.json();
          throw error;
        }
      })
      .then((res) => {
        updateStatusUser(user);
        successDialog.handleOpen();
      })
      .catch((err) => {
        const {
          error = "Ha ocurrido un error",
          reason = "En este momento el servidor no está disponible, inténtelo más tarde",
        } = err;
        setMessageErr(reason);
        errorDialog.handleOpen();
        setLoading(false);
      });
  };

  return (
    <>
      <Dialog
        style={{ top: 20, position: "fixed" }}
        icon="success"
        message="Registro exitoso. Estás a un solo paso de ser parte de este evento."
        open={successDialog.open}
        onClose={() => {
          location.href = "/dashboard";
        }}
      />
      {messageErr && (
        <Dialog
          style={{ top: 20, position: "fixed" }}
          icon="warning"
          message={messageErr}
          open={errorDialog.open}
          onClose={errorDialog.handleClose}
        />
      )}
      <div
        className={`p-5 rounded-lg w-[96%] max-w-[1200px] mx-auto bg-[var(--color-bg-uploadFormContainer)] ${!showFichaMatricula && "max-w-[576px]"
          }`}
      >
        <div className={`grid ${showFichaMatricula ? "grid-cols-1 md:grid-cols-2 gap-8" : "grid-cols-1"} mb-5`}>
          <div>
            <span className="block text-2xl text-[#BABABA] mb-5 text-center">Voucher de pago</span>
            <CustomDropzone
              selectedFile={selectFileComprobante}
              setselectedFile={setSelectedFileComprobante}
            />
            <div className="flex items-center justify-center mt-2">
              <svg
                className="fill-gray-300 w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
              <p className="text-sm text-gray-300 rounded-md">
                Ingresar una imagen que evidencie la transacción realizada
              </p>
            </div>
          </div>
          {showFichaMatricula && (
            <div>
              <span className="block text-2xl text-[#BABABA] mb-5 text-center">Ficha de matrícula</span>
              <CustomDropzone
                selectedFile={selectedFileFichaMatricula}
                setselectedFile={setSelectedFileFichaMatricula}
              />
              <div className="flex items-center justify-center mt-2">
                <svg
                  className="fill-gray-300 w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                </svg>
                <p className="text-sm text-gray-300 rounded-md">
                  La ficha de matrícula la puede obtener ingresando al intranet
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full text-center mt-7">
          {tipoplan === "delegaciones" ? (
            <div className="flex flex-col gap-5 items-center">
              <div className="bg-[#d9d9d91a] rounded-md w-full">
                <div className="flex flex-col items-center gap-4 p-2 md:flex-row">
                  <span className="block text-lg text-gray-300">Código de delegación</span>
                  <input
                    type="text"
                    placeholder="Ejemplo: UNIGOTOCIIS"
                    value={scholarCode}
                    onChange={(e) => {
                      setScholarCode(e.target.value);
                    }}
                    className="w-full h-[40px] px-5 outline outline-2 outline-gray-700 border-none rounded-xl bg-[var(--color-bg-input-informacion)] text-[var(--color-text-input-informacion)] text-sm md:w-1/2"
                  />
                  <div className="flex items-center justify-center mt-2">
                    <svg
                      className="fill-gray-300 w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <p className="text-sm text-gray-300 rounded-md">
                      Ingresar el código brindado en la invitación al CIIS XXV
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="w-48 px-12 py-3 rounded-md bg-[#3e5ba380] text-white font-semibold cursor-pointer transition-colors hover:bg-[#3e5ba370]"
                onClick={handleSubmit}
                disabled={loading}
              >
                Inscribirse
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="w-48 px-12 py-3 rounded-md bg-[#3e5ba380] text-white font-semibold cursor-pointer transition-colors hover:bg-[#3e5ba370]"
              onClick={handleSubmit}
              disabled={loading}
            >
              Inscribirse
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ({ tipoplan, idEvent, typeEvent }: Props) => (
  <AuthProvider>
    <UploadRegister tipoplan={tipoplan} idEvent={idEvent} typeEvent={typeEvent} />
  </AuthProvider>
);
