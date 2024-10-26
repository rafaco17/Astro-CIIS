import CustomDropzone from "../../../components/CustomDropzone";
import { useState } from "react";
import { URI } from "../../../helpers/endpoints.ts";
import { useDialog } from "../../../hooks/use-dialog";
import Dialog from "../../../components/Dialog";
import { useAuth } from "../../../hooks/use-auth";
import { AuthMiddleware, AuthProvider } from "../../panel/context/AuthContext";

interface Props {
  idWorkshop: Number;
}

function UploadRegister({ idWorkshop }: Props) {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectFileComprobante, setSelectedFileComprobante] = useState(null);
  const [messageErr, setMessageErr] = useState(null);
  const successDialog = useDialog();
  const errorDialog = useDialog();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    if (selectFileComprobante) formData.append("payment_doc", selectFileComprobante);

    fetch(URI.workshop.one(idWorkshop).participant, {
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
        user.talleres.push({
          id: idWorkshop,
          state: 0
        })
        updateUser(user);
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
        message="Registro exitoso. Estás a un solo paso de ser parte de este taller."
        open={successDialog.open}
        onClose={() => {
          location.href = "/dashboard/workshops";
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
      <div className={`p-5 rounded-lg w-[96%] mx-auto bg-[var(--color-bg-uploadFormContainer)] max-w-[576px]`}>
        <div className={`grid grid-cols-1 mb-5`}>
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
        </div>
        <div className="w-full text-center mt-7">
            <button
              type="button"
              className="w-48 px-12 py-3 rounded-md bg-[#3e5ba380] text-white font-semibold cursor-pointer transition-colors hover:bg-[#3e5ba370]"
              onClick={handleSubmit}
              disabled={loading}
            >
              Inscribirse
            </button>
        </div>
      </div>
    </>
  );
}

export default ({ idWorkshop }: Props) => (
  <AuthProvider>
    <AuthMiddleware>
      <UploadRegister idWorkshop={idWorkshop} />
    </AuthMiddleware>
  </AuthProvider>
);
