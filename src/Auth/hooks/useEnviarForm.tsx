import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSesionContex } from "../../Context/AuthContex";

export default function useEnviarForm(endpoint: string) {
  const nav = useNavigate();
  const [notification, setNotification] = useState<string | null>(null);
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
          setNotification(data.mensaje);
          return;
        }
        setSesion(data);
        console.log("yo redirije");
        nav("/", { replace: true });
      } else {
        const data = await fetching.json();
        setSesion(undefined);
        setNotification(data.mensaje); // <-- guardamos el mensaje de error
      }
    } catch (error) {
      setSesion(undefined);
      setNotification("Error de red. Intenta de nuevo");
    }
  };

  return { enviar, notification, setNotification };
}
