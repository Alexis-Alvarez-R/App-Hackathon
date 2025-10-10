import { turismoAPiFecth } from "../../../../apis/turismo.api";

export default function useEnviarComentarioEditado() {
  console.log("Enviando comentario a editar");

  async function enviarComentario(
    id_comentario: number,
    contenidoNuevo: string
  ) {
    try {
      const fetching = await fetch(
        `${turismoAPiFecth}comentarios/editarcomentario`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          method: "PATCH",
          body: JSON.stringify({ id_comentario, contenidoNuevo }),
        }
      );

      if (!fetching.ok) throw new Error("Error al editar el comentario");

      const data = await fetching.json();
      return true;
    } catch (error) {
      return false;
    }
  }

  return {
    enviarComentario,
  };
}
