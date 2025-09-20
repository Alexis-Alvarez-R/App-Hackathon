import { Marker } from "react-leaflet";
import { type Lugar } from "../interfaces/Lugar";
import LugarPopup from "./LugarPopup";

interface prop {
  lugar: Lugar;
}

export default function LugarMarker({ lugar }: prop) {
  return (
    <Marker position={[lugar.lat, lugar.lng]}>
      <LugarPopup
        nombre={lugar.nombre}
        img={lugar.img}
        descripcion={lugar.descripcion}
        descripcion_detalle={lugar.descripcion_detalle}
      />
    </Marker>
  );
}
