import { useState } from "react";
import styles from "../../../styles/ResetPassword.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { URI } from "../../../helpers/endpoints";
import { useDialog } from "../../../hooks/use-dialog";
import Dialog from "../../../components/Dialog";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [messageErr, setMessageErr] = useState<string | null>(null);
  const [messageSuccess, setMessageSuccess] = useState<string | null>(null);
  const successDialog = useDialog();
  const errorDialog = useDialog();

  function formikEmailControl(setLoading = (value: boolean) => {}) {
    return {
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Debe ser un email válido")
          .required("Campo obligatorio"),
      }),
      onSubmit: (values: any) => {
        setLoading(true);

        fetch(URI.user.code, {
          method: "POST",
          body: JSON.stringify({ email: values.email }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        })
          .then(async (res) => {
            if (res.ok) return res.json();
            else {
              let error = await res.json();
              throw error;
            }
          })
          .then(() => {
            setMessageSuccess("Se ha enviado el enlace de restauración a su correo electrónico");
            successDialog.handleOpen();
          })
          .catch((err) => {
            if (err?.code) {
              setMessageErr(err.reason);
              errorDialog.handleOpen();
            } else {
              setMessageErr("Ha ocurrido un error inesperado");
              errorDialog.handleOpen();
            }
            setLoading(false);
          });
      },
    };
  }

  const formikEmail = useFormik(formikEmailControl(setLoading));

  return (
    <>
      <Dialog
        style={{ top: 20, position: "fixed" }}
        icon="success"
        message={messageSuccess}
        open={successDialog.open}
        onClose={() => {
          successDialog.handleClose();
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
      
      <div className={styles.resetPasswordContainer}>
        <h2 className="text-center text-primary-600 text-4xl font-bold py-6">Restauración de contraseña</h2>
        <p className={styles.description}>
          Ingresa tu correo electrónico donde se enviara un enlace para restaurar tu contraseña
        </p>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label>
              Ingresa tu correo electrónico
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Ejemplo: example@gmail.com"
                {...formikEmail.getFieldProps("email")}
                className={`${
                  formikEmail.touched.email && formikEmail.errors.email
                    ? styles.inputInvalid
                    : ""
                }`}
              />
            </div>
            {formikEmail.touched.email && formikEmail.errors.email ? (
              <span className={`${styles.textInvalid}`}>
                {formikEmail.errors.email}
              </span>
            ) : null}
          </div>

          <div className={styles.submitButtonWrapper}>
            <button
              type="button"
              className={styles.submitButton}
              onClick={(e: any) => formikEmail.handleSubmit(e)}
              disabled={loading}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
