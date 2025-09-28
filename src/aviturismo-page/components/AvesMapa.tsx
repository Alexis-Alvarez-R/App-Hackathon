import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Importa el archivo GeoJSON que descargaste y moviste
import nicaraguaGeoJSON from "../../data/geoJSON_NIC_1.json";

// Define las props del componente, que incluirán los datos de conteo
interface Props {
  conteoAvistamientos: { [key: string]: number };
}

const AvesMapa: React.FC<Props> = ({ conteoAvistamientos }) => {
  const nicaraguaCenter: [number, number] = [12.8654, -85.2072];

  // Función para determinar el color de cada departamento
  const getColor = (departamento: string): string => {
    // Obtiene el conteo del departamento, o 0 si no existe
    const conteo = conteoAvistamientos[departamento] || 0;

    // Define tu escala de colores para el mapa.
    // Los valores y los colores deben ajustarse a tus datos reales.
    if (conteo > 40) return "#4f004f";
    if (conteo > 30) return "#800080";
    if (conteo > 20) return "#be29ec";
    if (conteo > 10) return "#da70d6";
    return "#E0BBE4"; // Color base para los departamentos con pocos avistamientos
  };

  // Esta función se llama por cada "feature" (departamento) en el GeoJSON
  const style = (feature: any) => {
    // Asegúrate de que el nombre de la propiedad del departamento
    // coincida con el nombre en tu archivo GeoJSON.
    const nombreDepartamento = feature.properties.name;

    return {
      fillColor: getColor(nombreDepartamento),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };

  // Función para manejar el evento de click en cada polígono
  const onEachFeature = (feature: any, layer: any) => {
    const nombreDepartamento = feature.properties.name;
    const conteo = conteoAvistamientos[nombreDepartamento] || 0;

    // Vincula un popup a cada polígono
    layer.bindPopup(`<b>${nombreDepartamento}</b><br/>Avistamientos: ${conteo}`);
  };

  return (
    <MapContainer
      center={nicaraguaCenter}
      zoom={6.7}
      minZoom={6}
      maxZoom={10}
      style={{ height: "600px", width: "80%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/*
        El componente GeoJSON renderiza los polígonos
        y les aplica el estilo y los popups.
      */}
      <GeoJSON data={nicaraguaGeoJSON as any} style={style} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default AvesMapa;
