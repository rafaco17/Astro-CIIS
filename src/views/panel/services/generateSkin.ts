const DOMAIN_AVATAR = "https://ui-avatars.com/api/";

interface Props {
  name: string;
  background?: string;
  color?: string;
  size?: number;
  rounded?: boolean;
  bold?: boolean,
}

const generateSkin = async ({ name, background = "000", color = "fff", size = 128, rounded = false, bold = false}: Props) => {
  const params = new URLSearchParams({
    name,
    background,
    color,
    size: size.toString(),
    rounded: rounded ? "true" : "false",
    bold: bold ? "true" : "false",
  });

  const apiUrl = `${DOMAIN_AVATAR}/?${params.toString()}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Error en la respuesta de la API");
    }
    const result = await response.url;
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error al generar la Skin:", error);
  }
};

export default generateSkin;
