import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

interface DropdownItem {
  label: string;
  link: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  mobile?: boolean; // si es mobile, ocupamos más espacio
  onItemClick?: () => void;
}

export const Dropdown = ({ title, items, mobile = false, onItemClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 rounded hover:text-lightGreen hover:underline transition w-full flex justify-between items-center"
      >
        {title}
        <span className={`ml-2 transform transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 text-white bg-darkGreen shadow-lg rounded z-20 flex flex-col ${
            mobile ? "w-full left-0 right-0" : "right-0 w-48"
          } transition-all duration-200`}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              onClick={() => {
                closeDropdown();
                onItemClick?.();
              }}
              className="px-4 py-3 hover:bg-gray-100 hover:text-darkGreen transition border-b last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
