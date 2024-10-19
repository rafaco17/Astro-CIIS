interface Props {
  size: number;
  style?: string;
  color: string;
}

const IconClock = ({ size, style, color }: Props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={style}
        width={size}
        height={size}
        viewBox="0 0 24 24"
      >
        <path
          fill={color}
          d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
        />
      </svg>
    </div>
  );
};

export default IconClock;
