import { Link } from "react-router-dom";
import { obtenerAve } from "../../aviturismo-page/service/obtener-aves";
import { NavLinks } from "./NavLinks";
import { useSesionContex } from "../../Context/AuthContex";

import { MenuDesplegable } from "./MenuDesplegable";
import logo from "../../assets/img/logo.png";

const links = ["Inicio", "Aviturismo", "Explora", "Juegos", "Contacto"];

export const HeaderHome = () => {
  obtenerAve();
  const { sesion } = useSesionContex();
  {
    console.log("HeaderHome render, sesion:", sesion);
  }

  return (
    <header
      id="header"
      className="w-full flex justify-end gap-4 border-2 border-white bg-black text-white p-3 mb-4"
    >
      <figure className="flex items-center w-[60%]">
        <img
          src={logo}
          className="w-full h-[80px] object-contain"
        ></img>
      </figure>
      <nav className="hidden desktop:flex justify-center items-center gap-4 border-2 border-white   px-5 py-2 w-[40%] ">
        <NavLinks links={links}></NavLinks>
      </nav>
      <MenuDesplegable links={links}></MenuDesplegable>

      {sesion ? (
        <Link
          to={"/Perfil"}
          className=" hidden desktop:block mr-10 bg-green-800 px-4 rounded-full hover:bg-green-700 active:scale-98  transition-transform "
        >
          perfil
        </Link>
      ) : (
        <Link
          to={"/Inicio-sesion"}
          className=" hidden desktop:block mr-10 bg-green-800 px-4 rounded-full hover:bg-green-700 active:scale-98  transition-transform "
        >
          Inicie sesion
        </Link>
      )}
    </header>
  );
};
