interface Props {
    fill?: string;
    size: number;
  }

const IconOptions = ({ fill = "none", size }:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 4}
      height={size * 4}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path
        fill="currentColor"
        d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
      />
    </svg>
  );
};

export default IconOptions;
