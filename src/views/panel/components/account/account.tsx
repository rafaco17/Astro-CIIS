import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../../../hooks/use-auth";
import IconSave from "./components/icon-save";
import InputWithButton from "./components/input-with-button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDialog } from "../../../../hooks/use-dialog";
import { URI } from "../../../../helpers/endpoints.ts";
import { QRCodeCanvas } from "qrcode.react";
import Dialog from "../../../../components/Dialog.tsx";
import { GoogleAuthButton } from "../../../login/components/GoogleAuthButton.tsx";
import { googleoauth } from "../../../../middlewares/auth.ts";

const Account = () => {
  const { user, logout, updateUser } = useAuth();
  const [messageSuccess, setMessageSuccess] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const successDialog = useDialog();
  const errorDialog = useDialog();

  const qrRef = useRef<HTMLCanvasElement>(null);

  const handleGoogleOAuth = () => {
    googleoauth()
      .then((url) => {
        user.auth_provider = "both";
        location.href = `${url}`;
      })
      .catch((err) => {
        setMessageError(err.reason);
        errorDialog.handleOpen();
      });
  };

  const handleDownload = () => {
    const canvas = qrRef.current;
    if (!canvas) return;

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    link.click();
  };

  const formikDNI = useFormik(
    getValidationDNI({ onSubmit: handleUpdateDNI })
  );
  const formikPhone = useFormik(
    getValidationPhoneEdit({ onSubmit: handleUpdatePhone })
  );
  const formikPass = useFormik(
    getValidationPwdEdit({ onSubmit: handleUpdatePass })
  );
  const formikName = useFormik(
    getValidationName({ onSubmit: handleUpdateName })
  );
  const formikLastname = useFormik(
    getValidationLastname({ onSubmit: handleUpdateLastname })
  );
  const formikstudycenter = useFormik(
    getValidationstudycenter({ onSubmit: handleUpdatestudycenter })
  );
  const formikCareer = useFormik(
    getValidationCareer({ onSubmit: handleUpdateCareer })
  );

  useEffect(() => {
    formikDNI.setFieldValue(
      "dni",
      Boolean(user.dni) ? user.dni : ""
    );
  }, []);
  useEffect(() => {
    formikPhone.setFieldValue(
      "phone",
      Boolean(user.phone) ? user.phone : "No especificado"
    );
  }, []);
  useEffect(() => {
    formikName.setFieldValue(
      "name",
      Boolean(user?.name) ? capitalizeWords(user.name) : ""
    );
  }, []);
  useEffect(() => {
    formikLastname.setFieldValue(
      "lastname",
      Boolean(user?.lastname) ? capitalizeWords(user.lastname) : ""
    );
  }, []);
  useEffect(() => {
    formikstudycenter.setFieldValue(
      "studycenter",
      Boolean(user?.studycenter) ? user.studycenter : ""
    );
  }, []);
  useEffect(() => {
    formikCareer.setFieldValue(
      "career",
      Boolean(user?.career) ? user.career : ""
    );
  }, []);

  function failServer(err: any) {
    if (err.code) {
      if (err.code == 401) {
        logout("/?next=/dashboard/account");
      } else {
        const {
          error = "Ha ocurrido un error",
          reason = "En este momento el servidor no está disponible, inténtelo más tarde",
        } = err;
        setMessageError(reason);
        errorDialog.handleOpen();
      }
    } else {
      const {
        error = "Ha ocurrido un error",
        reason = "En este momento el servidor no está disponible, inténtelo más tarde",
      } = err;
      setMessageError(reason);
      errorDialog.handleOpen();
    }
  }

  function handleUpdateDNI(values: any) {
    fetch(URI.user.dni, {
      method: "PATCH",
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
      .then(() => {
        setMessageSuccess("DNI actualizado");
        successDialog.handleOpen();
        user.dni = values.dni;
        updateUser(user);
      })
      .catch((err) => {
        failServer(err);
        formikDNI.setFieldValue("dni", "");
      });
  }

  function handleUpdatePhone(values: any) {
    fetch(URI.user.phone, {
      method: "PATCH",
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
      .then(() => {
        setMessageSuccess("Teléfono actualizado");
        successDialog.handleOpen();
        user.phone = values.phone;
        updateUser(user);
      })
      .catch(failServer);
  }

  function handleUpdateName(values: any) {
    fetch(URI.user.name, {
      method: "PATCH",
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
      .then(() => {
        setMessageSuccess("Nombres actualizados");
        successDialog.handleOpen();
        user.name = values.name;
        updateUser(user);
      })
      .catch(failServer);
  }

  function handleUpdateLastname(values: any) {
    fetch(URI.user.lastname, {
      method: "PATCH",
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
      .then(() => {
        setMessageSuccess("Apellidos actualizados");
        successDialog.handleOpen();
        user.lastname = values.lastname;
        updateUser(user);
      })
      .catch(failServer);
  }

  function handleUpdatePass(values: any) {
    fetch(URI.user.password, {
      method: "PATCH",
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
      .then(() => {
        setMessageSuccess("Contraseña actualizada");
        successDialog.handleOpen();
      })
      .catch(failServer);
  }

  function handleUpdatestudycenter(values: any) {
    fetch(URI.user.studycenter, {
      method: "PATCH",
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
      .then(() => {
        setMessageSuccess("Centro de estudio actualizada");
        successDialog.handleOpen();
        user.studycenter = values.studycenter;
        updateUser(user);
      })
      .catch(failServer);
  }

  function handleUpdateCareer(values: any) {
    fetch(URI.user.career, {
      method: "PATCH",
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
      .then(() => {
        setMessageSuccess("Carrera profesional actualizada");
        successDialog.handleOpen();
        user.career = values.career;
        updateUser(user);
      })
      .catch(failServer);
  }

  return (
    <>
      <Dialog
        style={{ top: 20 }}
        icon="success"
        message={messageSuccess}
        open={successDialog.open}
        onClose={() => {
          successDialog.handleClose();
          setMessageSuccess(null);
        }}
      />
      {messageError && (
        <Dialog
          style={{ top: 20 }}
          icon="warning"
          message={messageError}
          open={errorDialog.open}
          onClose={errorDialog.handleClose}
        />
      )}
      <div className="p-2 mx-10 sm:p-4 h-dvh w-[calc(100% - 80px)] bg-slate-950">
        <div className="font-bold tracking-wider mt-8 text-left select-none">
          <p className="text-4xl opacity-80">
            ¡Hola, {user?.name} {user?.lastname}!
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#7AAEF1]">
            Datos para la elaboración del Certificado:
          </h4>
          <span className="text-sm text-slate-400">
            Es importante que uses los datos correctos, ya que se usarán para
            emitir tu certificado.
          </span>
          <div className="mt-4 flex justify-center sm:justify-evenly flex-col sm:flex-row">
            <div className="flex flex-col items-center space-y-4 w-full ">
              {user.auth_provider !== "google" ? (
                <InputWithButton
                  inputName="document_number"
                  type="text"
                  defaultValue={user?.dni}
                  label="Documento de identidad"
                  placeholder="Ingrese su N° DNI"
                  disabled={true}
                />
              ) : (
                <InputWithButton
                  inputName="document_number"
                  type="text"
                  label="DNI"
                  placeholder="Ingrese su N° DNI"
                  inputProps={formikDNI.getFieldProps("dni")}
                  touched={formikDNI.touched.dni}
                  error={formikDNI.errors.dni}
                  onSave={formikDNI.handleSubmit}
                />
              )}
              <InputWithButton
                inputName="name"
                type="text"
                label="Nombres"
                placeholder="Ingrese sus nombres"
                inputProps={formikName.getFieldProps("name")}
                touched={formikName.touched.name}
                error={formikName.errors.name}
                onSave={formikName.handleSubmit}
              />
              <InputWithButton
                inputName="lastname"
                type="text"
                label="Apellidos"
                placeholder="Ingrese sus apellidos"
                inputProps={formikLastname.getFieldProps("lastname")}
                touched={formikLastname.touched.lastname}
                error={formikLastname.errors.lastname}
                onSave={formikLastname.handleSubmit}
              />
              <InputWithButton
                inputName="contact_number"
                type="tel"
                label="Número de contacto"
                placeholder="Ingrese su número de contacto"
                inputProps={formikPhone.getFieldProps("phone")}
                touched={formikPhone.touched.phone}
                error={formikPhone.errors.phone}
                onSave={formikPhone.handleSubmit}
              />
            </div>
            <div className="w-full mt-8 sm:mt-0 flex items-center justify-center ">
              <div className="space-y-4 flex flex-col items-center">
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-evenly items-start flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-0">
          <InputWithButton
            inputName="study_center"
            type="text"
            label="Centro de estudios"
            placeholder="Ingrese su centro de estudios"
            inputProps={formikstudycenter.getFieldProps("studycenter")}
            touched={formikstudycenter.touched.studycenter}
            error={formikstudycenter.errors.studycenter}
            onSave={formikstudycenter.handleSubmit}
          />
          <InputWithButton
            inputName="career"
            type="tel"
            label="Carrera profesional"
            placeholder="Ingrese su carrera profesional"
            inputProps={formikCareer.getFieldProps("career")}
            touched={formikCareer.touched.career}
            error={formikCareer.errors.career}
            onSave={formikCareer.handleSubmit}
          />
        </div>

        <div className="mt-8 pb-8">
          <h4 className="text-xl font-semibold text-[#7AAEF1]">
            Datos para el acceso de la Cuenta:
          </h4>
          <span className="text-sm text-slate-400">
            Asegúrate de ingresar un correo válido, ya que tu certificado se
            enviará a esa dirección.
          </span>
          <div className="mt-4 flex justify-evenly items-start flex-col sm:flex-row gap-x-4 gap-y-4 sm:gap-y-0">
            <InputWithButton
              inputName="email"
              type="email"
              defaultValue={user?.email}
              label="Correo electrónico"
              placeholder="Ingrese su email"
              disabled={true}
            />
            <InputWithButton
              type="password"
              inputName="password"
              label="Cambiar contraseña"
              placeholder="Ingrese su contraseña"
              inputProps={formikPass.getFieldProps("password")}
              touched={formikPass.touched.password}
              error={formikPass.errors.password}
              onSave={formikPass.handleSubmit}
            />
          </div>
          <div className="mt-4">
            <div className="flex flex-col min-w-[280px] max-w-[520px] w-full">
              <label
                htmlFor="google-account"
                className="mb-1 text-gray-200 select-none"
              >
                Redes sociales
              </label>
              <div className="flex items-center">
                {user.auth_provider === "password" ? (
                  <GoogleAuthButton
                    text="Conectar con Google"
                    handleClick={handleGoogleOAuth}
                  />
                ) : (
                  <GoogleAuthButton text="Conectado" disabled={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function capitalizeWords(text = "") {
  text = text.toLocaleLowerCase();
  return text.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}

function getValidationDNI({ onSubmit = console.log }) {
  return {
    initialValues: { dni: "" },
    validationSchema: Yup.object().shape({
      dni: Yup.string()
        .matches(/^[0-9]+$/, "Debe contener solo números")
        .length(8, "Deben ser 8 caracteres")
        .required("Este campo es obligatorio"),
    }),
    onSubmit,
  };
}

function getValidationName({ onSubmit = console.log }) {
  return {
    initialValues: { name: "" },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit,
  };
}

function getValidationLastname({ onSubmit = console.log }) {
  return {
    initialValues: { lastname: "" },
    validationSchema: Yup.object().shape({
      lastname: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit,
  };
}

function getValidationPhoneEdit({ onSubmit = console.log }) {
  return {
    initialValues: { phone: "" },
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .matches(
          /^([0-9]{9})|(\+[0-9]{2,3} [0-9]{9})$/,
          "El formato no es válido"
        )
        .required("Es necesario este valor"),
    }),
    onSubmit,
  };
}

function getValidationstudycenter({ onSubmit = console.log }) {
  return {
    initialValues: { studycenter: "" },
    validationSchema: Yup.object().shape({
      studycenter: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit,
  };
}

function getValidationCareer({ onSubmit = console.log }) {
  return {
    initialValues: { career: "" },
    validationSchema: Yup.object().shape({
      career: Yup.string().required("Este campo es obligatorio"),
    }),
    onSubmit,
  };
}

function getValidationPwdEdit({ onSubmit = console.log }) {
  return {
    initialValues: { password: "" },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(6, "Debe contener al menos 6 caracteres")
        .required("Este campo es obligatorio"),
    }),
    onSubmit,
  };
}

export default Account;
