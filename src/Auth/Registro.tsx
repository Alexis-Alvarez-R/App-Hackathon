import Auth from "./Auth";
import { turismoAPiFecth } from "../apis/turismo.api";

export default function Registro() {
  return (
    <Auth
      endpoint={`${turismoAPiFecth}auth/registrar`}
      title="Crea una cuenta"
      textBtn="Continuar con correo electronico"
      inputNombre={true}
      accionquery="registro"
    ></Auth>
  );
}
