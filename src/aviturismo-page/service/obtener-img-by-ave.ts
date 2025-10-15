import { turismoApi } from "../../apis/turismo.api";

export const obtenerImgPorAve = async (aveId: number): Promise<string[]> => {
  const response = await turismoApi.get<string[]>(`/aves/imagenes/${aveId}`);

  console.log("ZonaId recibido:", aveId);

  return response.data;
};
