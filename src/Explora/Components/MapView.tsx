//         {/* Layer 2 */}
//         {/* <TileLayer
//           url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
//           attribution="Tiles &copy; Esri"
//         /> */}

//         {/* layer 3 */}
//         {/* <TileLayer
//           url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
//           attribution="&copy; CARTO, OpenStreetMap"
//         /> */}

import { Map } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import LugarMarker from "./LugarMaker";
import { useLugaresContext } from "../../Context/LugaresContext";

export default function MapView() {
  const lugares = useLugaresContext();
  function centerMarker(position: { lat: number; lng: number }, fnMap: Map) {
    fnMap.flyTo({ lat: position.lat, lng: position.lng });
  }

  return (
    <div className="box-border h-[70vh] w-full relative mb-8">
      <MapContainer
        center={[12.705148770875159, -85.43151602843885]}
        zoom={6.7}
        minZoom={6}
        maxZoom={10}
        className="absolute w-[85%] h-[100%] left-[50%] top-[50%] [transform:translate(-50%,_-50%)] rounded-2xl desktop:w-[80%] desktop:h-[95%]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {lugares.length == 0
          ? null
          : lugares.map((lugar) => (
              <LugarMarker
                key={lugar.id}
                lugar={lugar}
                MarkerProp={{ selectMarker: centerMarker }}
              />
            ))}
      </MapContainer>
    </div>
  );
}
