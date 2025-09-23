import iconRed from "../../assets/icons/marker-icon-red.png";
import iconGreen from "../../assets/icons/marker-icon-green.png";
import iconBlue from "../../assets/icons/marker-icon-blue.png";
import iconBlack from "../../assets/icons/marker-icon-black.png";
import iconGold from "../../assets/icons/marker-icon-gold.png";
import iconGrey from "../../assets/icons/marker-icon-grey.png";
import iconOrange from "../../assets/icons/marker-icon-orange.png";
import iconViolet from "../../assets/icons/marker-icon-violet.png";
import iconYellow from "../../assets/icons/marker-icon-yellow.png";

const estadoMarker: Record<number, string> = {
  1: iconGreen,
  2: iconOrange,
  3: iconViolet,
  4: iconBlue,
  5: iconGold,
  6: iconRed,
  7: iconBlack,
};

function tipoMarker(tipo: number) {
  return estadoMarker[tipo] ?? iconGrey;
}

export default tipoMarker;
