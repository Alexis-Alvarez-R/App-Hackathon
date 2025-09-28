import Map from "./Map";
import banner from "../../assets/img/banner-rn.webp";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-18 mt-[-16px]">
      <figure className="w-full [border-radius:0_0_40px_40px] overflow-hidden tablet:[border-radius:0_0_80px_80px]">
        <img className="w-full" src={banner} alt="Rumbo Nica" />
      </figure>

      <Map />
    </div>
  );
}
