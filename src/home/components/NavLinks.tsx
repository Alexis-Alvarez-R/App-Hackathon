import { Link } from "react-router-dom";

interface Props {
  links: string[];
}
export const NavLinks = ({ links }: Props) => {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          to={link}
          className="w-full  hover:text-green-500 hover:underline block px-3 py-2 transition-colors"
        >
          {link}
        </Link>
      ))}
    </>
  );
};
