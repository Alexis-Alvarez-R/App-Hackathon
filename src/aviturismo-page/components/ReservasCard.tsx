import type { ReservaNatural } from "../interface/ReservaNatural";
interface Props {
  reserva: ReservaNatural;
}

export const ReservasCard = ({ reserva }: Props) => {
  return (
    <div className=" bg-lightGreen w-full desktop:w-[30%] flex flex-col gap-5 rounded-2xl p-2 shadow-lg hover:scale-105 transition-transform duration-400 ease-in-out ">
      <div className="flex justify-center items-center w-full h-[250px] ">
        <img
          className="w-full h-full object-cover object-top-left rounded-2xl  "
          src={reserva.reservas_naturales.url_img}
          alt={reserva.reservas_naturales.nombre}
        />
      </div>
      <h2 className="w-full text-center p-2 rounded-2xl  text-[20px] bg-beige font-bold font-nunito capitalize">
        {reserva.reservas_naturales.nombre}
      </h2>
    </div>
  );
};
