import type { Dispatch, SetStateAction } from "react";

import TarjetaLocalidad from "./TarjetaLocalidad";
import useGetComercios from "../hooks/useGetComercios";

import flecha from "../../../../assets/icons/flecha.png";

interface props {
  idlugar: number;
  setVistaGuias: Dispatch<SetStateAction<boolean>>;
}

export default function Localidades({ idlugar, setVistaGuias }: props) {
  const comercios = useGetComercios({ idlugar });

  function toogleVistaGuias() {
    setVistaGuias(true);
  }

  return (
    <div
      id="main-tarjetas"
      className="relative w-full h-full [box-shadow:1px_2px_3px_1px_black] rounded-2xl tablet:p-3 "
    >
      <div className="w-[100%] flex justify-between px-2 desktop:px-6">
        <div className="hidden tablet:flex tablet:w-[20%]">
          <h1 className="pl-4 flex w-full items-center font-nunito font-semibold text-[16px] tablet:text-[18px]"></h1>
        </div>
        <div className="w-[70%] flex tablet:w-[50%] desktop:w-[40%]">
          <h1 className="pl-4 flex w-full items-center font-nunito font-semibold text-[16px] tablet:text-[18px]">
            Emprendedores Locales
          </h1>
        </div>
        <div onClick={toogleVistaGuias} className="w-max flex items-center">
          <h1 className="pl-4 flex w-[70%] items-center font-nunito text-[12px]">Guias</h1>
          <div className="w-[30px] h-[30px] flex justify-center items-center font-bold">
            <img src={flecha} alt="" className="h-full" />
          </div>
        </div>
      </div>
      <div className="w-full relative grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-4  tablet:p-2 desktop:p-6">
        {comercios.length == 0 ? (
          <h1>No hay</h1>
        ) : (
          comercios.map(({ imgurl, nombre, descripcion, producto_descripcion, id_comercio }) => {
            return (
              <TarjetaLocalidad
                key={id_comercio}
                imgurl={imgurl}
                nombre={nombre}
                descripcion={descripcion}
                producto_descripcion={producto_descripcion}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
