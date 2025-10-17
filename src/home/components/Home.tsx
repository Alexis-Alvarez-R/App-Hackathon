import banner from "../../assets/img/banner.webp";
import Busqueda from "./Busqueda";
import DescubreIA from "./DescubreIA";

export default function Home() {
  return (
    <div className="w-full flex flex-col mt-[-16px] gap-0">
      <figure className=" overflow-hidden tablet: desktop:h-[80vh]">
        <img
          className="w-full h-full object-cover"
          src={banner}
          alt="Rumbo Nica"
        />
      </figure>
      <div className="w-full p-4 tablet:px-24">
        <DescubreIA />
      </div>
    </div>
  );
}
