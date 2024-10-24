import { URI } from "../../../helpers/endpoints.ts";

const useWorkshops = async () => {
    try {
        const response = await fetch(URI.reports.workshops);
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        const result = await response.json(); 
        return result;
    } catch (error) {
        console.error("Error al obtener los datos de los talleres:", error);
    }
}

export default useWorkshops