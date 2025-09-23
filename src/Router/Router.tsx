import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderHome } from "../home/components/HeaderHome";
import Home from "../home/components/Home";
import InicioSesion from "../Auth/InicioSesion";
import Registro from "../Auth/Registro";
import { AviturismoPage } from "../aviturismo-page/components/AviturismoPage";
import { AvesDetalles } from "../aviturismo-page/components/AvesDetalles";
import Juegos from "../Juegos/Components/Juegos";
import Perfil from "../Perfil/Components/Perfil";
import PrivateRouter from "./components/privateRouter";
import { FooterHome } from "../home/components/FooterHome";
import DetalleLugar from "../home/components/DetalleLugar";
import { NotFound } from "./components/NotFound";
import { PalabrasGame } from "../Juegos/Components/PalabrasGame";

export default function Router() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Routes>
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Inicio-sesion" element={<InicioSesion />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Aviturismo" element={<AviturismoPage />} />
        <Route element={<PrivateRouter />}>
          <Route path="/Juegos" element={<Juegos />}>
            <Route path="ScrambleWords" element={<PalabrasGame></PalabrasGame>}></Route>
          </Route>
        </Route>
        <Route path="/Aves-Detalles" element={<AvesDetalles />} />
        <Route path="/Detallelugar/:lugar" element={<DetalleLugar />} />
        <Route index element={<Navigate to="/Inicio"></Navigate>}></Route> <Route path="/Perfil" element={<Perfil />} />
        //fixed el not found
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <FooterHome></FooterHome>
    </BrowserRouter>
  );
}
