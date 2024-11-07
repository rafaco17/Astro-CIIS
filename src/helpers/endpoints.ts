export const domain = "https://ciistacna.com";
//export const domain = "https://test.ciistacna.com";
//export const domain = "http://127.0.0.1:4000"

export const URI = {
  reports: {
    speakers: `${domain}/reports/15/speakers.json`,
    cronograma: `${domain}/reports/15/cronograma.json`,
    sponsors: `${domain}/reports/15/sponsors.json`,
    workshops: `${domain}/reports/15/talleres.json`,
  },
  google: {
    sign: `${domain}/api/v2/google/sign`,
    user: `${domain}/api/v2/google/user`
  },
  session: {
    src: `${domain}/api/v2/session`,
  },
  user: {
    src: `${domain}/api/v2/user`,
    nationality: `${domain}/api/v2/user/nationality`,
    dni: `${domain}/api/v2/user/dni`,
    inscription: `${domain}/api/v2/user/inscription`,
    name: `${domain}/api/v2/user/name`,
    lastname: `${domain}/api/v2/user/lastname`,
    phone: `${domain}/api/v2/user/phone`,
    studycenter: `${domain}/api/v2/user/studycenter`,
    career: `${domain}/api/v2/user/career`,
    password: `${domain}/api/v2/user/password`,
    code: `${domain}/api/v2/user/code`,
    verify: `${domain}/api/v2/user/verify`,
    restore: `${domain}/api/v2/user/restore`,
  },
  events: {
    one: (id: Number) => ({
      src: `${domain}/api/v2/event/${id}`,
      reservation: {
        ciis: (type_attend: string, type_event: string) =>
          `${domain}/api/v2/event/${id}/reservation/ciis?type_attend=${type_attend}&type_event=${type_event}`,
      },
      attendance: (dni: string) =>
        `${domain}/api/v2/event/${id}/attendance?user=${dni}`,
    }),
  },
  conference: {
    "schedule-day": (day: string) =>
      `${domain}/api/v2/conference/schedule-day?day=${day}`,
    one: (id: Number) => ({
      src: `${domain}/api/v2/conference/${id}`,
      attendance: `${domain}/api/v2/conference/${id}/attendance`,
    }),
  },
  workshop: {
    src: `${domain}/api/v2/taller`,
    one: (id: Number) => ({
      src: `${domain}/api/v2/taller/${id}`,
      participant: `${domain}/api/v2/taller/${id}/participant`,
    }),
  },
};
