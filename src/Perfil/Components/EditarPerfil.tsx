import editaricon from "../../assets/icons/editar.png";
import { useState } from "react";

interface prop {
  name: string;
}

export default function EditarPefil({ name }: prop) {
  const [nombre, setNombre] = useState<string>(name);
  return (
    <div id="editar-perfil" className="min-h-max bg-blue-200 rounded-2xl p-3.5">
      <details className="flex flex-col justify-center ">
        <summary className="flex items-center gap-2.5">
          <img
            className="w-[8%] tablet:w-[20%] tablet:p-2 desktop:w-[9%]"
            src={editaricon}
            alt=""
          />
          <span className="tablet:text-[20px]">Editar Perfil</span>
        </summary>
        <form
          onClick={(event) => {
            event.preventDefault();
          }}
          className="mt-3 flex flex-col gap-2.5"
        >
          <div className="bg-amber-50 flex gap-2.5 p-1.5 [border:solid_black_1px] rounded-[12px]">
            <label
              className="flex items-center w-[40%] text-[14px] p-1.5 overflow-hidden desktop:w-[20%]"
              htmlFor="nombre"
            >
              Usuario
            </label>
            <input
              className="w-[60%] text-[12px] p-1.5 "
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="bg-amber-50 flex gap-2.5 p-1.5 [border:solid_black_1px] rounded-[12px]">
            <label
              className="flex items-center w-[40%] text-[12px] p-1.5 overflow-hidden desktop:w-[20%]"
              htmlFor="password"
            >
              Contrasena
            </label>
            <input
              className="w-[60%] p-1.5 "
              id="password"
              type="password"
              placeholder="***********"
              autoComplete="true"
            />
          </div>
          <button className="bg-green-300 h-10 rounded-2xl [border:solid_black_1px] cursor-pointer hover:bg-green-400 font-semibold hover:transform-[scale(95%)] transition-all duration-200 ease-in">
            Guardar
          </button>
        </form>
      </details>
    </div>
  );
}
