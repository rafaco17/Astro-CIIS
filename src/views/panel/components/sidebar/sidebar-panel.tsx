import { useEffect, useState } from "react";
import {
  IconAuditorium,
  IconBriefcase,
  IconCheckList,
  IconGraduation,
  IconHome,
  IconUser,
  IconChevronRight,
  IconChevronLeft,
} from "../../../../../public/icons/private";
import ItemSideBar from "./components/item-sidebar";
import { SideBarProvider } from "./context/SideBarProvider";
import generateSkin from "../../services/generateSkin";

const SideBarPanel = () => {
  const [expanded, setExpanded] = useState(true);
  const [avatarUrl, setAvatarUrl] = useState<any | null>(null);

  const userFeatures = {
    name: "Rafhael Isaias Echevarria Mamani",
    background: "#2e2e2e",
    color: "#7AAEF1",
    size: 42,
    rounded: false,
    bold: true,
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      const result = await generateSkin(userFeatures);
      setAvatarUrl(result || null);
    };
    fetchAvatar();
  }, []);

  return (
    <nav className="h-full border-r border-white/10">
      <div className="flex flex-col justify-between h-full p-4 pb-2">
        <div>
          <div
            className={`flex ${expanded ? "justify-between" : "justify-center"} items-center`}
          >
            <strong className="text-xl">{expanded ? "CIIS XXV" : ""}</strong>
            <button
              onClick={() => {
                setExpanded(!expanded);
              }}
              className="p-1.5 rounded-lg bg-gray-900 hover:bg-gray-700"
            >
              {expanded ? (
                <IconChevronLeft size={6} />
              ) : (
                <IconChevronRight size={6} />
              )}
            </button>
          </div>
          <SideBarProvider contextValue={expanded}>
            <ul>
              <ItemSideBar
                description="Inicio"
                icon={<IconHome size={4} />}
                active
              />
              <ItemSideBar
                description="PostMaster"
                icon={<IconGraduation size={4} />}
              />
              <ItemSideBar
                description="Congreso"
                icon={<IconAuditorium size={4} />}
                alert
              />
              <ItemSideBar
                description="Talleres"
                icon={<IconBriefcase size={4} />}
              />
              <ItemSideBar description="Cuenta" icon={<IconUser size={4} />} />
              <ItemSideBar
                description="Asistencia"
                icon={<IconCheckList size={4} />}
              />
            </ul>
          </SideBarProvider>
        </div>
        <div className="flex justify-between">
          {/* {expanded ? "Logout" : ""} */}
          <div className="flex">
            <img
              src={avatarUrl}
              alt="Avatar del usuario"
              className="rounded-md"
            />
            <div>
              <p>Name</p>
              <span>Email</span>
            </div>
          </div>
          <div className="cursor-pointer">:</div>
        </div>
      </div>
    </nav>
  );
};

export default SideBarPanel;
