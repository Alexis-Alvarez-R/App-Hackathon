import favoritoicon from "../../assets/icons/favoritos.png";

export default function Favoritos() {
  return (
    <div id="favoritos-perfil" className="min-h-max bg-beige rounded-2xl p-3.5">
      <div id="header-favoritos" className="flex items-center p-2.5 gap-1.5">
        <img
          className="w-[8%] tablet:w-[20%] desktop:w-[9%]"
          src={favoritoicon}
          alt=""
        />
        <span className=" tablet:text-[20px]">Lugares Favoritos</span>
      </div>
    </div>
  );
}
