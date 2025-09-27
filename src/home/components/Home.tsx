import Map from "./Map";
import banner from "../../assets/img/banner-rn.webp";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-18">
      <figure className="w-full]">
        <img className="w-full" src={banner} alt="Rumbo Nica" />
      </figure>

      <Map />
    </div>
  );
}
