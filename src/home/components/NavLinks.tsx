import { Link } from "react-router-dom";

interface Props {
  links: string[];
}
export const NavLinks = ({ links }: Props) => {
  return (
    <>
      {links.map((link, index) => {
        if (link === "Contacto") {
          return (
            <a
              key={index}
              href="#footer"
              className="w-full hover:text-lightGreen hover:underline block px-3 py-2 transition-colors font-nunito"
            >
              {link}
            </a>
          );
        } else {
          return (
            <Link
              key={index}
              to={link}
              className="w-full  hover:text-lightGreen hover:underline block px-3 py-2 transition-colors font-nunito"
            >
              {link}
            </Link>
          );
        }
      })}
    </>
  );
};
