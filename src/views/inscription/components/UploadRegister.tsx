import styles from "../../../styles/UploadForm.module.css";
import CustomDropzone from "../../../components/CustomDropzone";
import { useState } from "react";
import { URI } from "../../../helpers/endpoints";
import { useDialog } from "../../../hooks/use-dialog";
import Dialog from "../../../components/Dialog";
import { useAuth } from "../../../hooks/use-auth";
import { AuthProvider } from "../../panel/context/AuthContext";

interface Props {
  tipoplan: string,
  idEvent: Number,
  typeEvent: string
}

function UploadRegister({ tipoplan, idEvent, typeEvent }: Props) {
  const { user, updateStatusUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectFileComprobante, setSelectedFileComprobante] = useState(null);
  const [selectedFileFichaMatricula, setSelectedFileFichaMatricula] = useState(null);
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
        console.log(err);
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
        message={
          "Registro exitoso. Estás a un solo paso de ser parte de este evento."
        }
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
        className={`${styles.uploadFormContainer} ${
          !showFichaMatricula && styles.uploadFormContainerUnique
        }`}
      >
        <div
          className={
            showFichaMatricula
              ? styles.dropzonesContainer
              : styles.dropzonesContainerUnique
          }
        >
          <div>
            <span className={styles.subtitle}>Voucher de pago</span>
            <CustomDropzone
              selectedFile={selectFileComprobante}
              setselectedFile={setSelectedFileComprobante}
            />
            <p className={`${styles.description}`}>
              Solamente debe ingresar una imagen donde se evidencie o corrobore
              la transacción realizada
            </p>
          </div>
          {showFichaMatricula && (
            <div>
              <span className={styles.subtitle}>Ficha de matricula</span>
              <CustomDropzone
                selectedFile={selectedFileFichaMatricula}
                setselectedFile={setSelectedFileFichaMatricula}
              />
              <p className={`${styles.description}`}>
                La ficha de matricula la puede obtener ingresando al intranet,
                caso que no sea estudiante puede omitir de subir esta
                información
              </p>
            </div>
          )}
        </div>
        <div className={styles.submitButtonWrapper}>
          {tipoplan === "delegaciones" ? (
            <div className={styles.delegationCodeContainer}>
                  <span className={styles.label}>Código de delegación</span>
              <div className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder="Ejemplo: UNIGOTOCIIS"
                    value={scholarCode}
                    onChange={(e) => {
                      setScholarCode(e.target.value);
                    }}
                  />
                  <p
                    className={`${styles.description}`}
                  >
                    Solamente debe ingresar el codigo de delegación brindada en
                    la invitación a este evento
                  </p>
                </div>
              </div>
              <button
                type="button"
                className={styles.submitButton}
                onClick={handleSubmit}
                disabled={loading}
              >
                Inscribirse
              </button>
            </div>
          ) : (
            <button
              type="button"
              className={styles.submitButton}
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
