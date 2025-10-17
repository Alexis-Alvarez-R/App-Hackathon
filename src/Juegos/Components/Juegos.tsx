import { arrayJuegos } from "../data/array-juegos";
import { JuegosCard } from "./JuegosCard";

export default function Juegos() {
  return (
    <>
      <div className="text-center p-4 bg-regularGreen">
        <h1 className="text-4xl font-bold text-black mb-2">Modulo Educativo</h1>
        <p className="text-gray-600 font-bold">
          ¡Divierte en esta experiencia gamificada para aprender sobre conservacion y buenas practicas!
        </p>
      </div>
      <div className="w-screen grid  [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8  p-4 bg-regularGreen">
        <JuegosCard data={arrayJuegos}></JuegosCard>
      </div>
    </>
  );
}
