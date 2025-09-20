interface Props {
  estado: string;
  className?: string;
}

const estadoColors: Record<string, string> = {
  "En Peligro": "bg-red-500 text-white",
  Vulnerable: "bg-yellow-400 text-black",
  Extinto: "bg-gray-700 text-white",
  "Casi Amenazado": "bg-orange-500 text-white",
  "Preocupación Menor": "bg-green-500 text-white",
};

export const EstadoAve = ({ estado, className = "" }: Props) => {
  const estadoClass = estadoColors[estado] ?? "bg-gray-200 text-black";

  return <span className={` rounded-2xl p-2   ${estadoClass} ${className}`}>{estado}</span>;
};
