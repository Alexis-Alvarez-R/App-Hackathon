import { Link } from "react-router-dom";
import { obtenerAve } from "../../aviturismo-page/service/obtener-aves";
import { NavLinks } from "./NavLinks";

import { MenuDesplegable } from "./MenuDesplegable";

const links = ["Inicio", "Aviturismo", "Explora", "Juegos", "Contacto"];

export const HeaderHome = () => {
  obtenerAve();

  return (
    <header className="w-full flex justify-end gap-4 border-2 border-white bg-black text-white p-3 mb-4">
      <p className="border-4 border-white px-4 py-2 ml-auto">LOGO</p>
      <nav className="hidden desktop:flex justify-center items-center gap-4 border-2 border-white   px-5 py-2 w-[40%] ">
        <NavLinks links={links}></NavLinks>
      </nav>
      <MenuDesplegable links={links}></MenuDesplegable>

      <Link
        to={"/Inicio sesion"}
        className="hidden desktop:inline-block mr-10 bg-green-800 px-4 rounded-full hover:bg-green-700 active:scale-98 text-center transition-transform "
      >
        Inicie sesion
      </Link>
    </header>
  );
};
