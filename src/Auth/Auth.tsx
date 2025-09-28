import ButtonGoogle from "../CustomsHooks/ButtonGoogle";
import { useRef, type ReactNode } from "react";
import Input from "./Components/Input";
import useEnviarForm from "./hooks/useEnviarForm";
import Notification from "./Components/Notificacion";
import letra from "../assets/img/letra.png";
import pefil from "../assets/icons/perfil2.png";

import user from "../assets/icons/user.png";
import correo from "../assets/icons/correo-electronico.png";
import candado from "../assets/icons/candado.png";

export type typeActionQuery = "registro" | "iniciosesion";

interface props {
  textBtn: string;
  children?: ReactNode;
  inputNombre?: boolean;
  endpoint: string;
  accionquery: typeActionQuery;
}

export default function Auth({
  textBtn,
  inputNombre,
  endpoint,
  children,
  accionquery,
}: props) {
  const refForm = useRef<HTMLFormElement>(null);
  const { enviar, notification, setNotification } = useEnviarForm(endpoint);

  return (
    <>
      <div className="p-6 pt-0 flex flex-col gap-4 justify-center items-start h-full tablet:items-center desktop:items-start desktop:p-10 desktop:pl-[10%]  desktop:flex-row">
        <div className="order-2 flex flex-col gap-2.5 bg-[#ebebeb7a] w-full rounded-3xl p-4 pt-[10px] [border:solid_black_1px] tablet:w-[65%] desktop:order-1 desktop:w-[30%]">
          <figure className="w-full h-[100px] flex justify-center items-center">
            <img
              src={pefil}
              alt=""
              className="h-full rounded-full p-2 border-regularGreen border-4"
            />
          </figure>

          <form className="w-full flex flex-col gap-4" ref={refForm}>
            {inputNombre && (
              <Input
                type="text"
                name="nombre"
                placeholder="Nombre usuario"
                icon={user}
              />
            )}
            <Input
              type="email"
              name="email"
              placeholder="Email"
              icon={correo}
            />
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              icon={candado}
            />
            <button
              type="button"
              onClick={(event) => enviar(event, refForm.current, accionquery)}
              className="h-12 bg-regularGreen text-white font-bold [border-radius:6px] hover:bg-darkGreen transition-all duration-150 ease-out"
            >
              {textBtn}
            </button>
          </form>

          <ButtonGoogle accionquery={accionquery} />

          {children}
        </div>
        <div
          id="animacionEntradaLetraLogo"
          className="flex flex-col items-center p-4 order-1 w-full h-full desktop:block desktop:p-7 desktop:relative desktop:pt-0 desktop:w-[70%] desktop:h-full desktop:order-2"
        >
          <figure className="w-[60%] desktop:w-[80%]">
            <img src={letra} alt="" className="w-full" />
          </figure>
          <p className="text-2xl text-end font-nunito font-bold desktop:text-5xl desktop:absolute desktop:bottom-[-20%] desktop:right-[15%]">
            Welcome.
          </p>
        </div>

        {/* Renderizamos la notificación si hay mensaje */}
        {notification && (
          <Notification
            mensaje={notification}
            onClose={() => setNotification(null)}
          />
        )}
      </div>
    </>
  );
}
