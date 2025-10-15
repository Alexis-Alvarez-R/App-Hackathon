import { Link } from "react-router-dom";
import { Dropdown } from "../../Components/DropDown";

interface Props {
  links: string[];
  onLinkClick?: () => void;
}

const categorias = [
  { label: "Aviturismo", link: "/aviturismo" },
  { label: "AguaTurismo", link: "/notfound" },
  { label: "FuegoTurismo", link: "/notfound" },
];

export const NavLinks = ({ links, onLinkClick }: Props) => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Esto hace que el desplazamiento sea suave
    });
  };

  return (
    <>
      {links.map((link, index) => {
        if (link === "Contacto") {
          return (
            <button
              key={index}
              className=" text-md hover:text-lightGreen hover:underline block px-3 py-2 transition-colors font-nunito  text-start"
              onClick={handleScrollToBottom}
            >
              {link}
            </button>
          );
        }
        if (link === "Inicio") {
          return (
            <Link
              key={index}
              to={"/"}
              className=" text-md  hover:text-lightGreen hover:underline block px-3 py-2 transition-colors font-nunito"
              onClick={onLinkClick}
            >
              {link}
            </Link>
          );
        } else {
          return (
            <Link
              key={index}
              to={link}
              className=" text-md  hover:text-lightGreen hover:underline block px-3 py-2 transition-colors font-nunito"
              onClick={onLinkClick}
            >
              {link}
            </Link>
          );
        }
      })}
      <Dropdown title="Vive" items={categorias}></Dropdown>
    </>
  );
};
