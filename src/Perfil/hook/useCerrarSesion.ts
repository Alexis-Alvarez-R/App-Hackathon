import { useNavigate } from "react-router-dom";
import { turismoAPiFecth } from "../../apis/turismo.api";
import { useSesionContex } from "../../Context/AuthContex";

export default function useCerrarSesion() {
  const { setSesion } = useSesionContex();
  const navigate = useNavigate();
  async function cerrarSesion() {
    try {
      const fetching = await fetch(`${turismoAPiFecth}auth/cerrarsesion`, {
        credentials: "include",
      });
      if (!fetching.ok) {
        throw new Error("Error al  cerrar la sesion");
      }
      const data = await fetching.json();
      console.log(data);
      if (data.isclearCookie) {
        setSesion(undefined);
        navigate("/");
      }
    } catch (error) {}
  }
  return cerrarSesion;
}
