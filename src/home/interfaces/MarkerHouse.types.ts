import { Map } from "leaflet";

export type MarkerHouseProp = {
  selectMarker: (lat: positionType, fn: fnType) => void;
};

type positionType = {
  lat: number;
  lng: number;
};

type fnType = Map;
