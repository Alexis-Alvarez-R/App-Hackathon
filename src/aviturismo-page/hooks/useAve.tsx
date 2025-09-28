import { useState } from "react";
import type { Ave } from "../interface/Ave";
import { obtenerAve, obtenerAvesPorZona } from "../service";

export const useAve = () => {
  const [aves, setAves] = useState<Ave[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //obtener todas las aves
  const obtenerAves = async () => {
    setIsLoading(true);
    try {
      const listAves = await obtenerAve();
      setAves(listAves);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //obtener aves filtradas por zona
  const filtrarAvesPorZona = async (zonaId: number) => {
    setIsLoading(true);
    try {
      const listAves = await obtenerAvesPorZona(zonaId);
      setAves(listAves);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    //propiedades
    aves,
    isLoading,

    //metodos
    obtenerAves,
    filtrarAvesPorZona,
  };
};
