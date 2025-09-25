import { useLocation } from "react-router-dom";
import type { Ave } from "../interface/Ave";
import { EstadoAve } from "./EstadoAve";
import AvesMapa from "./AvesMapa";

export const AvesDetalles = () => {
  const location = useLocation();
  const ave = location.state as Ave;

  //Data Fake

  const conteoAvistamientos = {
    Boaco: 12,
    Carazo: 18,
    Chinandega: 15,
    Chontales: 14,
    Estelí: 22,
    Granada: 25,
    Jinotega: 30,
    León: 35,
    Madriz: 8,
    Managua: 50,
    Masaya: 10,
    Matagalpa: 28,
    "Nueva Segovia": 9,
    "Río San Juan": 20,
    Rivas: 27,
    "Costa Caribe Norte": 45,
    "Costa Caribe Sur": 42,
  };

  return (
    <div>
      <section className=" flex-col-reverse w-screen desktop:flex-row flex justify-around items-cente bg-gradient-to-r  from-lightGray  to-darkGreen   ">
        <div className="  w-full desktop:w-[65%]  flex flex-col gap-5 p-3 bg-linear-gradient  from-lightGray  to-darkGreen  ">
          <h1 className="  text-xl font-nunito font-bold desktop:text-3xl  p-2">
            <span className="text-ocean">Nombre Comun: </span>
            {ave.nombre_comun}
          </h1>
          <h2 className=" text-xl font-nunito font-bold desktop:text-3xl p-2">
            <span className="text-ocean">Nombre Cientifico: </span>
            {ave.nombre_cientifico}
          </h2>
          <h3 className="text-xl font-nunito font-bold  desktop:text-3xl p-2 ">
            <span className="text-ocean">Familia: </span>
            {ave.familias.nombre}
          </h3>

          <div className="flex flex-col-reverse desktop:flex-row justify-around items-center gap-6 p-3  bg-ocean rounded-2xl">
            <div className="w-full desktop:w-[25%] flex flex-col  p-3 bg-lightGray rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300">
              <p className="text-xl desktop:text-3xl">{ave.tamano}</p>
              <p className="font-bold">Tamaño</p>
            </div>
            <div className=" w-full desktop:w-[25%] flex flex-col gap-2  p-3 bg-lightGray  rounded-2xl  hover:scale-105 transition-transform ease-in-out duration-300">
              <p className=" text-xl desktop:text-3xl">{ave.dieta}</p>
              <p className="font-bold">Dieta</p>
            </div>
            <div className="w-full desktop:w-[50%] flex flex-col gap-3 px-2 py-4 bg-lightGray rounded-2xl hover:scale-105 transition-transform ease-in-out duration-300">
              <p className="text-xl desktop:text-3xl">
                <EstadoAve estado={ave.estados_conservacion.nombre}></EstadoAve>
              </p>
              <p className="font-bold">Estado de conservacion</p>
            </div>
          </div>
        </div>

        <figure className=" w-full   desktop:mr-8 flex justify-center items-center desktop:w-[35%] hover:scale-105 transition-transform duration-500 ease-in-out  ">
          <img className="w-full desktop:h-[350px]  object-contain " src={ave.url_img} alt={ave.nombre_comun} />
        </figure>
      </section>

      <section className="flex flex-col desktop:flex-row justify-between items-center gap-5 w-screen bg-gradient-to-r from-lightGray  to-darkGreen p-4  ">
        <p className=" w-full desktop:w-[20%] font-nunito font-bold text-3xl p-2  text-lightGray bg-ocean rounded-2xl  ">
          Descripcion:
        </p>
        <p className=" w-full desktop:w-[80%] font-nunito font-bold p-2 text-lightGray bg-ocean rounded-2xl ">
          {ave.descripcion}
        </p>
      </section>

      <section className="w-screen flex flex-col justify-center items-center  bg-gradient-to-r  from-lightGray  to-darkGreen p-4 mb-10">
        <h1 className="w-full desktop:w-[50%] p-3 text-center text-3xl  text-black font-nunito font-bold bg-lightGray rounded-2xl mb-5 ">
          MAPA DE DISTRIBUCION
        </h1>
        <div className=" w-full desktop:w-[70%] flex justify-center items-center ">
          {/* Usa el nuevo componente de mapa */}
          <AvesMapa conteoAvistamientos={conteoAvistamientos} />
        </div>
      </section>
    </div>
  );
};
