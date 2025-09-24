import { useState } from "react";
import perfilicon from "../assets/icons/perfil.png";
import editaricon from "../assets/icons/editar.png";
import logroicon from "../assets/icons/logro.png";
import favoritoicon from "../assets/icons/favoritos.png";
import recomendadoicon from "../assets/icons/recomendado.png";

export default function Perfil() {
  const [nombreInput, setNombreInput] = useState("Pablo Manuel");
  return (
    <div className="h-max w-full p-7 flex flex-col gap-7">
      <div
        id="header-perfil"
        className="h-max w-full p-3.5 bg-green-300 [border:solid_black_2px] rounded-2xl"
      >
        <div className="flex flex-col gap-[10px] w-full h-max ">
          <figure className="h-[90px]">
            <img className="h-full" src={perfilicon} alt="" />
          </figure>
          <div className="w-full grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
            <div className="flex gap-[6%] items-center">
              <span className="text-black text-3xl">Hi🖐</span>
              <p className="font-nunito font-bold text-2xl text-sky-900">
                Pablo Manuel
              </p>
            </div>
            <p className="font-nunito text-[14px]">Pablomanuel@gmail.com</p>
          </div>
        </div>
      </div>

      <div id="favoritos-perfil" className="h-max bg-beige rounded-2xl p-3.5">
        <div id="header-favoritos" className="flex items-center p-2.5 gap-1.5">
          <img className="w-[8%]" src={favoritoicon} alt="" />
          <span>Lugares Favoritos</span>
        </div>
      </div>

      <div
        id="recomendaciones-perfil"
        className="h-max bg-skyBlue rounded-2xl p-3.5"
      >
        <div
          id="header-recomendaciones"
          className="flex items-center p-2.5 gap-1.5"
        >
          <img className="p-[3px] w-[8%]" src={recomendadoicon} alt="" />
          <span>Recomendaciones semanales</span>
        </div>
      </div>

      <div
        id="logros-perfil"
        className="h-max bg-green-300 rounded-2xl p-3.5 relative overflow-hidden"
      >
        <div className="linea-animada"></div>
        <details className="flex flex-col justify-center">
          <summary className="p-2.5 flex items-center gap-1.5">
            <img className="w-[8%]" src={logroicon} alt="" />
            <span>Logros y medallas</span>
          </summary>
        </details>
      </div>

      <div id="editar-perfil" className="h-max bg-blue-200 rounded-2xl p-3.5">
        <details className="flex flex-col justify-center ">
          <summary className="p-2.5 flex items-center gap-1.5">
            <img className="w-[8%]" src={editaricon} alt="" />
            <span>Editar Perfil</span>
          </summary>
          <div className="mt-3 flex flex-col gap-2.5">
            <div className="bg-amber-50 flex gap-2.5 p-1.5 [border:solid_black_1px] rounded-[12px]">
              <label className="w-[40%] text-[14px] p-1.5" htmlFor="nombre">
                Usuario
              </label>
              <input
                className="w-full  p-1.5 "
                type="text"
                value={nombreInput}
                id="nombre"
                onChange={(e) => {
                  setNombreInput(e.target.value);
                }}
              />
            </div>
            <div className="bg-amber-50 flex gap-2.5 p-1.5 [border:solid_black_1px] rounded-[12px]">
              <label className="w-[40%] text-[14px] p-1.5" htmlFor="nombre">
                Contrasena
              </label>
              <input
                className="w-full  p-1.5 "
                type="text"
                placeholder="***********"
                id="nombre"
              />
            </div>
            <button className="bg-green-300 h-10 rounded-2xl [border:solid_black_1px] cursor-pointer hover:bg-green-400 font-semibold hover:transform-[scale(95%)] transition-all duration-200 ease-in">
              Guardar
            </button>
          </div>
        </details>
      </div>
    </div>
  );
}
