import { useRiemContext } from "../context/SideBarProvider";

interface Props {
  description: string;
  icon: React.ReactNode;
  active?: boolean;
  alert?: boolean;
}

const activeStyle =
  "bg-gradient-to-tr from-[#2e2e2e]/70 to-[#2e2e2e]/40 text-[#7AAEF1]";
const hoverStyle = "hover:bg-indigo-50 text-gray-600";

const ItemSideBar = ({
  description,
  icon,
  active = false,
  alert = false,
}: Props) => {
  const expanded = useRiemContext();
  return (
    <li
      className={`
        relative flex items-center justify-center py-2 px-3 
        my-1 text-lg cursor-pointer group
        transition-colors rounded-md
        ${active ? activeStyle : hoverStyle}`}
    >
      {icon}
      <span
        className={`overflow-hidden transition ${expanded ? "w-52 ml-3" : "w-0"}`}
      >
        {description}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-500 ${expanded ? "" : "top-2"}`}
        ></div>
      )}
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 tracking-widest bg-gradient-to-tr from-[#2e2e2e]/70 to-[#2e2e2e]/40 text-[#7AAEF1] text-sm invisible opacity-20 -translate-x-3 group-hover:visible group-hover:translate-x-0 group-hover:opacity-95 transition-transform">
          {description}
        </div>
      )}
    </li>
  );
};
export default ItemSideBar;
