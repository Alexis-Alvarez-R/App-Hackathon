import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderHome } from "../home/components/HeaderHome";
import Home from "../home/components/Home";
import InicioSesion from "../Auth/InicioSesion";
import Registro from "../Auth/Registro";
import { AviturismoPage } from "../aviturismo-page/components/AviturismoPage";
import { AvesDetalles } from "../aviturismo-page/components/AvesDetalles";
import Juegos from "../Juegos/Components/Juegos";
import Perfil from "../Perfil/Components/Perfil";
import PrivateRouter from "./privateRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Inicio sesion" element={<InicioSesion />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Aviturismo" element={<AviturismoPage />} />
        <Route element={<PrivateRouter />}>
          <Route path="/Juegos" element={<Juegos />}></Route>
        </Route>
        <Route path="/Aves Detalles" element={<AvesDetalles />} />
        <Route index element={<Navigate to="/Inicio"></Navigate>}></Route>{" "}
        <Route path="/Perfil" element={<Perfil />} />
        //fixed el not found
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
