import SideBarPanel from "./components/sidebar/sidebar-panel";

const PanelContainer = () => {
  return (
    <div className="flex h-dvh">
      <aside className="">
        <SideBarPanel />
      </aside>
      <main className="flex-1 ">Contenido del panel</main>
    </div>
  );
};

export default PanelContainer;
