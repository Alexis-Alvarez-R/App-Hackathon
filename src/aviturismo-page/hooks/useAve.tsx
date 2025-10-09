import { useState } from "react";
import type { Ave } from "../interface/Ave";
import { obtenerAve, obtenerAvesPorZona, obtenerReservasPorAve } from "../service";
import type { ReservaNatural } from "../interface/ReservaNatural";

export const useAve = () => {
  const [aves, setAves] = useState<Ave[]>([]);
  const [reservas, setReservas] = useState<ReservaNatural[]>([]);
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

  //obtener reservas  por ave
  const obtenerReservas = async (aveId: number) => {
    setIsLoading(true);
    try {
      const listReservas = await obtenerReservasPorAve(aveId);
      setReservas(listReservas);
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
    reservas,

    //metodos
    obtenerAves,
    filtrarAvesPorZona,
    obtenerReservas,
  };
};
