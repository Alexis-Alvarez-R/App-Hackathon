import { useEffect, useState } from "react";
import lupa from "../../assets/icons/lupa.png";
import { useLugaresContext } from "../../Context/LugaresContext";
import TarjetaBuscado from "./TarjetaBuscado";
import { type Lugar } from "../../Explora/interfaces/Lugar";

export default function Busqueda() {
  const lugares: Lugar[] = useLugaresContext();
  const [busqueda, setBusqueda] = useState<string>("");
  const [busquedaDebounce, setBusquedaDebounce] = useState<string>("");

  useEffect(() => {
    const time = setTimeout(() => {
      setBusquedaDebounce(busqueda);
    }, 300);

    return () => clearTimeout(time);
  }, [busqueda]);

  return (
    <div className="w-full px-8 flex flex-col gap-5 absolute top-22">
      <div className="p-2 px-4 w-full bg-[#e9e9e9] h-10 rounded-2xl overflow-hidden flex gap-2 [box-shadow:1px_1px_3px_1px_black]">
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
            setBusqueda(event.target.value);
          }}
          className="w-full p-2 rounded-2xl"
        />
        <figure className="w-max h-full p-0">
          <img src={lupa} alt="" className="h-full" />
        </figure>
      </div>

      <div
        className={`${
          busqueda == "" ? "hidden" : ""
        } grid bg-[#dddddd] p-8 rounded-4xl  [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-4`}
      >
        {busquedaDebounce !== "" &&
          lugares.map(({ id, nombre, img }) => {
            if (nombre.toLowerCase().includes(busquedaDebounce.toLowerCase())) {
              return <TarjetaBuscado key={id} nombre={nombre} img={img} />;
            }
            return null;
          })}
      </div>
    </div>
  );
}
