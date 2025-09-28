import { Link } from "react-router-dom";
import Auth from "./Auth";
import { turismoAPiFecth } from "../apis/turismo.api";

export default function InicioSesion() {
  return (
    <Auth
      endpoint={`${turismoAPiFecth}auth/iniciarsesion`}
      textBtn="Iniciar sesion"
      accionquery="iniciosesion"
    >
      <div className="p-4 [font-size:16px] mb:p-6 mb:[font-size:20px]">
        No tienes cuenta?
        <Link to={"/Registro"} className="text-darkGreen">
          Crea una
        </Link>
      </div>
    </Auth>
  );
}
