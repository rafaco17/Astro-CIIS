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
  return apiUrl; 
};

export default generateSkin;
