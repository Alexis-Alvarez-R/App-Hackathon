import { turismoAPiFecth } from "../../apis/turismo.api";

export default async function preguntarIA(mensaje: string) {
  try {
    console.log("acaaaa");
    const fetching = await fetch(`${turismoAPiFecth}lugares/descubreia`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mensaje }),
    });

    if (!fetching.ok) throw new Error("Error al obtener repuesta ia");
    const data = await fetching.json();
    return data;
  } catch (error) {
    return {
      respuesta:
        "Lo siento como modelo de ia fui entrenado para recomendarte solo lugares",
    };
  }
}
