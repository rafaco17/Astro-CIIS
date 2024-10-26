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
  IconOptions,
} from "../../../../assets/private";
import ItemSideBar from "./components/item-sidebar";
import { SideBarProvider } from "./context/SideBarProvider";
import generateSkin from "../../services/generateSkin";
import AbreviationNameUser from "./helpers/abreviation-name-user";
import IconLogout from "../../../../assets/private/IconLogout";
import { logout } from "../../../../middlewares/auth";

interface SideBarProps {
  nameUser: string;
  emailUser: string;
}

const SideBarPanel = ({ nameUser, emailUser }: SideBarProps) => {
  const [expanded, setExpanded] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const userFeatures = {
    name: nameUser,
    background: "#2e2e2e",
    color: "#7AAEF1",
    size: 48,
    rounded: false,
    bold: true,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
        if (window.innerWidth < 440) {
          setTransparent(true);
        }
      } else {
        setExpanded(true);
        setTransparent(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div
      className={`h-full relative z-50 ${transparent ? "min-w-0" : expanded ? "min-w-[296px]" : "min-w-[80px]"}`}
    >
      <nav
        className={`h-full border-r ${transparent ? "border-none" : "border-white/10"} select-none fixed ${
          transparent
            ? expanded
              ? "bg-[#000415]"
              : "bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-col justify-between h-full p-4 pb-4">
          <div className="space-y-4">
            <div
              className={`flex ${expanded ? "justify-between" : "justify-center"} items-center`}
            >
              <strong className="text-xl">{expanded ? "CIIS XXV" : ""}</strong>
              <button
                onClick={() => setExpanded(!expanded)}
                className="p-1.5 rounded-lg bg-gray-900 hover:bg-gray-700"
              >
                {expanded ? (
                  <IconChevronLeft size={6} />
                ) : (
                  <IconChevronRight size={6} />
                )}
              </button>
            </div>
            {!(transparent && !expanded) && (
              <SideBarProvider expanded={expanded}>
                <ul>
                  <ItemSideBar
                    to="/"
                    description="Inicio"
                    icon={<IconHome size={5} />}
                    index={0}
                    onClick={() => {
                      if (transparent) setExpanded(!expanded);
                    }} 
                  />
                  <ItemSideBar
                    to="/postmaster"
                    description="PostMaster"
                    icon={<IconGraduation size={5} />}
                    index={1}
                    onClick={() => {
                      if (transparent) setExpanded(!expanded);
                    }} 
                  />
                  <ItemSideBar
                    to="/ciis"
                    description="Congreso"
                    icon={<IconAuditorium size={5} />}
                    index={2}
                    onClick={() => {
                      if (transparent) setExpanded(!expanded);
                    }} 
                  />
                  <ItemSideBar
                    to="/talleres"
                    description="Talleres"
                    icon={<IconBriefcase size={5} />}
                    index={3}
                    onClick={() => {
                      if (transparent) setExpanded(!expanded);
                    }} 
                    disabled={true}
                  />
                  <ItemSideBar
                    to="/cuenta"
                    description="Cuenta"
                    icon={<IconUser size={5} />}
                    index={4}
                    onClick={() => {
                      if (transparent) setExpanded(!expanded);
                    }} 
                  />
                  <ItemSideBar
                    to="/asistencia"
                    description="Asistencia"
                    icon={<IconCheckList size={5} />}
                    index={5}
                    onClick={() => {
                      if (transparent) setExpanded(!expanded);
                    }} 
                    disabled={true}
                  />
                </ul>
              </SideBarProvider>
            )}
          </div>

          {!(transparent && !expanded) && (
            <div className="flex justify-between items-center">
              <div
                className={`flex ${!expanded ? "gap-x-0 items-end" : "gap-x-2 items-center"} justify-center`}
              >
                {loading ? (
                  <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent border-solid rounded-full animate-spin"></div>
                ) : (
                  <img
                    src={avatarUrl}
                    alt="Avatar del usuario"
                    className="rounded-md"
                    loading="lazy"
                    decoding="async"
                    width={1600}
                    height={900}
                    draggable="false"
                  />
                )}
                <div
                  className={`text-base flex flex-col ${!expanded ? "invisible w-0" : "visible"}`}
                >
                  <p className="capitalize">
                    {AbreviationNameUser(nameUser, 24)}
                  </p>
                  <span className="text-xs text-slate-400">
                    {AbreviationNameUser(emailUser, 26)}
                  </span>
                </div>
              </div>
              <div
                className={`cursor-pointer hover:bg-gray-700 rounded-lg ${!expanded ? "invisible w-0 p-0" : "visible p-1.5"}`}
                onClick={() => {
                  logout();
                }}
              >
                <IconLogout size={6} />
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SideBarPanel;
