import { useRef } from "react";
import enviar from "../../assets/icons/enviar.png";
import preguntarIA from "../utils/preguntarIA";

export default function DescubreIA() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="w-full bg-[#e2e2e2] flex flex-col gap-2 p-4 rounded-2xl [box-shadow:1px_1px_2px_1px_black]">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-nunito text-[18px] font-semibold tablet:text-2xl">
            Descubre con IA
          </h1>

          <div className="p-1 flex gap-1 w-full h-10 bg-white rounded-[6px]">
            <input type="text" className="w-full" ref={inputRef} />

            <button
              className="w-[10%] flex justify-end"
              onClick={async () => {
                if (!inputRef.current?.value) {
                  return;
                }
                const pregunta = inputRef.current?.value;
                const repuesta = await preguntarIA(pregunta);
              }}
            >
              <figure className="flex items-center">
                <img src={enviar} alt="" className="h-[70%]" />
              </figure>
            </button>
          </div>
        </div>
        <div className="min-h-14 bg-white rounded-[6px] [border:solid_black_1px]"></div>
      </div>
      <div className="w-full h-[30]">
        <figure className="">
          <img
            // src="https://njdfgyfdqnmxhevgeoai.supabase.co/storage/v1/object/public/imagenes_lugares/el%20viejo%202.webp"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
}
