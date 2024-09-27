interface Props {
  fill?: string;
  size: number;
}

const IconAuditorium = ({ fill = "none", size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 4}
      height={size * 4}
      viewBox="0 0 11 11"
      fill={fill}
    >
      <path
        d="M5.5 0L1 2v1h9V2L5.5 0zM2 4v4L1 9v1h9V9L9 8V4H2zm1 1h1v3H3V5zm2 0h1v3H5V5zm2 0h1v3H7V5z"
        fill="#BABABA"
      />
    </svg>
  );
};

export default IconAuditorium;