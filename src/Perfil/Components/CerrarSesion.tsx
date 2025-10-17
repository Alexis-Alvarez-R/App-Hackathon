import useCerrarSesion from "../hook/useCerrarSesion";
import cerrarsesion from "./../../assets/icons/cerrarsesion.png";

export default function CerrarSesion() {
  const cerrarSesion = useCerrarSesion();
  return (
    <button
      onClick={cerrarSesion}
      id="recomendaciones-perfil"
      className="min-h-max bg-red-300 rounded-2xl p-3.5"
    >
      <div
        id="header-recomendaciones"
        className="flex items-center p-2.5 gap-1.5"
      >
        <img
          className="p-[3px] w-[8%] tablet:w-[20%] desktop:w-[9%]"
          src={cerrarsesion}
          alt=""
        />
        <span className="tablet:text-[20px]">Cerrar sesion</span>
      </div>
    </button>
  );
}
