interface Props {
  fill?: string;
  size: number;
}

const IconCheckList = ({ fill = 'none', size }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 4}
      height={size * 4}
      viewBox="0 0 24 24"
      fill={fill}
    >
      <path
        fill="#BABABA"
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12s12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3S2.7 17.128 2.7 12S6.872 2.7 12 2.7zm7.4 2.583l-7.505 9.371L8.388 9.08l-2.002 2.436l4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617z"
      />
    </svg>
  );
};

export default IconCheckList;
