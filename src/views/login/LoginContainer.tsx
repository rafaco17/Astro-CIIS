import React, { useState } from "react";
import { Color } from "../../models/colors";
import { useColorWithOpacity } from "../../utilities/use-color-with-opacity";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dialog from "../../components/Dialog";
import { useDialog } from "../../hooks/use-dialog";
import { login } from "../../middlewares/auth";

interface Props {
  disabled: boolean;
  handleLogin: () => void;
}

const LoginContainer = ({ disabled, handleLogin }: Props) => {
  const searchParams = new URLSearchParams(location.search);
  const colorOverlay = Color.COLOR_BG_SURFACE_PRIMARY_CURRENT;
  const bg_overlay = useColorWithOpacity(colorOverlay, 0.7);
  const disabledStyle = disabled ? "hidden" : "";

  const errorDialog = useDialog();
  const [messageErr, setMessageErr] = useState(null);

  const form = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email debe ser válido")
        .required("El campo email es obligatorio"),
      password: Yup.string()
        .min(6, "Contraseña debe tener al menos 6 caracteres")
        .required("El campo contraseña es obligatorio"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password).catch((err) => {
        setMessageErr(err.reason);
        errorDialog.handleOpen();
      });
    },
  });

  return (
    <div
      style={{ backgroundColor: bg_overlay }}
      className={`${disabledStyle}  w-dvw h-dvh overflow-hidden fixed z-[9999]`}
    >
      <section>
        {Object.keys(form.errors).length > 0 && (
          <Dialog
            icon="warning"
            message={
              <>
                <p>{form.errors.email}</p>
                <p>{form.errors.password}</p>
              </>
            }
            open={errorDialog.open}
            onClose={errorDialog.handleClose}
          />
        )}

        {messageErr && (
          <Dialog
            icon="warning"
            message={messageErr}
            open={errorDialog.open}
            onClose={() => {
              setMessageErr(null);
              errorDialog.handleClose();
            }}
          />
        )}
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="relative w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex items-center mb-6 text-2xl font-semibold justify-between">
                <h2>Iniciar sesión</h2>
                <button
                  onClick={handleLogin}
                  className="text-gray-400 hover:text-white focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (Object.keys(form.errors).length <= 0) {
                    form.handleSubmit(e);
                  }
                  errorDialog.handleOpen();
                }}
              >
                <div>
                  <input
                    type="email"
                    id="email"
                    className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white outline-none focus:outline-blue-600"
                    placeholder="Correo electrónico"
                    {...form.getFieldProps("email")}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white outline-none focus:outline-blue-600"
                    {...form.getFieldProps("password")}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 text-center hover:bg-blue-800 duration-300"
                >
                  Iniciar sesión
                </button>
                <div className="flex items-center justify-center flex-col">
                  <a
                    href="/recuperacion"
                    className="text-sm font-medium text-primary-600 hover:underline text-primary-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                  <a
                    href={searchParams.get("next")?.includes("/workshops") ? searchParams.get("next")?.replace("pago", "user") : `/registro/planes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-2/3 text-white bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-300 hover:bg-green-800 md:text-md sm:w-1/2"
                  >
                    Registrarse
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginContainer;
