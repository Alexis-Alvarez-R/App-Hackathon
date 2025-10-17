import volcan from "../../assets/icons/volcan.png";
import reserva from "../../assets/icons/reserva.png";
import extremo from "../../assets/icons/extremo.png";
import laguna from "../../assets/icons/acuatico.png";
import cascada from "../../assets/icons/cascada.png";
import cultural from "../../assets/icons/cultural.png";
import defecto from "../../assets/icons/icon-defecto.png";

const estadoMarker: Record<number, string> = {
  1: reserva,
  2: extremo,
  3: cultural,
  4: laguna,
  5: cascada,
  6: volcan,
};

function tipoMarker(tipo: number) {
  return estadoMarker[tipo] ?? defecto;
}

export default tipoMarker;
