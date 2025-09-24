import { useEffect, useState } from "react";
import { turismoAPiFecth } from "../../../apis/turismo.api";

export default function useImagenesLugar(id: number) {
  const [imagenes, setImagenes] = useState<string[] | null>(null);

  useEffect(() => {
    async function fetchImagenes() {
      try {
        const fetching = await fetch(
          `${turismoAPiFecth}/lugares/getimageneslugar?id=${id}`,
          {
            credentials: "include",
          }
        );
        if (!fetching.ok) throw new Error("Erro al obtener las imagenes");
        const data: string[] = await fetching.json();
        setImagenes(data);
      } catch (error) {
        setImagenes(null);
      }
    }
    fetchImagenes();
  }, []);

  return imagenes;
}
