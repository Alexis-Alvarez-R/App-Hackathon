import type { ReservaNatural } from "../interface/ReservaNatural";
import { ReservasCard } from "./ReservasCard";

interface Props {
  reservasNaturales: ReservaNatural[];
}

export const ReservasGrid = ({ reservasNaturales }: Props) => {
  return (
    <div className="w-screen  flex flex-col desktop:flex-row  gap-6  p-4 bg-regularGreen">
      {reservasNaturales.map((reserva) => (
        <ReservasCard key={reserva.reservas_naturales.reserva_id} reserva={reserva}></ReservasCard>
      ))}
    </div>
  );
};
