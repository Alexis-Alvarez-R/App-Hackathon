import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";

// Define la interfaz como ya la tienes, es correcta
interface Avistamiento {
  lat: number;
  lng: number;
  intensidad: number;
}

interface Props {
  avistamientos: Avistamiento[];
}

// Este componente es una capa para el mapa de calor
const HeatLayer: React.FC<Props> = ({ avistamientos }) => {
  const map = useMap(); // Obtiene la instancia del mapa actual

  useEffect(() => {
    // Si hay datos, crea o actualiza la capa de calor
    if (avistamientos && avistamientos.length > 0) {
      // Formatea los datos como Leaflet.Heat espera
      const heatData = avistamientos.map((a) => [a.lat, a.lng, a.intensidad]);

      // Asegúrate de que el plugin de heat layer está disponible
      if ((window as any).L.heatLayer) {
        // Elimina cualquier capa de calor existente para evitar duplicados
        map.eachLayer((layer: any) => {
          if (layer instanceof (window as any).L.HeatLayer) {
            map.removeLayer(layer);
          }
        });

        // Crea y añade la nueva capa de calor al mapa
        (window as any).L.heatLayer(heatData, {
          radius: 70,
          blur: 50,
          maxZoom: 17,
          gradient: {
            0.1: "blue",
            0.3: "cyan",
            0.5: "lime",
            0.7: "yellow",
            1.0: "red",
          },
        }).addTo(map);
      }
    }
  }, [avistamientos, map]);

  return null; // Este componente no renderiza nada, solo añade una capa al mapa
};

// Componente principal que contiene el mapa
const HeatMapAves: React.FC<Props> = ({ avistamientos }) => {
  // Coordenadas de Nicaragua para el centro
  const nicaraguaCenter: [number, number] = [12.8654, -85.2072];

  return (
    <MapContainer center={nicaraguaCenter} zoom={7} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatLayer avistamientos={avistamientos} />
    </MapContainer>
  );
};

export default HeatMapAves;
