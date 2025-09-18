import { Link } from "react-router-dom";

import type { Ave } from "../interface/Ave";
import { EstadoAve } from "./EstadoAve";

interface Props {
  ave: Ave;
}

export const AvesCard = ({ ave }: Props) => {
  return (
    <div className=" bg-gray-500 border-2 border-black flex flex-col gap-5 rounded-2xl p-2">
      <div className="flex justify-center items-center w-full h-[250px] ">
        <img
          className="w-full h-full object-cover object-top-left rounded-2xl"
          src={ave.url_img}
          alt={ave.nombre_comun}
        />
      </div>
      <h2 className="w-full border-2 border-black text-center p-2 rounded-2xl  bg-gray-200 font-bold">
        {ave.nombre_comun}
      </h2>

      <div className="flex justify-between items-center gap-3 w-full">
        <p className="border-2 border-black p-2 rounded-2xl bg-gray-200 ">
          {" "}
          <span className="font-bold">Estado: </span> <EstadoAve estado={ave.estados_conservacion.nombre}></EstadoAve>
        </p>

        <Link to={"/Aves Detalles"} state={ave} className="border-2 border-black p-2 rounded-2xl bg-gray-200 font-bold">
          +INFO
        </Link>
      </div>
    </div>
  );
};
