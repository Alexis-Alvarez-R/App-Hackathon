import { useLocation } from "react-router-dom";
import type { Ave } from "../interface/Ave";
import { EstadoAve } from "./EstadoAve";

export const AvesDetalles = () => {
  const location = useLocation();
  const ave = location.state as Ave;
  return (
    <div>
      <section className=" flex-col-reverse w-screen desktop:flex-row flex justify-around items-center bg-beige">
        <div className="  w-full desktop:w-[65%]  flex flex-col gap-5 p-3 bg-beige ">
          <h1 className="  text-xl font-nunito font-bold desktop:text-3xl  text-darkGreen  p-2">
            <span className="text-black">Nombre Comun: </span>
            {ave.nombre_comun}
          </h1>
          <h2 className=" text-xl font-nunito font-bold desktop:text-3xl  text-darkGreen p-2">
            <span className="text-black">Nombre Cientifico: </span>
            {ave.nombre_cientifico}
          </h2>
          <h3 className="text-xl font-nunito font-bold text-darkGreen desktop:text-3xl p-2 ">
            <span className="text-black">Familia: </span>
            {ave.familias.nombre}
          </h3>

          <div className="flex flex-col-reverse desktop:flex-row justify-around items-center gap-6 p-3  bg-lightGreen rounded-2xl">
            <div className="w-full desktop:w-[25%] flex flex-col  p-3 bg-beige rounded-2xl hover:bg-darkGreen hover:text-beige transition-colors">
              <p className="text-xl desktop:text-3xl">{ave.tamano}</p>
              <p className="font-bold">Tamaño</p>
            </div>
            <div className=" w-full desktop:w-[25%] flex flex-col gap-2  p-3 bg-beige rounded-2xl  hover:bg-darkGreen hover:text-beige transition-colors">
              <p className=" text-xl desktop:text-3xl">{ave.dieta}</p>
              <p className="font-bold">Dieta</p>
            </div>
            <div className="w-full desktop:w-[50%] flex flex-col gap-3 px-2 py-4 bg-beige rounded-2xl">
              <p className="text-xl desktop:text-3xl">
                <EstadoAve estado={ave.estados_conservacion.nombre}></EstadoAve>
              </p>
              <p className="font-bold">Estado de conservacion</p>
            </div>
          </div>
        </div>

        <div className=" w-full flex justify-center items-center desktop:w-[35%] hover:scale-105 transition-transform duration-500 ease-in-out  ">
          <img className="w-full  object-contain " src={ave.url_img} alt={ave.nombre_comun} />
        </div>
      </section>

      <section className="flex flex-col desktop:flex-row justify-between items-center gap-5 w-screen bg-lightGreen p-4 mb-5 ">
        <p className=" w-full desktop:w-[20%] font-nunito font-bold text-3xl p-2  bg-beige rounded-2xl  hover:bg-darkGreen hover:text-beige transition-colors">
          Descripcion:
        </p>
        <p className=" w-full desktop:w-[80%] font-nunito font-bold p-2  bg-beige rounded-2xl  hover:bg-darkGreen hover:text-beige transition-colors">
          {ave.descripcion}
        </p>
      </section>

      <section className="w-screen border-4 border-green-700 ">
        <h1 className="w-full p-3 text-center">MAPA DE DISTRIBUCION</h1>
      </section>
    </div>
  );
};
