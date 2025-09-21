import { useState } from "react";
import type { Ave } from "../interface/Ave";
import { obtenerAve, obtenerAvesPorZona } from "../service";

export const useAve = () => {
  const [aves, setAves] = useState<Ave[]>([]);

  const obtenerAves = async () => {
    const listAves = await obtenerAve();
    setAves(listAves);
  };

  // Obtener aves filtradas por zona
  const filtrarAvesPorZona = async (zonaId: number) => {
    console.log("zona", zonaId);
    const listAves = await obtenerAvesPorZona(zonaId);
    setAves(listAves);
  };

  return {
    //propiedades
    aves,

    //metodos
    obtenerAves,
    filtrarAvesPorZona,
  };
};
