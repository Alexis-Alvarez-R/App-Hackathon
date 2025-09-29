interface prop {
  img: string;
  titulo: string;
  texto: string;
}

export default function TarjetaMedalla({ img, titulo, texto }: prop) {
  return (
    <div className="relative w-full p-2 flex gap-2 bg-white rounded-[20px_0_20px_20px] hover:transform-[translateX(20px)] transition-all duration-300 ease-initial desktop:flex-col desktop:hover:transform-[translateX(0px)_scale(96%)]">
      <figure className="w-[20%] min-h-[100px] flex items-center tablet:w-[100px] desktop:w-full desktop:justify-center">
        <img className="w-full desktop:w-[100px]" src={img} alt="" />
      </figure>
      <div className="w-[80%] flex flex-col gap-2 desktop:w-full">
        <p className="font-nunito text-[18px] font-semibold tablet:text-[22px] desktop:text-center">
          {titulo}
        </p>
        <p className="text-[12px] p-1 tablet:text-[18px] desktop:text-[15px]">
          {texto}
        </p>
      </div>
    </div>
  );
}
