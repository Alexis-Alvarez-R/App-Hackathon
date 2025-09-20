import { Popup } from "react-leaflet";

interface prop {
  nombre: string;
  img: string;
  descripcion: string;
  descripcion_detalle: string;
}

export default function LugarPopup({
  nombre,
  img,
  descripcion,
  descripcion_detalle,
}: prop) {
  return (
    <Popup className="w-[300px]">
      <h1 className="text-2xl font-semibold">{nombre}</h1>
      <div className="[border-radius:12px] overflow-hidden">
        <img src={img} alt="" />
      </div>
      <p>{descripcion.split(" ").slice(0, 20).join(" ")}</p>
    </Popup>
  );
}
