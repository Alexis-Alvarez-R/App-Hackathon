import { turismoAPiFecth } from "../../../../apis/turismo.api";

export default function useEliminarComentario() {
  async function deleteComentario(id_comentario: number) {
    try {
      const fetching = fetch(
        `${turismoAPiFecth}comentarios/deleteComentario/${id_comentario}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!fetching) throw new Error("Error al eliminar comentario");

      const data = (await fetching).json();
      return true;
    } catch (error) {
      return false;
    }
  }

  return deleteComentario;
}
