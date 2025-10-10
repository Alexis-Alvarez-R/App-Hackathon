import { useLocation } from "react-router-dom";
import Slider from "../../Components/Slider";
import ave from "../../assets/icons/ave.png";
import useImagenesLugar from "./hooks/useImagenesLugar";

import { lugarContext } from "./Context/LugarContext";
import Comentarios from "./Comentarios/Comentarios";

export default function DetalleLugar() {
  const location = useLocation();
  const { lugar } = location.state;
  const imagenesLugar = useImagenesLugar(lugar.id) as string[];
  console.log(lugar);

  return (
    <lugarContext.Provider value={lugar.id}>
      <div className="p-4 min-h-dvh flex flex-col gap-8 tablet:p-10">
        <Slider
          titulo={lugar.nombre}
          imgDefault={lugar.img}
          imagenes={imagenesLugar}
        />
        <div className="w-full h-[100%] grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          <div className="card">
            <div className="card-divpath"></div>
            <p className="relative z-10 font-nunito text-[18px]">
              {lugar.descripcion}
            </p>
          </div>
          <div className="card group">
            <div className="card-divpath"></div>
            <div className="flex flex-col gap-[40px] relative z-10 font-nunito text-[18px]">
              <p className="text-2xl font-semibold group-hover:transform-[translateX(130%)] w-[30%] transition-all duration-500 ease-initial">
                Aves
              </p>
              <img
                className="relative left-0 group-hover:transform-[translateX(110%)] w-[30%] transition-all duration-500 ease-initial"
                src={ave}
                alt=""
              />
              <p>{lugar.aves}</p>
            </div>
          </div>
          <div className="card">
            <div className="card-divpath"></div>
            <p className="relative z-10 font-nunito text-[18px]">
              {lugar.descripcion_detalle}
            </p>
          </div>
        </div>
        <Comentarios />
      </div>
    </lugarContext.Provider>
  );
}
