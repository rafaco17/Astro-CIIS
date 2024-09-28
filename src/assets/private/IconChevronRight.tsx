interface Props {
  fill?: string;
  size: number;
}

const IconChevronRight = ({ fill = "none", size }:Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 4}
      height={size * 4}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path
        fill={fill}
        stroke="#BABABA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m6 6l6 6l-6 6M17 5v13"
      />
    </svg>
  )
}

export default IconChevronRight;
