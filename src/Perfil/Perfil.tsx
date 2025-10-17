import { useSesionContex } from "../Context/AuthContex";
import TarjetaSaludo from "./Components/TarjetaSaludo";
import Favoritos from "./Components/Favoritos";
import Recomendaciones from "./Components/Recomendaciones";
import EditarPefil from "./Components/EditarPerfil";
import LogrosMedallas from "./Components/LogrosMedallas";
import CerrarSesion from "./Components/CerrarSesion";

export default function Perfil() {
  const { sesion } = useSesionContex();
  const name = sesion?.name ?? "No name";

  if (!sesion) {
    return <h1>Por favor inicia sesion</h1>;
  }
  const { email, picture } = sesion;

  return (
    <div
      id="perfil"
      className="min-h-[90vh] max-h-max w-full p-7 pt-0 flex flex-col gap-7 desktop:p-12 desktop:pt-0"
    >
      <TarjetaSaludo name={name} picture={picture} email={email} />
      <LogrosMedallas />

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] tablet:[grid-template-columns:repeat(2,1fr)]">
        <Favoritos />
        <Recomendaciones />
        <EditarPefil name={name} />
        <CerrarSesion />
      </div>
    </div>
  );
}
