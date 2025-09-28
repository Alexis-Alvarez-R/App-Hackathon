import { arrayJuegos } from "../data/array-juegos";
import { JuegosCard } from "./JuegosCard";

export default function Juegos() {
  return (
    <>
      <div className="text-center mb-8">
        <h1
          className="text-4xl font-bold bg-clip-text text-transparent mb-2"
          style={{ backgroundImage: `linear-gradient(to right, #20887e, #2ec4b6)` }}
        >
          Modulo Educativo
        </h1>
        <p className="text-gray-600 font-bold">
          ¡Divierte en esta experiencia gamificada para aprender sobre conservacion y buenas practicas!
        </p>
      </div>
      <div className="w-screen grid  [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8  p-4 bg-gradient-to-r from-ocean via-lightGray to-ocean">
        <JuegosCard data={arrayJuegos}></JuegosCard>
      </div>
    </>
  );
}
