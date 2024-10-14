import { useState } from "react";
import SideBarPanel from "./components/sidebar/sidebar-panel";

const PanelContainer = () => {
  const [itemStates, setItemStates] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="flex h-dvh">
      <aside className="">
        <SideBarPanel
          nameUser="Rafhael Echevarria"
          emailUser="riechevarriam@unjbg.edu.pe"
          itemStates={itemStates}
          setItemStates={setItemStates}
        />
      </aside>
      <main className="flex-1 ">
        {itemStates[0] && <p>Elemento 1 activado</p>}
        {itemStates[1] && <p>Elemento 2 activado</p>}
        {itemStates[2] && <p>Elemento 3 activado</p>}
        {itemStates[3] && <p>Elemento 4 activado</p>}
        {itemStates[4] && <p>Elemento 5 activado</p>}
        {itemStates[5] && <p>Elemento 6 activado</p>}
      </main>
    </div>
  );
};

export default PanelContainer;
