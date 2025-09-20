import { useState, useEffect } from "react";
import { type Lugar } from "../interfaces/Lugar";
import { turismoAPiFecth } from "../../apis/turismo.api";

export default function useLugares() {
  const [lugares, setLugares] = useState<Lugar[] | undefined>();

  useEffect(() => {
    async function fetchLugares() {
      const fetching = await fetch(`${turismoAPiFecth}/lugares/getlugares`);

      if (!fetching.ok) {
        return;
      }

      const data = await fetching.json();
      console.log(data);
      setLugares(data);
    }
    fetchLugares();
  }, []);

  return lugares;
}
