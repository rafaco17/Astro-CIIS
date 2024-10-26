import { useEffect, useState } from "react";
import styles from "../../../styles/Informacion.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { URI } from "../../../helpers/endpoints.ts";
import { useDialog } from "../../../hooks/use-dialog";
import Dialog from "../../../components/Dialog";
import { useAuth } from "../../../hooks/use-auth";
import { AuthProvider } from "../../panel/context/AuthContext";

interface Props {
  evento: string;
  plan: string;
}

interface FormikProps {
  plan: string;
  success: any;
  abort: any;
  setLoading: any;
}

const InformationRegister = ({ evento, plan }: Props) => {
  const { user, createSession, updateStatusUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [messageErr, setMessageErr] = useState("");
  const successDialog = useDialog();
  const errorDialog = useDialog();

  const success = (user: any) => {
    updateStatusUser(user);
    successDialog.handleOpen();
    if (evento === "postmaster") {
      setTimeout(() => {
        createSession(user, `/postmaster/registro/pago/${plan}`);
      }, 2000);
    } else if (evento === "ciis") {
      setTimeout(() => {
        createSession(user, `/registro/pago/${plan}`);
      }, 2000);
    }
  };

  const abort = (fail: { error: string; reason: string }) => {
    const {
      error = "Ha ocurrido un error",
      reason = "En este momento el servidor no está disponible, inténtelo más tarde",
    } = fail;
    setMessageErr(reason);

    errorDialog.handleOpen();
  };

  const form = useFormik(getSchemaForm({ plan, success, abort, setLoading }));

  const handleSearch = async () => {
    try {
      const dni = form.values.dni;

      const response = await fetch(
        `https://api.perudevs.com/api/v1/dni/simple?document=${dni}&key=cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjUxZWM4ZmViMzEyMDcwMDhlODA5MmM2`
      );
      const data = await response.json();

      if (data.estado && data.resultado) {
        const { nombres, apellido_paterno, apellido_materno } = data.resultado;
        form.setFieldValue("name", nombres);
        form.setFieldValue(
          "lastname",
          `${apellido_paterno} ${apellido_materno}`
        );
      } else {
        console.log("No se encontró el DNI");
      }
    } catch (error) {
      console.error("Error al buscar DNI:", error);
    }
  };

  useEffect(() => {
    if (evento === "postmaster") {
      form.setFieldValue("plan_postmaster", plan);
    } else if (evento === "ciis") {
      form.setFieldValue("plan_ciis", plan);
    }
  }, [evento, plan]);

  return (
    <>
      <Dialog
        style={{ top: 20, position: "fixed" }}
        icon="success"
        message={
          "Registro exitoso. Estás a un solo paso de ser parte de este evento."
        }
        open={successDialog.open}
        onClose={successDialog.handleClose}
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

      <div className={`${styles.formContainer} bg-blue-950/50`}>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="dni">Ingresa tu documento de identidad</label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="text"
              placeholder="Ejemplo: 72721212"
              {...form.getFieldProps("dni")}
              className={`${
                form.touched.dni && form.errors.dni ? styles.inputInvalid : ""
              }`}
            />
            <button className={`${styles.searchButton}`} onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
          {form.touched.dni && form.errors.dni ? (
            <span className={`${styles.textInvalid}`}>{form.errors.dni}</span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="name">Ingresa tus nombres</label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="text"
              placeholder="Ejemplo: Jose Ricardo Manuel"
              {...form.getFieldProps("name")}
              className={`${
                form.touched.name && form.errors.name ? styles.inputInvalid : ""
              }`}
            />
          </div>
          {form.touched.name && form.errors.name ? (
            <span className={`${styles.textInvalid}`}>{form.errors.name}</span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="lastname">Ingresa tus apellidos</label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="text"
              placeholder="Ejemplo: Mamani Jimenez Garcia"
              {...form.getFieldProps("lastname")}
              className={`${
                form.touched.lastname && form.errors.lastname
                  ? styles.inputInvalid
                  : ""
              }`}
            />
          </div>
          {form.touched.lastname && form.errors.lastname ? (
            <span className={`${styles.textInvalid}`}>
              {form.errors.lastname}
            </span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="phone">Ingresa tu número de teléfono</label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="text"
              placeholder="Ejemplo: 984321987"
              {...form.getFieldProps("phone")}
              className={`${
                form.touched.phone && form.errors.phone
                  ? styles.inputInvalid
                  : ""
              }`}
            />
          </div>
          {form.touched.phone && form.errors.phone ? (
            <span className={`${styles.textInvalid}`}>{form.errors.phone}</span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="studycenter">
            Ingresa el nombre de tu universidad
          </label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="text"
              placeholder="Ejemplo: Universidad Nacional Jorge Bas..."
              {...form.getFieldProps("studycenter")}
              className={`${
                form.touched.studycenter && form.errors.studycenter
                  ? styles.inputInvalid
                  : ""
              }`}
            />
          </div>
          {form.touched.studycenter && form.errors.studycenter ? (
            <span className={`${styles.textInvalid}`}>
              {form.errors.studycenter}
            </span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="career">
            Ingresa el nombre de tu carrera profesional
          </label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="text"
              placeholder="Ejemplo: Ingeniería en informática y siste..."
              {...form.getFieldProps("career")}
              className={`${
                form.touched.career && form.errors.career
                  ? styles.inputInvalid
                  : ""
              }`}
            />
          </div>
          {form.touched.career && form.errors.career ? (
            <span className={`${styles.textInvalid}`}>
              {form.errors.career}
            </span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="email">Ingresa tu correo electrónico</label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="email"
              placeholder="Ejemplo: example@gmail.com"
              {...form.getFieldProps("email")}
              className={`${
                form.touched.email && form.errors.email
                  ? styles.inputInvalid
                  : ""
              }`}
            />
          </div>
          {form.touched.email && form.errors.email ? (
            <span className={`${styles.textInvalid}`}>{form.errors.email}</span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="password">Ingresa tu contraseña</label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="password"
              placeholder="Puede ser diferente a la de tu correo"
              {...form.getFieldProps("password")}
              className={`${
                form.touched.password && form.errors.password
                  ? styles.inputInvalid
                  : ""
              }`}
            />
          </div>
          {form.touched.password && form.errors.password ? (
            <span className={`${styles.textInvalid}`}>
              {form.errors.password}
            </span>
          ) : null}
        </div>
        <div className={`${styles.formGroup}`}>
          <label htmlFor="confPassword">Ingresa nuevamente tu contraseña</label>
          <div className={`${styles.inputWrapper}`}>
            <input
              type="password"
              placeholder="Repite la anterior contraseña"
              {...form.getFieldProps("confPassword")}
              className={`${
                form.touched.confPassword && form.errors.confPassword
                  ? styles.inputInvalid
                  : ""
              }`}
            />
          </div>
          {form.touched.confPassword && form.errors.confPassword ? (
            <span className={`${styles.textInvalid}`}>
              {form.errors.confPassword}
            </span>
          ) : null}
        </div>
        <div className={`${styles.submitButtonWrapper}`}>
          <button
            type="button"
            className={`${styles.submitButton}`}
            onClick={(e: any) => form.handleSubmit(e)}
            disabled={loading}
          >
            Confirmar Información
          </button>
        </div>
      </div>
    </>
  );
};

function getSchemaForm({ plan, success, abort, setLoading }: FormikProps) {
  return {
    initialValues: {
      dni: "",
      name: "",
      lastname: "",
      email: "",
      password: "",
      confPassword: "",
      studycenter: "",
      career: "",
      phone: "",
      plan_ciis: "",
      plan_postmaster: "",
    },
    validationSchema: Yup.object().shape({
      dni: Yup.string()
        .matches(/^[0-9]+$/, "Debe contener solo números")
        .length(8, "Deben ser 8 caracteres")
        .required("Este campo es obligatorio"),
      name: Yup.string().required("Este campo es obligatorio"),
      lastname: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Debe ser un email válido")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .min(6, "Debe tener al menos 6 caracteres")
        .required("Este campo es obligatorio"),
      confPassword: Yup.string()
        .oneOf(
          [Yup.ref("password"), undefined],
          "Las contraseñas deben coincidir"
        )
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .matches(
          /^([0-9]{9})|(\+[0-9]{2,3} [0-9]{9})$/,
          "El formato no es válido"
        )
        .required("Es necesario para poder contactarlo"),
      studycenter: Yup.string().required("Este campo es obligatorio"),
      career: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit: (values: any) => {
      setLoading(true);
      fetch(URI.user.src, {
        method: "POST",
        body: JSON.stringify(values),
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
        .then(success)
        .catch((err) => {
          abort(err);
          setLoading(false);
        });
    },
  };
}

export default ({ evento, plan }: Props) => (
  <AuthProvider>
    <InformationRegister evento={evento} plan={plan} />
  </AuthProvider>
);
