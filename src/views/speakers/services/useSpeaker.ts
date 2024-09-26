const apiUrl = process.env.DOMAIN_SPEAKERS

const useSpeakers = async () => {
    try {
        const response = await fetch(`${apiUrl}`);
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