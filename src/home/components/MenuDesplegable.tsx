import { useState } from "react";
import { Link } from "react-router-dom";

import menuLogo from "../../assets/icons/menu-icon.svg";
import { NavLinks } from "./NavLinks";

interface Props {
  links: string[];
}

export const MenuDesplegable = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative desktop:hidden ml-auto">
      <div className="flex justify-center items-center">
        <img className="w-11 h-11 cursor-pointer" src={menuLogo} alt="menu" onClick={toggleMenu} />
      </div>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-10" onClick={closeMenu} />}

      <div
        className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-xl shadow-lg flex flex-col p-3 z-20 transition-all duration-200 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <NavLinks links={links} />
        <Link
          to="/Inicio sesion"
          onClick={closeMenu}
          className="mt-3 w-full bg-green-800 text-center text-white py-2 rounded-full hover:bg-green-700 active:scale-95 transition-transform"
        >
          Inicie sesión
        </Link>
      </div>
    </div>
  );
};
