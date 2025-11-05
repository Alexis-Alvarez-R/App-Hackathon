import Busqueda from "./Busqueda";
import DescubreIA from "./DescubreIA";

export default function Home() {
  return (
    <div className="w-full flex flex-col mt-[-16px] gap-0">
      <figure className=" relative overflow-hidden tablet: desktop:h-[80vh]">
        <div className=" absolute inset-0 bg-gradient-to-r from-lightGreen/30 to-amarillo/30 "></div>
        <img
          className="w-full h-full object-cover"
          src="https://kozarxgvjnsdtpmauqik.supabase.co/storage/v1/object/public/aves-img/img-main-RN.png"
          alt="Rumbo Nica"
        />
      </figure>
      <div className="w-full p-4 tablet:px-38 desktop:px-48">
        <DescubreIA />
      </div>
    </div>
  );
}
