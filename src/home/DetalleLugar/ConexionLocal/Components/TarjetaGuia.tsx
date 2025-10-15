import guiaturistico from "../../../../assets/icons/guiaturistico2.png";
import whatsAppIcon from "../../../../assets/icons/whatsAppIcon.png";

interface props {
  nombre: string;
  apodo: string;
  especialidad: string;
  contacto: string;
}

export default function TarjetaGuia({ nombre, apodo, especialidad }: props) {
  //En tema diseño No se donde meter el nombreeeeee!!!
  const guiaMensaje = `Hola!! quiero obtener mas información`;

  return (
    <div className="group w-full h-[180px] tablet:h-[220px] desktop:h-[260px] relative bg-white flex items-center rounded-2xl px-2 cursor-pointer hover:[box-shadow:1px_1px_5px_1px_black] transition-shadow duration-150 ease-in">
      <figure className="w-[20%] rounded-full relative overflow-hidden group-hover:[border:solid_green_5px] group-hover:animate-pulse group-hover:transition-all duration-500 ease-in">
        <a
          href={`https://wa.me/50583702752?text=${encodeURIComponent(
            guiaMensaje
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full absolute z-10 top-[-110%] left-0  group-hover:translate-y-[110%] transition-transform duration-150 ease-in"
        >
          <img src={whatsAppIcon} />
        </a>
        <img
          src={guiaturistico}
          alt=""
          className="w-full scale-[110%] group-hover:translate-y-full transition-transform duration-150 ease-in-out"
        />
      </figure>
      <div className="px-4 w-[80%] h-[80%] overflow-hidden z-10 flex flex-col justify-center">
        <h1 className="h-[40%] font-nunito text-[18px] font-semibold">
          {apodo}
        </h1>
        <p className="text-[12px] h-[50%]">{especialidad}</p>
      </div>
    </div>
  );
}
