interface props {
  img: string;
  nombre: string;
}

export default function TarjetaBuscado({ img, nombre }: props) {
  const comercioMensaje = `Hola!! ${nombre} quiero obtener mas información`;

  return (
    <div
      data-label={""}
      className={`w-full max-w-[400px] relative overflow-hidden h-100 bg-[#ffffff] rounded-2xl hover:[box-shadow:0px_1px_6px_1px_black] transition-shadow duration-200 ease-in group`}
    >
      <figure className="w-full h-[75%] transition-all duration-600 ease-in">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </figure>
      <div className="p-4 h-[25%] relative">
        <p className="relative z-20 text-[22px] font-nunito font-semibold">
          {nombre}
        </p>
      </div>
    </div>
  );
}
