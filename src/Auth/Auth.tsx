import ButtonGoogle from "../CustomsHooks/ButtonGoogle";
import { useRef, type ReactNode } from "react";
import Input from "./Components/Input";
import useEnviarForm from "./hooks/useEnviarForm";
import Notification from "./Components/Notificacion";

export type typeActionQuery = "registro" | "iniciosesion";

interface props {
  title: string;
  textBtn: string;
  children?: ReactNode;
  inputNombre?: boolean;
  endpoint: string;
  accionquery: typeActionQuery;
}

export default function Auth({
  title,
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
      <div className="flex flex-col justify-center items-center h-screen relative">
        <div className="flex flex-col gap-2.5 bg-[#b5d7e7] w-[90%] rounded-3xl p-10 [border:solid_black_1px] absolute top-[50%] [transform:translateY(-50%)] md:w-[60%] lg:w-[35%]">
          <h1 className="[font-size:20px] font-bold">{title}</h1>

          <form className="w-full flex flex-col gap-4" ref={refForm}>
            {inputNombre && (
              <Input type="text" name="nombre" placeholder="Nombre usuario" />
            )}
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Contraseña" />
            <button
              type="button"
              onClick={(event) => enviar(event, refForm.current, accionquery)}
              className="h-12 bg-black text-white font-bold [border-radius:6px]"
            >
              {textBtn}
            </button>
          </form>

          <ButtonGoogle accionquery={accionquery} />

          {children}
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
