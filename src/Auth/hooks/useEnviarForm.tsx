import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSesionContex } from "../../Context/AuthContex";

export default function useEnviarForm(endpoint: string) {
  const nav = useNavigate();
  const [notification, setNotification] = useState<{
    mensaje: string;
    isValido: boolean;
  } | null>(null);
  const { setSesion } = useSesionContex();

  const enviar = async (
    event: React.MouseEvent,
    formulario: HTMLFormElement | null,
    accion: string
  ) => {
    event.preventDefault();
    if (!formulario) return;

    const formData = Object.fromEntries(new FormData(formulario).entries());

    try {
      const fetching = await fetch(`${endpoint}`, {
        method: "post",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (fetching.ok) {
        const data = await fetching.json();
        console.log(accion);
        if (accion == "registro") {
          setNotification({ mensaje: data.mensaje, isValido: true });
          return;
        }
        console.log(data);
        setSesion(data);
        nav("/", { replace: true });
      } else {
        const data = await fetching.json();
        setSesion(undefined);
        setNotification({ mensaje: data.mensaje, isValido: false }); // <-- guardamos el mensaje de error
        console.log(data);
      }
    } catch (error) {
      setSesion(undefined);
      setNotification({
        mensaje: "Error de red. Intenta de nuevo",
        isValido: false,
      });
      console.log(error);
      alert("no se puede");
    }
  };

  return { enviar, notification, setNotification };
}
