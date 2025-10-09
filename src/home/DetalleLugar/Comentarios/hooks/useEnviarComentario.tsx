import { turismoAPiFecth } from "../../../../apis/turismo.api";

interface parametros {
  id_lugar: number;
  puntuacion: number;
  contenido: string;
}

export default function useEnviarComentario() {
  async function enviarComentario(paramentros: parametros) {
    try {
      const fetching = await fetch(`${turismoAPiFecth}comentarios/comentar`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paramentros),
      });
      if (!fetching.ok) {
        throw new Error("Error al realizar comentario");
      }
      const data = await fetching.json();
      return data;
    } catch (error) {
      console.log("Error al comentar");
      console.error(error);
    }
  }

  return { enviarComentario };
}
