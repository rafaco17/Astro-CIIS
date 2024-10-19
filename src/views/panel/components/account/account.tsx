import IconSave from "./components/icon-save";
import InputWithButton from "./components/input-with-button";

const Account = () => {
  return (
    <div className="p-2 sm:p-4 h-dvh w-full bg-slate-950">
      <div className="font-bold tracking-wider mt-8 text-left select-none">
        <p className="text-4xl opacity-80">¡Hola, Rafhael!</p>
      </div>

      <div className="mt-6">
        <h4 className="text-xl font-semibold text-[#7AAEF1]">
          Datos para la elaboración del Certificado:
        </h4>
        <span className="text-sm text-slate-400">
            Es importante que uses los datos correctos, ya que se usarán para emitir tu certificado.
        </span>
        <div className="mt-4 flex justify-center sm:justify-evenly flex-col sm:flex-row">
          <div className="flex flex-col items-center space-y-4 w-full ">
            <InputWithButton
              inputName="document_number"
              defaultValue="74421572"
              label="Documento de identidad"
              placeholder="Ingrese su N° documento identidad"
            />
            <InputWithButton
              inputName="name"
              defaultValue="Rafhael Isaias"
              label="Nombres"
              placeholder="Ingrese sus nombres"
            />
            <InputWithButton
              inputName="lastname"
              defaultValue="Echevarría Mamani"
              label="Apellidos"
              placeholder="Ingrese sus apellidos"
            />
            <InputWithButton
              inputName="contact_number"
              defaultValue="654241621"
              label="Número de contacto"
              placeholder="Ingrese su número de contacto"
            />
            {/* No me gusta añadir lo de nombre de universidad y carrera */}
          </div>
          <div className="w-full mt-8 sm:mt-0 flex items-center justify-center ">
            <div className="space-y-4 flex flex-col items-center">
              <svg
                  height="200"
                  width="200"
                  viewBox="0 0 37 37"
                  id="QRcredencial"
                  className="flex-shrink-0"
                >
                  <path
                    fill="#FFFFFF"
                    d="M0,0 h37v37H0z"
                    shapeRendering="crispEdges"
                  ></path>
                  <path
                    fill="#000000"
                    d="M0 0h7v1H0zM10 0h1v1H10zM12 0h2v1H12zM16 0h1v1H16zM18 0h2v1H18zM21 0h1v1H21zM23 0h4v1H23zM30,0 h7v1H30zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM10 1h1v1H10zM13 1h6v1H13zM20 1h2v1H20zM24 1h2v1H24zM27 1h1v1H27zM30 1h1v1H30zM36,1 h1v1H36zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM12 2h1v1H12zM15 2h1v1H15zM18 2h1v1H18zM20 2h2v1H20zM30 2h1v1H30zM32 2h3v1H32zM36,2 h1v1H36zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM12 3h4v1H12zM17 3h2v1H17zM21 3h5v1H21zM27 3h1v1H27zM30 3h1v1H30zM32 3h3v1H32zM36,3 h1v1H36zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM13 4h1v1H13zM16 4h2v1H16zM19 4h2v1H19zM23 4h1v1H23zM26 4h1v1H26zM30 4h1v1H30zM32 4h3v1H32zM36,4 h1v1H36zM0 5h1v1H0zM6 5h1v1H6zM8 5h2v1H8zM11 5h2v1H11zM15 5h4v1H15zM20 5h2v1H20zM26 5h3v1H26zM30 5h1v1H30zM36,5 h1v1H36zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26 6h1v1H26zM28 6h1v1H28zM30,6 h7v1H30zM9 7h3v1H9zM14 7h3v1H14zM18 7h1v1H18zM20 7h3v1H20zM26 7h3v1H26zM0 8h5v1H0zM6 8h4v1H6zM11 8h1v1H11zM13 8h1v1H13zM17 8h3v1H17zM22 8h1v1H22zM24 8h2v1H24zM27 8h1v1H27zM29 8h1v1H29zM31 8h1v1H31zM33 8h1v1H33zM35 8h1v1H35zM2 9h2v1H2zM5 9h1v1H5zM7 9h1v1H7zM10 9h1v1H10zM12 9h1v1H12zM16 9h1v1H16zM18 9h6v1H18zM25 9h1v1H25zM28 9h2v1H28zM33 9h3v1H33zM2 10h1v1H2zM4 10h3v1H4zM9 10h2v1H9zM13 10h1v1H13zM15 10h4v1H15zM20 10h1v1H20zM26 10h2v1H26zM29 10h2v1H29zM33 10h2v1H33zM36,10 h1v1H36zM2 11h3v1H2zM7 11h2v1H7zM12 11h1v1H12zM15 11h1v1H15zM18 11h1v1H18zM21 11h2v1H21zM24 11h1v1H24zM27 11h2v1H27zM30 11h2v1H30zM33 11h1v1H33zM1 12h1v1H1zM4 12h1v1H4zM6 12h1v1H6zM10 12h1v1H10zM12 12h4v1H12zM22 12h1v1H22zM24 12h2v1H24zM30 12h3v1H30zM34 12h1v1H34zM36,12 h1v1H36zM0 13h1v1H0zM2 13h2v1H2zM5 13h1v1H5zM7 13h2v1H7zM13 13h2v1H13zM16 13h1v1H16zM18 13h4v1H18zM23 13h1v1H23zM28 13h2v1H28zM33 13h1v1H33zM0 14h2v1H0zM3 14h1v1H3zM6 14h1v1H6zM9 14h1v1H9zM11 14h2v1H11zM14 14h3v1H14zM21 14h1v1H21zM24 14h2v1H24zM27 14h2v1H27zM30 14h5v1H30zM36,14 h1v1H36zM1 15h4v1H1zM8 15h1v1H8zM11 15h1v1H11zM14 15h3v1H14zM19 15h4v1H19zM24 15h1v1H24zM28 15h1v1H28zM31 15h1v1H31zM33 15h1v1H33zM36,15 h1v1H36zM1 16h1v1H1zM5 16h2v1H5zM10 16h2v1H10zM17 16h1v1H17zM19 16h1v1H19zM22 16h5v1H22zM30 16h3v1H30zM34,16 h3v1H34zM0 17h4v1H0zM9 17h2v1H9zM12 17h2v1H12zM15 17h2v1H15zM18 17h3v1H18zM23 17h1v1H23zM25 17h1v1H25zM28 17h2v1H28zM0 18h1v1H0zM2 18h2v1H2zM6 18h3v1H6zM13 18h3v1H13zM17 18h2v1H17zM21 18h1v1H21zM24 18h4v1H24zM30 18h1v1H30zM32 18h2v1H32zM35,18 h2v1H35zM0 19h1v1H0zM2 19h1v1H2zM5 19h1v1H5zM8 19h1v1H8zM10 19h1v1H10zM12 19h2v1H12zM15 19h1v1H15zM20 19h4v1H20zM29 19h2v1H29zM33 19h1v1H33zM35,19 h2v1H35zM0 20h2v1H0zM3 20h1v1H3zM6 20h1v1H6zM9 20h1v1H9zM12 20h1v1H12zM14 20h2v1H14zM17 20h1v1H17zM20 20h1v1H20zM22 20h1v1H22zM24 20h5v1H24zM30 20h1v1H30zM32 20h3v1H32zM0 21h1v1H0zM2 21h2v1H2zM9 21h1v1H9zM17 21h5v1H17zM23 21h1v1H23zM28 21h2v1H28zM34 21h1v1H34zM1 22h2v1H1zM6 22h3v1H6zM10 22h3v1H10zM15 22h2v1H15zM18 22h1v1H18zM20 22h2v1H20zM27 22h1v1H27zM29 22h2v1H29zM32 22h2v1H32zM35,22 h2v1H35zM0 23h1v1H0zM2 23h1v1H2zM4 23h2v1H4zM7 23h5v1H7zM14 23h2v1H14zM18 23h2v1H18zM21 23h2v1H21zM24 23h1v1H24zM26 23h1v1H26zM29 23h2v1H29zM32 23h2v1H32zM0 24h2v1H0zM5 24h2v1H5zM8 24h1v1H8zM11 24h1v1H11zM15 24h1v1H15zM17 24h1v1H17zM20 24h1v1H20zM22 24h1v1H22zM24 24h4v1H24zM30 24h5v1H30zM36,24 h1v1H36zM0 25h1v1H0zM3 25h2v1H3zM7 25h1v1H7zM12 25h3v1H12zM16 25h1v1H16zM18 25h6v1H18zM25 25h1v1H25zM29 25h1v1H29zM33 25h1v1H33zM0 26h1v1H0zM4 26h1v1H4zM6 26h3v1H6zM13 26h4v1H13zM20 26h1v1H20zM24 26h1v1H24zM26 26h2v1H26zM29 26h2v1H29zM32 26h3v1H32zM36,26 h1v1H36zM0 27h1v1H0zM5 27h1v1H5zM8 27h3v1H8zM12 27h2v1H12zM15 27h1v1H15zM21 27h4v1H21zM26 27h4v1H26zM35 27h1v1H35zM0 28h1v1H0zM3 28h5v1H3zM9 28h1v1H9zM12 28h1v1H12zM14 28h1v1H14zM17 28h1v1H17zM25 28h2v1H25zM28 28h7v1H28zM8 29h2v1H8zM16 29h1v1H16zM19 29h3v1H19zM27 29h2v1H27zM32 29h1v1H32zM35 29h1v1H35zM0 30h7v1H0zM8 30h1v1H8zM10 30h3v1H10zM15 30h1v1H15zM17 30h1v1H17zM24 30h1v1H24zM26 30h1v1H26zM28 30h1v1H28zM30 30h1v1H30zM32 30h2v1H32zM35,30 h2v1H35zM0 31h1v1H0zM6 31h1v1H6zM9 31h1v1H9zM11 31h1v1H11zM14 31h1v1H14zM18 31h1v1H18zM20 31h2v1H20zM23 31h2v1H23zM26 31h3v1H26zM32 31h1v1H32zM0 32h1v1H0zM2 32h3v1H2zM6 32h1v1H6zM8 32h1v1H8zM11 32h1v1H11zM15 32h3v1H15zM19 32h1v1H19zM24 32h2v1H24zM27 32h8v1H27zM0 33h1v1H0zM2 33h3v1H2zM6 33h1v1H6zM8 33h2v1H8zM12 33h3v1H12zM16 33h1v1H16zM18 33h3v1H18zM23 33h2v1H23zM27 33h2v1H27zM30 33h1v1H30zM32 33h1v1H32zM34,33 h3v1H34zM0 34h1v1H0zM2 34h3v1H2zM6 34h1v1H6zM8 34h1v1H8zM13 34h3v1H13zM18 34h1v1H18zM21 34h2v1H21zM24 34h2v1H24zM27 34h1v1H27zM29 34h1v1H29zM33,34 h4v1H33zM0 35h1v1H0zM6 35h1v1H6zM8 35h2v1H8zM12 35h2v1H12zM19 35h1v1H19zM21 35h1v1H21zM23 35h2v1H23zM27 35h2v1H27zM30 35h2v1H30zM36,35 h1v1H36zM0 36h7v1H0zM8 36h1v1H8zM10 36h1v1H10zM12 36h1v1H12zM14 36h4v1H14zM23 36h1v1H23zM25 36h1v1H25zM27 36h1v1H27zM32,36 h5v1H32z"
                    shapeRendering="crispEdges"
                  ></path>
                </svg>
              <div className="space-y-1">
                <span className="text-center block text-xl text-green-400 font-bold">
                  Credencial QR para la asistencia
                </span>
                <button className="w-full px-6 py-2 border border-stone-500 rounded-full hover:bg-slate-600 transition-colors">
                  Descargar Credencial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pb-8">
        <h4 className="text-xl font-semibold text-[#7AAEF1]">
          Datos para el acceso de la Cuenta:
        </h4>
        <span className="text-sm text-slate-400">
            Asegúrate de ingresar un correo válido, ya que tu certificado se enviará a esa dirección.
        </span>
        <div className="mt-4 flex justify-evenly items-start flex-col sm:flex-row gap-y-4 sm:gap-y-0">
          <InputWithButton
            inputName="email"
            defaultValue="riechevarram@unjbgu.edu.pe"
            label="Correo electrónico"
            placeholder="Ingrese su email"
          />
          {/* Falta añadir el modo password o nop en el input */}
          <InputWithButton
            inputName="password"
            defaultValue="123456789"
            label="Cambiar contraseña"
            placeholder="Ingrese su contraseña"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
