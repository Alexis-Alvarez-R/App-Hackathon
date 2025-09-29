import { useEffect, useState } from "react";

interface prop {
  mensaje: string;
  isValido: boolean;
  onClose: () => void;
}

export default function Notification({ mensaje, onClose, isValido }: prop) {
  const [state, setState] = useState<boolean>(true);
  const tiempo = 5000;
  useEffect(() => {
    console.log("se puso la noti");
    const timeOut = setTimeout(() => {
      setState(false);
    }, tiempo);

    return () => clearTimeout(timeOut);
  }, []);
  if (!state) return null;
  return (
    <div
      id="notificacion"
      className="w-full h-full bg-[#63636342] rounded-4xl flex justify-center items-center fixed top-0 left-[50%] [backdrop-filter:blur(10px)]"
    >
      <div
        className={`${
          isValido ? "bg-regularGreen" : "bg-red-500"
        } z-[90] w-[70%] p-4 text-white rounded-2xl cursor-pointer text-[18px] font-nunito font-bold flex justify-center items-center tablet:p-8 tablet:text-2xl desktop:w-[40%]`}
        onClick={onClose}
      >
        {mensaje}
      </div>
    </div>
  );
}
