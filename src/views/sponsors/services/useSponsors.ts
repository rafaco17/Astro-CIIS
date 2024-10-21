import { URI } from "../../../helpers/endpoints.ts";

const useSponsors = async () => {
    try {
        const response = await fetch(URI.reports.sponsors);
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json(); 
        return result;
    } catch (error) {
        console.error("Error al obtener los datos de los speakers:", error);
    }
}

export default useSponsors