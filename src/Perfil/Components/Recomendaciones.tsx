import recomendadoicon from "../../assets/icons/recomendado.png";

export default function Recomendaciones() {
  return (
    <div
      id="recomendaciones-perfil"
      className="min-h-max bg-skyBlue rounded-2xl p-3.5"
    >
      <div
        id="header-recomendaciones"
        className="flex items-center p-2.5 gap-1.5"
      >
        <img
          className="p-[3px] w-[8%] tablet:w-[20%] desktop:w-[9%]"
          src={recomendadoicon}
          alt=""
        />
        <span className="tablet:text-[20px]">Recomendaciones semanales</span>
      </div>
    </div>
  );
}
