import Map from "./Map";
import banner from "../../assets/img/banner.webp";

export default function Home() {
  return (
    <div className="w-full flex flex-col mt-[-16px] gap-12 tablet:gap-20 desktop:gap-28">
      <figure className=" overflow-hidden tablet: desktop:h-[80vh]">
        <img
          className="w-full h-full object-cover"
          src={banner}
          alt="Rumbo Nica"
        />
      </figure>

      <Map />
    </div>
  );
}
