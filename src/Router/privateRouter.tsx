import { Navigate, Outlet } from "react-router-dom";
import { useSesionContex } from "../Context/AuthContex";

function nav() {
  return <Navigate to={"/Inicio sesion"} replace />;
}

export default function PrivateRouter() {
  const { sesion } = useSesionContex();
  return <>{sesion ? <Outlet /> : nav()}</>;
}
