import { Routes, Route } from "react-router-dom";
import SideBarPanel from "./components/sidebar/sidebar-panel";
import { useAuth } from "../../hooks/use-auth";
import Home from "./components/home/home";
import PostMaster from "./components/postmaster/postmaster";
import Congress from "./components/congress/congress";
import Workshops from "./components/workshops/workshops";
import Account from "./components/account/account";
import Attendance from "./components/attendance/attendance";

const routes = [
  { path: "/", element: <Home />  },
  { path: "/postmaster", element: <PostMaster />  },
  { path: "/ciis", element: <Congress />  },
  { path: "/workshops", element: <Workshops />  },
  { path: "/account", element: <Account />  },
  { path: "/attendance", element: <Attendance />  },
]

const PanelContainer = () => {
  const { user } = useAuth();

  return (
      <div className="flex h-dvh relative">
        <aside className="h-full">
          <SideBarPanel
            nameUser={`${user.name} ${user.lastname}`}
            emailUser={user.email}
          />
        </aside>
        <main className="flex-1"> 
          <Routes>
          {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.element
                }
              />
            ))}
          </Routes>
        </main>
      </div>
  );
};

export default PanelContainer;
