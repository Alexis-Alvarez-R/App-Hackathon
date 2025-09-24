import { useState, useEffect } from "react";
import { type Lugar } from "../interfaces/Lugar";
import { turismoAPiFecth } from "../../apis/turismo.api";

export default function useLugares() {
  const [lugares, setLugares] = useState<Lugar[]>([]); // <-- array vacío inicial

  useEffect(() => {
    async function fetchLugares() {
      try {
        const fetching = await fetch(`${turismoAPiFecth}/lugares/getlugares`);
        if (!fetching.ok) return;

        const data = await fetching.json();
        console.log(data);
        setLugares(data);
      } catch (err) {
        console.error(err);
        setLugares([]); // fallback seguro
      }
    }
    fetchLugares();
  }, []);

  return lugares;
}
