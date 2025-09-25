import { useState } from "react";
import perfilicon from "../assets/icons/perfil.png";
import editaricon from "../assets/icons/editar.png";
import logroicon from "../assets/icons/logro.png";
import favoritoicon from "../assets/icons/favoritos.png";
import recomendadoicon from "../assets/icons/recomendado.png";
import cascada from "../assets/medallas/cascada.png";
import extremo from "../assets/medallas/extremo.png";
import laguna from "../assets/medallas/laguna.png";
import reserva from "../assets/medallas/reserva natural.png";
import { useSesionContex } from "../Context/AuthContex";

export default function Perfil() {
  const { sesion } = useSesionContex();
  const name = sesion?.name ?? "No name";
  const [nombreInput, setNombreInput] = useState<string>(name);

  if (!sesion) {
    return <h1>Por favor inicia sesion</h1>;
  }
  const { email, picture } = sesion;
  console.log(picture);
  return (
    <div className="min-h-[90vh] max-h-max w-full p-7 flex flex-col gap-7">
      <div
        id="header-perfil"
        className="h-max w-full p-3.5 bg-green-300 [border:solid_black_2px] rounded-2xl desktop:pl-8"
      >
        <div className="flex flex-col gap-[20px] w-full h-max desktop:flex-row">
          <figure className="h-[90px]">
            <img
              className="h-full rounded-full"
              src={picture ? picture : perfilicon}
              alt=""
              referrerPolicy="no-referrer"
            />
          </figure>
          <div className="w-full grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] overflow-hidden items-center">
            <div className="flex gap-[6%] items-center ">
              <span className="text-black text-3xl font-bold tablet:w-[30%]">
                Hi🖐
              </span>

              <p className="font-nunito font-bold text-[18px] text-sky-900 tablet:hidden desktop:hidden">
                {`${name.slice(0, 16).trimEnd()}...`}
              </p>

              <p className="hidden font-nunito font-bold text-2xl text-sky-900 tablet:block desktop:hidden">
                {`${name.slice(0, 20).trimEnd()}...`}
              </p>

              <p className="hidden font-nunito font-bold text-[26px] text-sky-900 desktop:block">
                {name}
              </p>
            </div>

            <p className="font-nunito text-[14px] tablet:text-[20px] desktop:hidden">
              {email}
            </p>
          </div>
        </div>
        <p className="hidden ml-[100px] font-nunito text-[26px] desktop:block">
          {email}
        </p>
      </div>

      <div
        id="logros-perfil"
        className="flex items-center min-h-max bg-amarillo rounded-2xl p-3.5 relative overflow-hidden [box-shadow:2px_3px_8px_3px_#242424] group"
      >
        <div className="linea-animada"></div>
        <details className="flex flex-col justify-center">
          <summary className="p-2.5 flex items-center gap-1.5">
            <img
              className="w-[8%] tablet:w-[10%] desktop:w-[6%]"
              src={logroicon}
              alt=""
            />
            <span className="tablet:text-[20px]">Logros y medallas</span>
          </summary>
          <div>
            <figure className="w-full">
              <img className="w-[80px]" src={cascada} alt="" />
              <img className="w-[80px]" src={laguna} alt="" />
              <img className="w-[80px]" src={extremo} alt="" />
              <img className="w-[80px]" src={reserva} alt="" />
            </figure>
          </div>
        </details>
      </div>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] desktop:[grid-template-columns:repeat(2,1fr)]">
        <div
          id="favoritos-perfil"
          className="min-h-max bg-beige rounded-2xl p-3.5"
        >
          <div
            id="header-favoritos"
            className="flex items-center p-2.5 gap-1.5"
          >
            <img
              className="w-[8%] tablet:w-[20%] desktop:w-[9%]"
              src={favoritoicon}
              alt=""
            />
            <span className=" tablet:text-[20px]">Lugares Favoritos</span>
          </div>
        </div>

        <div
          id="recomendaciones-perfil"
          className="min-h-max bg-skyBlue rounded-2xl p-3.5"
        >
          <div
            id="header-recomendaciones"
            className="flex items-center p-2.5 gap-1.5"
          >
            <img
              className="p-[3px] w-[8%] tablet:w-[20%] desktop:w-[9%]"
              src={recomendadoicon}
              alt=""
            />
            <span className="tablet:text-[20px]">
              Recomendaciones semanales
            </span>
          </div>
        </div>

        <div
          id="editar-perfil"
          className="min-h-max bg-blue-200 rounded-2xl p-3.5"
        >
          <details className="flex flex-col justify-center ">
            <summary className="p-2.5 flex items-center gap-1.5">
              <img
                className="w-[8%] tablet:w-[20%] desktop:w-[9%]"
                src={editaricon}
                alt=""
              />
              <span className="tablet:text-[20px]">Editar Perfil</span>
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
    </div>
  );
}
