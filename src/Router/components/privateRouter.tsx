import { Navigate, Outlet } from "react-router-dom";
import { useSesionContex } from "../../Context/AuthContex";

function nav() {
  return <Navigate to={"/Inicio-sesion"} replace />;
}

export default function PrivateRouter() {
  const { sesion } = useSesionContex();

  // if (sesion === undefined) return <div>Cargando...</div>;
  console.log("la sesion desde privateroute");
  console.log(sesion);
  return <>{sesion ? <Outlet /> : nav()}</>;
}
