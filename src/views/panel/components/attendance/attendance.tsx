import { useEffect, useState } from "react";
import ButtonAttendance from "./components/button-attendance";
import CardAttendance from "./components/card-attendance";
import Notifications from "./components/notifications";
import TableAttendance from "./components/table-attendance";
import { AttendanceProvider } from "./context/AttendanceContext";
import { URI } from "../../../../helpers/endpoints";
import { format } from "date-fns";
import { useDialog } from "../../../../hooks/use-dialog";
import { useAuth } from "../../../../hooks/use-auth";
import Dialog from "../../../../components/Dialog";

const Attendance = () => {
  const { user, logout } = useAuth();
  const today = format(new Date(), "yyyy-MM-dd");
  const [attendances, setAttendances] = useState(0);
  const [indexContext, setIndexContext] = useState(today);
  const [conferencesByDay, setConferencesByDay] = useState<any | null>(null);
  const [messageSuccess, setMessageSuccess] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const successDialog = useDialog();
  const errorDialog = useDialog();

  const getConferencesByDay = (day: string) => {
    fetch(URI.conference["schedule-day"](day), {
      method: "GET",
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
      .then((data) => {
        setConferencesByDay(data);
      })
      .catch((err) => {
        if (err.code) {
          if (err.code == 401) {
            logout("/?next=/dashboard/asistencia");
          }
        }
        setServerError("Verifique su conexión a internet");
      });
  };

  const handleSubmitAttendance = (id: number, index: number) => {
    fetch(URI.conference.one(id).attendance, {
      method: "POST",
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
        let conferences: any = Array.from(conferencesByDay);
        conferences[index].attendance = true;
        setConferencesByDay(conferences);
        setMessageSuccess("Asistencia registrada");
        successDialog.handleOpen();
      })
      .catch((err) => {
        if (err.code) {
          if (err.code == 401) {
            logout("/?next=/dashboard/asistencia");
          } else {
            setMessageError(err.reason);
            errorDialog.handleOpen();
          }
        } else {
          setMessageError("Hubo problemas al comunicarse con el servidor");
          errorDialog.handleOpen();
        }
      });
  };

  useEffect(() => {
    const getInscription = async () => {
      try {
        const responseCiis = await fetch(
          URI.user.inscription + "?type_event=ciis&event=15",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );
        const dataCiis = await responseCiis.json();
        setAttendances(dataCiis.attendances);

        if (dataCiis.status !== 1) {
          setServerError("Su inscripción no ha sido confirmada");
        }
      } catch (err: any) {
        if (err.code) {
          if (err.code == 401) {
            logout("/?next=/dashboard/asistencia");
          }
        }
        setServerError("Verifique su conexión a internet");
      }
    };
    getInscription();
  }, []);

  useEffect(() => {
    getConferencesByDay(indexContext);
  }, [indexContext]);

  return (
    <>
      <Dialog
        style={{ position: "fixed", top: 20 }}
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
          style={{ position: "fixed", top: 20 }}
          icon="warning"
          message={messageError}
          open={errorDialog.open}
          onClose={errorDialog.handleClose}
        />
      )}
      
      <div className="p-2 mx-6 2xl:mx-auto sm:p-4 h-dvh w-[calc(100% - 48px)] md:max-w-[1200px] bg-slate-950">
        {serverError ? (
          <div className="flex flex-col items-center mt-20">
            <div>
              <svg width="56" height="52" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8625 2.57798C12.2388 0.131234 15.7615 0.131233 17.1378 2.57798L27.1823 20.4349C28.5322 22.8347 26.7981 25.7999 24.0447 25.7999H3.95558C1.20221 25.7999 -0.531963 22.8347 0.817911 20.435L10.8625 2.57798ZM15.8 20.4001C15.8 21.3942 14.9941 22.2001 14 22.2001C13.0059 22.2001 12.2 21.3942 12.2 20.4001C12.2 19.406 13.0059 18.6001 14 18.6001C14.9941 18.6001 15.8 19.406 15.8 20.4001ZM14 6.0001C13.0059 6.0001 12.2 6.80598 12.2 7.8001V13.2001C12.2 14.1942 13.0059 15.0001 14 15.0001C14.9941 15.0001 15.8 14.1942 15.8 13.2001V7.8001C15.8 6.80598 14.9941 6.0001 14 6.0001Z" fill="#DF7979" />
              </svg>
            </div>
            <span className="text-lg text-slate-400 mt-4">{serverError}</span>
          </div>
        ) : (
          <>
            <div className="font-bold tracking-wider mt-8 text-center sm:text-left select-none space-y-2">
              <p className="text-4xl opacity-80 uppercase text-balance">
                Estado de asistencia
              </p>
              <span className="block text-sm text-slate-400 max-w-5xl text-pretty">
                Consulta el estado de tus asistencias durante el evento. Puedes ver
                cada día en el calendario si tu asistencia ha sido registrada. Si
                tienes alguna duda, contacta al personal encargado de asistencia.
              </span>
            </div>
            <div className="mt-8 flex justify-evenly gap-2 flex-col sm:flex-row">
              <AttendanceProvider index={indexContext}>
                <ButtonAttendance
                  description="Lunes (11/11/2024)"
                  index={"2024-11-11"}
                  onClick={() => {
                    setIndexContext("2024-11-11");
                  }}
                />
                <ButtonAttendance
                  description="Martes (12/11/2024)"
                  index={"2024-11-12"}
                  onClick={() => {
                    setIndexContext("2024-11-12");
                  }}
                />
                <ButtonAttendance
                  description="Miercoles (13/11/2024)"
                  index={"2024-11-13"}
                  onClick={() => {
                    setIndexContext("2024-11-13");
                  }}
                />
                <ButtonAttendance
                  description="Jueves (14/11/2024)"
                  index={"2024-11-14"}
                  onClick={() => {
                    setIndexContext("2024-11-14");
                  }}
                />
                <ButtonAttendance
                  description="Viernes (15/11/2024)"
                  index={"2024-11-15"}
                  onClick={() => {
                    setIndexContext("2024-11-15");
                  }}
                />
              </AttendanceProvider>
            </div>

            <div className="flex flex-col mt-8 items-center gap-6">
              {!conferencesByDay ? "" :
                conferencesByDay.map((conference: any, index: number) => (
                  <CardAttendance
                    key={index}
                    src_workshop="https://i.imgur.com/89Wsfpc.jpeg"
                    title={conference.topic_conference}
                    degree_speaker={conference.speaker.degree_speaker}
                    name_speaker={conference.speaker.name_speaker}
                    lastname_speaker={conference.speaker.lastname_speaker}
                    src_speaker={`https://ciistacna.com/${conference.speaker.dir_img_speaker}`}
                    startDate={conference.start_date_conference}
                    endDate={conference.exp_date_conference}
                    attendance={conference.attendance}
                    handleSubmitAttendance={() => {
                      handleSubmitAttendance(conference.id_conference, index);
                    }}
                  />
                ))}
            </div>

            {/* <TableAttendance /> */}
            <Notifications attendances={attendances} planCiis={user?.plan_ciis} />
          </>
        )}
      </div>
    </>
  );
};

export default Attendance;