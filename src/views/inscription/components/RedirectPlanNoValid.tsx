import { useAuth } from "../../../hooks/use-auth";
import { useDialog } from "../../../hooks/use-dialog";
import Dialog from "../../../components/Dialog";
import { useEffect } from "react";
import { AuthProvider } from "../../panel/context/AuthContext";

interface Props {
  tipoplan: string
}

function RedirectPlanNoValid({ tipoplan } : Props) {
  const { user } = useAuth();
  const errorDialog = useDialog();

  useEffect(() => {
    if (user && user.plan_ciis !== tipoplan) {
      errorDialog.handleOpen();
    }
  }, []);

  return (
    <Dialog
      style={{ top: 20, position: "fixed" }}
      icon="warning"
      message="Tipo de plan no es válido o no escogido por el usuario"
      open={errorDialog.open}
      onClose={() => {
        location.href = "/dashboard/ciis";
      }}
    />
  );
}

export default ({ tipoplan }: Props) => (
  <AuthProvider>
    <RedirectPlanNoValid tipoplan={tipoplan} />
  </AuthProvider>
);
