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
  const [itemStates, setItemStates] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [avatarUrl, setAvatarUrl] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const userFeatures = {
    name: "Rafhael Isaias Echevarria Mamani",
    background: "#2e2e2e",
    color: "#7AAEF1",
    size: 48,
    rounded: false,
    bold: true,
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      setLoading(true); 
      const result = await generateSkin(userFeatures);
      setAvatarUrl(result || null);
      setLoading(false);
    };
    fetchAvatar();
  }, []);

  return (
    <nav className="h-full border-r border-white/10">
      <div className="flex flex-col justify-between h-full p-4 pb-4">
        <div className="space-y-4">
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
          <SideBarProvider expanded={expanded} itemsStates={itemStates}>
            <ul>
              <ItemSideBar
                description="Inicio"
                icon={<IconHome size={5} />}
                index={0}
                onClick={() =>
                  setItemStates([true, false, false, false, false, false])
                }
              />
              <ItemSideBar
                description="PostMaster"
                icon={<IconGraduation size={5} />}
                index={1}
                onClick={() =>
                  setItemStates([false, true, false, false, false, false])
                }
              />
              <ItemSideBar
                description="Congreso"
                icon={<IconAuditorium size={5} />}
                index={2}
                onClick={() =>
                  setItemStates([false, false, true, false, false, false])
                }
              />
              <ItemSideBar
                description="Talleres"
                icon={<IconBriefcase size={5} />}
                index={3}
                onClick={() =>
                  setItemStates([false, false, false, true, false, false])
                }
              />
              <ItemSideBar
                description="Cuenta"
                icon={<IconUser size={5} />}
                index={4}
                onClick={() =>
                  setItemStates([false, false, false, false, true, false])
                }
              />
              <ItemSideBar
                description="Asistencia"
                icon={<IconCheckList size={5} />}
                index={5}
                onClick={() =>
                  setItemStates([false, false, false, false, false, true])
                }
              />
            </ul>
          </SideBarProvider>
        </div>
        <div className="flex justify-between items-center">
          <div className={`flex ${!expanded ? "gap-x-0 items-end" : "gap-x-2 items-center"} justify-center`}>
            {loading ? (
              <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent border-solid rounded-full animate-spin"></div>
            ) : (
              <img src={avatarUrl} alt="Avatar del usuario" className="rounded-md" />
            )}
            <div className={`text-base flex flex-col ${!expanded ? "invisible w-0" : "visible"}`}>
              <p>Rafhael Echevarría</p>
              <span className="text-xs text-slate-400">riechevarriam@unjbg.edu.pe</span>
            </div>
          </div>
          <div className={`cursor-pointer ${!expanded ? "invisible w-0" : "visible"}`}>:</div>
        </div>
      </div>
    </nav>
  );
};

export default SideBarPanel;
