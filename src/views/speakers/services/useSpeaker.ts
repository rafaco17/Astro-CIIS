import { URI } from "../../../helpers/endpoints";

const useSpeakers = async () => {
    try {
        const response = await fetch(URI.reports.speakers);
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json(); 
        return result;
    } catch (error) {
        console.error("Error al obtener los datos de los speakers:", error);
    }
}

export default useSpeakers