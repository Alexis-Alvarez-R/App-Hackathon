import { Link } from "react-router-dom";

import type { Juegos } from "../interfaces/juegos";

interface Props {
  data: Juegos[];
}

export const JuegosCard = ({ data }: Props) => {
  return (
    <>
      {data.map((data, index) => (
        <Link
          to={data.nombre}
          key={index}
          className="flex flex-col gap-4 bg-lightGray rounded-2xl p-3 hover:scale-96 transition-transform ease-in-out duration-400"
        >
          <figure>
            <img className="w-full h-[350px] object-contain rounded-2xl " src={data.urlImg} alt={data.nombre} />
          </figure>

          <div>
            <p className="border-2 text-2xl text-center text-lightGray rounded-xl font-nunito font-bold p-2 bg-regularGreen ">
              {data.nombre}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};
