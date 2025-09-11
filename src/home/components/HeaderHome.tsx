import { Link } from "react-router-dom";
import { obtenerAve } from "../../aviturismo-page/service/obtener-aves";
import { NavLinks } from "./NavLinks";

const links = ["Inicio", "Aviturismo", "Explora", "Juegos", "Contacto"];

export const HeaderHome = () => {
  obtenerAve();

  return (
    <header className="absolute z-10 w-full flex justify-end gap-4 border-2 border-white bg-black text-white p-3">
      <p className="border-4 border-white px-4 py-2 ml-auto">LOGO</p>
      <nav className="flex justify-center items-center gap-4 border-2 border-white   px-5 py-2 w-[40%] ml-auto">
        <NavLinks links={links}></NavLinks>
      </nav>

      <Link
        to={"/Inicio sesion"}
        className="mr-10 bg-green-800 px-4 rounded-full hover:bg-green-700 active:scale-98  transition-transform "
      >
        Inicie sesion
      </Link>
    </header>
  );
};
