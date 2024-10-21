import { useEffect, useState } from "react";
import styles from "../../../styles/ResetPassword.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { URI } from "../../../helpers/endpoints.tsx";
import { useDialog } from "../../../hooks/use-dialog.tsx";
import Dialog from "../../../components/Dialog.tsx";
import type UserRestore from "../adapters/userRestore.ts";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [messageErr, setMessageErr] = useState<string | null>(null);
  const [messageSuccess, setMessageSuccess] = useState<string | null>(null);
  const [messageVerifyErr, setMessageVerifyErr] = useState<string | null>(null);
  const successDialog = useDialog();
  const errorDialog = useDialog();

  const searchParams = new URLSearchParams(location.search);

  const [ userRestore, setUserRestore ] = useState<UserRestore | undefined>();

  function formikControl(setLoading = (value: boolean) => {}) {
    return {
      initialValues: {
        password: "",
        confPassword: "",
      },
      validationSchema: Yup.object().shape({
        password: Yup.string().required("Este campo es obligatorio"),
        confPassword: Yup.string()
          .oneOf([Yup.ref("password"), undefined], "Las contraseñas deben coincidir")
          .required("Este campo es obligatorio"),
      }),
      onSubmit: (values: any) => {
        setLoading(true);

        fetch(URI.user.restore, {
          method: "POST",
          body: JSON.stringify({ ...values, email: userRestore?.email, code: userRestore?.code }),
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
            setMessageSuccess("Se ha completado la restauración la contraseña. Puede iniciar sesión con su cuenta.");
            successDialog.handleOpen();
            setLoading(false);
          })
          .catch((err) => {
            if (err?.reason) {
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

  const formikAll = useFormik(formikControl(setLoading));

  const verifyToken = (code: string | null, token: string | null) => {
    fetch(URI.user.verify, {
      method: "POST",
      body: JSON.stringify({ code, token }),
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
      .then((res) => {
        setUserRestore({
          code: code,
          email: res.email_user 
        })
      })
      .catch((err) => {
        setMessageVerifyErr(err.reason);
        errorDialog.handleOpen();
      });
  }

  useEffect(() => {
    let code: string | null = searchParams.get("code") || null;
    let token: string | null = searchParams.get("token") || null;

    verifyToken(code, token);
  }, []);

  return (
    <>
      <Dialog
        style={{ top: 20, position: "fixed" }}
        icon="success"
        message={messageSuccess}
        open={successDialog.open}
        onClose={() => {
          location.href = "/";
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
      {messageVerifyErr && (
        <Dialog
          style={{ top: 20, position: "fixed" }}
          icon="warning"
          message={messageVerifyErr}
          open={errorDialog.open}
          onClose={() => {
            location.href = "/";
          }}
        />
      )}

      <div className={styles.resetPasswordContainer}>
        <h2 className="text-center text-primary-600 text-4xl font-bold py-6">Restauración de contraseña</h2>
        <p className={styles.description}>
          Ingresa tu nueva contraseña para volver a acceder a tu cuenta.
        </p>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label>Nueva contraseña</label>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                placeholder="Ingrese nueva contraseña"
                {...formikAll.getFieldProps("password")}
                className={`${
                  formikAll.touched.password && formikAll.errors.password
                    ? styles.inputInvalid
                    : ""
                }`}
              />
            </div>
            {formikAll.touched.password && formikAll.errors.password ? (
              <span className={`${styles.textInvalid}`}>
                {formikAll.errors.password}
              </span>
            ) : null}
          </div>
          <div className={styles.formGroup}>
            <label>
              Repetir nueva contraseña
            </label>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                placeholder="Repite nueva contraseña"
                {...formikAll.getFieldProps("confPassword")}
                className={`${
                  formikAll.touched.confPassword &&
                  formikAll.errors.confPassword
                    ? styles.inputInvalid
                    : ""
                }`}
              />
            </div>
            {formikAll.touched.confPassword && formikAll.errors.confPassword ? (
              <span className={`${styles.textInvalid}`}>
                {formikAll.errors.confPassword}
              </span>
            ) : null}
          </div>

          <div className={styles.submitButtonWrapper}>
            <button
              type="button"
              className={styles.submitButton}
              onClick={(e: any) => formikAll.handleSubmit(e)}
              disabled={loading}
            >
              Restaurar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
