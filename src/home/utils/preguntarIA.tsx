import { turismoAPiFecth } from "../../apis/turismo.api";

export default async function preguntarIA(mensaje: string) {
  try {
    const fetching = await fetch(`${turismoAPiFecth}lugares/descubreia`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ mensaje }),
    });

    const data = await fetching.json();
    console.log("La repuesta de la ia es...");
    console.log(data);
    return data;
  } catch (error) {
    return false;
  }
}
