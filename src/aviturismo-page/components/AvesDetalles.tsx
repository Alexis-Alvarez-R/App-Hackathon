import { useLocation } from "react-router-dom";
import type { Ave } from "../interface/Ave";
import { EstadoAve } from "./EstadoAve";

export const AvesDetalles = () => {
  const location = useLocation();
  const ave = location.state as Ave;
  return (
    <div>
      <div className="border-4 border-black w-screen  flex justify-around items-center bg-gray-200 ">
        <div className="border-4 border-amber-200 w-[65%]  flex flex-col gap-5 p-3">
          <h1 className="font-thin text-3xl p-2">
            <span className="font-semibold">Nombre Comun: </span>
            {ave.nombre_comun}
          </h1>
          <h2 className="font-thin text-3xl p-2">
            <span className="font-semibold">Nombre Cientifico: </span>
            {ave.nombre_cientifico}
          </h2>
          <h3 className="font-thin text-3xl p-2">
            <span className="font-semibold">Familia: </span>
            {ave.familias.nombre}
          </h3>

          <div className="flex justify-around items-center gap-6 border-4 border-red-200 p-3 ">
            <div className="flex flex-col border-3 border-black p-3">
              <p className="text-3xl">{ave.tamano}</p>
              <p className="font-bold">Tamaño</p>
            </div>
            <div className="flex flex-col border-3 border-black p-3">
              <p className="text-3xl">{ave.dieta}</p>
              <p className="font-bold">Dieta</p>
            </div>
            <div className="flex flex-col gap-2 border-3 border-black p-3 ">
              <p className="text-3xl">
                <EstadoAve estado={ave.estados_conservacion.nombre}></EstadoAve>
              </p>
              <p className="font-bold">Estado de conservacion</p>
            </div>
          </div>
        </div>

        <div className="w-[35%]  border-4 border-blue-200 ">
          <img className="w-full  object-contain" src={ave.url_img} alt={ave.nombre_comun} />
        </div>
      </div>

      <div className="flex justify-between items-center gap-5 w-screen  p-4 mb-5">
        <p className="w-[20%] text-3xl p-2 border-4 border-black">Descripcion:</p>
        <p className="w-[80%] border-4 p-2 border-black">{ave.descripcion}</p>
      </div>

      <div className="w-screen border-4 border-green-700 ">
        <h1 className="w-full p-3 text-center">MAPA DE DISTRIBUCION</h1>
      </div>
    </div>
  );
};
