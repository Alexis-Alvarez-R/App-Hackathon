import { useState } from "react";
import type { ReservaNatural } from "../interface/ReservaNatural";
interface Props {
  reserva: ReservaNatural;
}

export const ReservasCard = ({ reserva }: Props) => {
  const [mostrar, setMostrar] = useState(false);

  const handleClickMostrar = () => {
    setMostrar(true);
  };
  return (
    <>
      <div
        className=" bg-lightGreen w-full desktop:w-[30%] flex flex-col gap-5 rounded-2xl p-2 shadow-lg hover:scale-103 transition-transform duration-400 ease-in-out cursor-pointer"
        onClick={handleClickMostrar}
      >
        <div className="flex justify-center items-center w-full h-[250px] ">
          <img
            className="w-full h-full object-cover object-top-left rounded-2xl  "
            src={reserva.reservas_naturales.url_img}
            alt={reserva.reservas_naturales.nombre}
          />
        </div>
        <h2 className="w-full text-center p-2 rounded-2xl  text-[20px] bg-regularGreen font-bold font-nunito capitalize">
          {reserva.reservas_naturales.nombre}
        </h2>
      </div>

      {/* Modal */}
      {mostrar && (
        <div
          onClick={() => setMostrar(false)} // Cerrar al hacer click fuera
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click dentro
            className="bg-beige rounded-2xl p-6 w-full desktop:w-[70%] shadow-lg"
          >
            <h2 className="text-2xl font-bold font-nunito mb-2">{reserva.reservas_naturales.nombre}</h2>
            <p className="text-gray-600 mb-4 font-nunito text-sm">{reserva.reservas_naturales.descripcion}</p>

            <button
              onClick={() => setMostrar(false)}
              className="mt-4 bg-darkGreen text-white px-4 py-2 rounded-xl cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
