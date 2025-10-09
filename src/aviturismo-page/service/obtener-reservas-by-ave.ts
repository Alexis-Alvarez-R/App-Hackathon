import { turismoApi } from "../../apis/turismo.api";
import type { ReservaNatural } from "../interface/ReservaNatural";

export const obtenerReservasPorAve = async (aveId: number): Promise<ReservaNatural[]> => {
  const response = await turismoApi.get<ReservaNatural[]>(`reservas/ave/${aveId}`);

  return response.data;
};
