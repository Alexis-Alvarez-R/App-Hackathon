import { Link } from "react-router-dom";

interface Props {
  links: string[];
}
export const NavLinks = ({ links }: Props) => {
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
        } else {
          return (
            <Link
              key={index}
              to={link}
              className=" text-md  hover:text-lightGreen hover:underline block px-3 py-2 transition-colors font-nunito"
            >
              {link}
            </Link>
          );
        }
      })}
    </>
  );
};
