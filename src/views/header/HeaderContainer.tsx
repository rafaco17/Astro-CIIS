import { NavItem } from "./components/NavItem";
import navItems from "./services/header";
import { useEffect, useState } from "react";
import LoginContainer from "../login/LoginContainer";

export const Header = () => {
  const styleHeader =
    "top-0 left-0 right-0 animate-[reduce-header_linear_both] [animation-timeline:scroll()] [animation-range:0_150px]";
  const bgButton = "bg-gradient-to-b from-[#3152df95] to-[#1e254595]";
  const shadowButton =
    "shadow-[inset_0_6px_12px_#4c64d2,0_0_17px_rgba(110,137,255,0.77),inset_0_1px_10px_hsla(0,0%,100%,0.55)]";
  const shadowButtonHover =
    "hover:shadow-[inset_0_6px_12px_#4c64d2,_0_0_34px_rgba(110,137,255,0.77),_inset_0_1px_10px_hsla(0,0%,100%,0.55)]";

  const [menu, setMenu] = useState(true);

  const handleMenuToggle = () => {
    setMenu(!menu);
  };

  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!login);
  };

  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (Boolean(searchParams.get("next"))) {
        handleLogin();
    }
  }, []);

  const openMenu = menu ? "grid-rows-[0fr]" : "grid-rows-[1fr]";

  return (
    <>
      <style>
        {`
                @keyframes reduce-header {
                    100% {
                        box-shadow: 0 5px 50px -5px hsla(0, 0%, 100%, 0.1), 0 0 0 1px hsla(0, 0%, 100%, 0.1);
                        background: rgba(0, 0, 0, 0.3);
                        padding-block: 1rem;
                        -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);
                    }
                }`}
      </style>
      <section>
        <LoginContainer disabled={login} handleLogin={handleLogin} />
      </section>
      <header
        className={`
                    ${styleHeader} m-auto backdrop-blur-[10px] min-[1040px]:backdrop-blur-0 w-full 
                     overflow-hidden z-[500] fixed py-8
                `}
      >
        <div
          className="max-w-5xl grid items-center justify-center min-[1040px]:justify-normal 
                    w-full grid-cols-[auto_1fr] mx-auto text-white gap-x-4 min-[1040px]:flex 
                    max-w-screen-base"
        >
          <a
            href="/"
            className="ml-4 transition-transform duration-300 hover:scale-125"
            title="Ir a la página principal"
            aria-label="Ir a la página principal"
          >
            <img
              src="/LOGOCIIS.svg"
              alt="Logo del CIIS XXV"
              width="112"
              height="112"
            />
          </a>
          <nav
            id=":R16:"
            className={`col-span-full overflow-x-auto row-[2/3] grid min-[1040px]:block ${openMenu} transition-[grid-template-rows]`}
          >
            <ul className="flex flex-col items-center overflow-x-auto overflow-y-hidden min-[1040px]:overflow-hidden min-[1040px]:flex-row">
              {navItems.map((item) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  href={item.href}
                />
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4 mr-4 min-[1040px]:ml-auto">
            <button
              onClick={handleLogin}
              className={`flex items-center cursor-pointer gap-2 rounded-lg px-3 py-[10px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${bgButton} text-white ${shadowButton} ${shadowButtonHover} hover:scale-110 ml-auto font-medium`}
              title="Únete al CIIS XXV"
              aria-label="Inscripción Congreso Internacional de Informática y Sistemas"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="m11.645 20.91l-.007-.003l-.022-.012l-.082-.045q-.108-.06-.301-.173a25.2 25.2 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25C2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052A5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25c0 3.925-2.438 7.111-4.739 9.256a25 25 0 0 1-4.244 3.17a15 15 0 0 1-.383.219l-.022.012l-.007.004l-.003.001a.75.75 0 0 1-.704 0z"
                />
              </svg>
              Inscribirse
            </button>
            <button
              onClick={handleMenuToggle}
              className="flex items-center justify-center py-2 min-[1040px]:hidden"
              aria-expanded={menu}
              aria-controls=":R16:"
              title="Mostrar Menú"
              aria-label="Mostrar menú"
            >
              <div className="flex items-center justify-center p-2 cursor-pointer group">
                <div className="space-y-2">
                  <span
                    className={`block h-1 w-8 origin-center rounded-full bg-white/60 transition-transform ease-in-out
                                            ${menu ? "" : "translate-y-1.5 rotate-45"}
                                        `}
                  ></span>
                  <span
                    className={`block h-1 w-8 origin-center rounded-full bg-white/60 transition-transform ease-in-out
                                            ${menu ? "" : "-translate-y-1.5 -rotate-45"}
                                        `}
                  ></span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
