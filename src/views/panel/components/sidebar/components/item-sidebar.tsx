import { Link } from "react-router-dom";
import { useExpanded, useItemState } from "../context/SideBarProvider";
import { useEffect } from "react";

interface Props {
  to: string;
  description: string;
  icon: React.ReactNode;
  alert?: boolean;
  index: number;
  onClick?: () => void;
}

const activeStyle =
  "bg-gradient-to-tr from-[#2e2e2e]/70 to-[#2e2e2e]/40 text-[#7AAEF1]";
const hoverStyle = "hover:bg-indigo-50 text-gray-600";

const ItemSideBar = ({
  to,
  description,
  icon,
  index,
  alert = false,
  onClick
}: Props) => {
  const expanded = useExpanded();
  const active = useItemState(to);

  return (
    <Link to={to} onClick={onClick}>
      <li
        className={`
          relative flex items-center justify-center py-2 px-3 
          my-1 text-lg cursor-pointer group rounded-md
          ${active ? activeStyle : hoverStyle}
        `}
      >
        {icon}
        <span className={`overflow-hidden transition ${expanded ? "w-52 ml-3" : "w-0"}`}>
          {description}
        </span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-500 ${expanded ? "" : "top-2"}`}></div>
        )}
        {!expanded && (
          <div className="absolute left-full rounded-md px-2 py-1 ml-6 tracking-widest bg-gradient-to-tr from-[#2e2e2e]/70 to-[#2e2e2e]/40 text-[#7AAEF1] text-sm invisible opacity-20 -translate-x-3 group-hover:visible group-hover:translate-x-0 group-hover:opacity-95 transition-transform">
            {description}
          </div>
        )}
      </li>
    </Link>
  );
};

export default ItemSideBar;
