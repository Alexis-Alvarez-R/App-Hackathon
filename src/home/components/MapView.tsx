import { MapContainer, TileLayer } from "react-leaflet";
import useLugares from "../hooks/useLugares";
import LugarMarker from "./LugarMaker";

export default function MapView() {
  const lugares = useLugares();
  return (
    <div className="box-border h-[90vh] p-7 relative ">
      <MapContainer
        center={[12.705148770875159, -85.43151602843885]}
        zoom={6.7}
        className="absolute w-[90%] h-[80%] left-[50%] [transform:translateX(-50%)] rounded-2xl"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Layer 2 */}
        {/* <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri"
        /> */}

        {/* layer 3 */}
        {/* <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution="&copy; CARTO, OpenStreetMap"
        /> */}

        {/* Marcador */}
        {lugares
          ? lugares.map((lugar) => {
              return <LugarMarker key={lugar.id} lugar={lugar} />;
            })
          : null}
      </MapContainer>
    </div>
  );
}
