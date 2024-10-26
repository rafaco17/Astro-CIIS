import { URI } from "../helpers/endpoints.ts";
import Cookie from "js-cookie";

// Función para obtener el usuario desde la cookie
export function getUser() {
  try {
    const user = JSON.parse(Cookie.get("user") || "{}");
    return user && Object.keys(user).length > 0 ? user : null;
  } catch (error) {
    console.error("Error al parsear la cookie del usuario", error);
    return null;
  }
}

// Función para establecer el usuario en la cookie con expiración automática
export function setUser(user: any, hoursToExpire = 2) {
  Cookie.set("user", JSON.stringify(user), { expires: hoursToExpire / 24 }); // Expira en 'hoursToExpire' horas
}

// Función para manejar errores
function handleError(error: any, defaultMsg: string) {
  console.error(error);
  return { error: error?.error || "Ha ocurrido un error", reason: error?.reason || defaultMsg };
}

// Función para crear la sesión, redirigiendo si es necesario
export function createSession(user: any, redirectPath = "/dashboard") {
  const searchParams = new URLSearchParams(location.search);
  const nextPath = searchParams.get("next") || redirectPath;

  setUser(user); // La cookie se encargará de expirar en el tiempo dado
  location.href = nextPath;
}

// Login con async/await y manejo centralizado de errores
export const login = (email: string, password: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(URI.session.src, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        const error = await response.json();
        throw error;
      }

      const user = await response.json();
      createSession(user);
      
      resolve(user);
    } catch (error) {
      reject(handleError(error, "En este momento el servidor no está disponible, inténtelo más tarde"));
    }
  });
};

// Logout y redirección
export const logout = (destinity = "/") => {
  Cookie.remove("user");
  location.href = destinity;
};

// Actualización del estado del usuario
export function updateUser(user: any) {
  setUser(user);
}

// Petición asíncrona para actualizar el estado del usuario
export async function updateStatusUser(user: any) {
  try {
    const [postmasterResponse, ciisResponse] = await Promise.all([
      fetch(URI.user.inscription + "?type_event=postmaster&event=14", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }),
      fetch(URI.user.inscription + "?type_event=ciis&event=15", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }),
    ]);

    const [dataPostmaster, dataCiis] = await Promise.all([
      postmasterResponse.json(),
      ciisResponse.json(),
    ]);

    user.dataPostmaster = dataPostmaster.status;
    user.dataCiis = dataCiis.status;
    updateUser(user);
  } catch (error) {
    console.error("Error actualizando el estado del usuario", error);
  }
}
