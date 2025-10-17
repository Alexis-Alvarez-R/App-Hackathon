import L from "leaflet";
import { Marker, useMap } from "react-leaflet";
import { type Lugar } from "../interfaces/Lugar";
import LugarPopup from "../../home/components/LugarPopup";
import { type MarkerHouseProp } from "../interfaces/MarkerHouse.types";
import tipoMarker from "../utils/tipoMarker";
import markerShadow from "../../assets/icons/marker-shadow.png";

interface prop {
  lugar: Lugar;
  MarkerProp: MarkerHouseProp;
}

export default function LugarMarker({ lugar, MarkerProp }: prop) {
  const redIcon = new L.Icon({
    iconUrl: tipoMarker(lugar.tipo_id),
    shadowUrl: markerShadow,
    iconSize: [35, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const { selectMarker } = MarkerProp;
  const { lat, lng } = lugar;
  const fnMap = useMap();

  return (
    <Marker
      position={[lat, lng]}
      eventHandlers={{ click: () => selectMarker({ lat, lng }, fnMap) }}
      icon={redIcon}
    >
      <LugarPopup lugar={lugar} />
    </Marker>
  );
}
