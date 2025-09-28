import Auth from "./Auth";
import { turismoAPiFecth } from "../apis/turismo.api";

export default function Registro() {
  return (
    <Auth
      endpoint={`${turismoAPiFecth}auth/registrar`}
      textBtn="Registrate"
      inputNombre={true}
      accionquery="registro"
    ></Auth>
  );
}
