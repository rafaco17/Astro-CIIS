import { Routes, Route } from "react-router-dom";
import SideBarPanel from "./components/sidebar/sidebar-panel";
import { useAuth } from "../../hooks/use-auth";

const routes = [
  { path: "/", element: <>Inicio</>  },
  { path: "/postmaster", element: <>PostMaster</>  },
  { path: "/ciis", element: <>Congreso</>  },
  { path: "/talleres", element: <>Talleres</>  },
  { path: "/cuenta", element: <>Cuenta</>  },
  { path: "/asistencia", element: <>Asistencia</>  },
]

const PanelContainer = () => {
  const { user } = useAuth();

  return (
      <div className="flex h-dvh">
        <aside className="">
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
