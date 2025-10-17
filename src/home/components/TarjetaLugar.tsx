interface props {
  imgurl: string;
  nombre: string;
  descripcion: string;
}

export default function TarjetaLugar({ imgurl, nombre, descripcion }: props) {
  const comercioMensaje = `Hola!! ${nombre} quiero obtener mas información`;

  return (
    <div
      data-label={descripcion}
      className={`w-full relative overflow-hidden h-50 bg-[#ffffff] rounded-2xl hover:[box-shadow:0px_1px_6px_1px_black] transition-shadow duration-200 ease-in group `}
    >
      <figure className="w-full h-full p-2">
        <img className="w-full h-full object-cover" src={imgurl} alt="" />
      </figure>
    </div>
  );
}
