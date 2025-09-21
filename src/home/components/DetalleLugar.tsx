import { useLocation, useParams } from "react-router-dom";

export default function DetalleLugar() {
  const { lugar: lugarParams } = useParams();
  const location = useLocation();
  const { lugar } = location.state;

  return (
    <div className="mt-14 min-h-dvh">
      <h2 className="text-red-500 text-5xl">En construccion ... </h2>
      <h1 className="text-5xl text-center font-nunito font-bold">
        {lugarParams}
      </h1>
      <figure className="p-4 flex justify-center overflow-hidden">
        <img
          src={lugar.img}
          alt={`Imagen ${lugar.nombre}`}
          className="w-[70%] h-[100vh] object-cover rounded-2xl"
        />
      </figure>
    </div>
  );
}
