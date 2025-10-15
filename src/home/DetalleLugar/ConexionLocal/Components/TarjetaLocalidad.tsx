import whatsAppIcon from "../../../../assets/icons/whatsAppIcon.png";

interface props {
  imgurl: string;
  nombre: string;
  producto_descripcion: string;
  descripcion: string;
}

export default function TarjetaLocalidad({
  imgurl,
  nombre,
  producto_descripcion,
  descripcion,
}: props) {
  const comercioMensaje = `Hola!! ${nombre} quiero obtener mas información`;

  return (
    <div
      data-label={descripcion}
      className={`w-full relative overflow-hidden h-100 bg-[#ffffff] rounded-2xl hover:[box-shadow:0px_1px_6px_1px_black] transition-shadow duration-200 ease-in group before:content-[attr(data-label)] before:absolute before:z-10 before:w-[70%] before:left-[50%] before:top-[-60%] before:[transform:translateX(-50%)] before:text-[16px] before:font-semibold before:text-transparent hover:before:text-white hover:before:[transform:translate(-50%,400px)] before:transition-[transform,color] before:duration-600 before:ease-in after:absolute after:z-0 after:w-full after:h-full after:rounded-2xl after:top-[-100%] after:left-0 after:bg-[#00000065] after:[backdrop-filter:blur(2px)] hover:after:translate-y-[100%] after:transition-transform after:duration-600 after:ease-in tablet:before:[transform:translate(-50%,500%)] tablet:hover:before:[transform:translate(-50%,330px)] desktop:hover:before:[transform:translate(-50%,320px)]`}
    >
      <figure className="w-full h-[55%] group-hover:h-100 transition-all duration-600 ease-in">
        <img className="w-full h-full object-cover" src={imgurl} alt="" />
      </figure>
      <div className="p-4 h-[45%] relative">
        <span className="flex items-center overflow-hidden w-max h-[20%] text-white bg-regularGreen text-[18px] font-medium font-nunito rounded-2xl absolute z-10 top-[-190%] left-[35%] translate-x-[-50%] group-hover:translate-y-[280px] transition-transform duration-600 ease-in tablet:group-hover:translate-y-[600%]">
          <img src={whatsAppIcon} alt="" className="h-full" />
          <a
            href={`https://wa.me/50583702752?text=${encodeURIComponent(
              comercioMensaje
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pr-2 cursor-pointer"
          >
            Contactar
          </a>
        </span>
        <p className="relative z-20 text-[22px] font-nunito font-semibold">
          {nombre}
        </p>
        <p className="relative z-20 text-[12px] font-nunito">
          {producto_descripcion}
        </p>
      </div>
    </div>
  );
}
