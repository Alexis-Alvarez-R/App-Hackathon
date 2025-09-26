import { useRef } from "react";
import TarjetaMedalla from "./TarjetaMedalla";
import logroicon from "../../assets/icons/logro.png";
import cascada from "../../assets/medallas/cascada.png";
import extremo from "../../assets/medallas/extremo.png";
import laguna from "../../assets/medallas/laguna.png";
import reserva from "../../assets/medallas/reserva natural.png";

export default function LogrosMedallas() {
  const $detailLogros = useRef<HTMLDetailsElement | null>(null);
  const $divLogros = useRef<HTMLDivElement | null>(null);
  function toggleBg(): void {
    if (!$detailLogros.current || !$divLogros.current) return;
    console.log("se hizo");
    $divLogros.current.classList.remove("bg-amarillo", "bg-naranja");
    const cambiocolor = $detailLogros.current.hasAttribute("open")
      ? "bg-amarillo"
      : "bg-naranja";
    $divLogros.current.classList.add(cambiocolor);
  }
  return (
    <div
      ref={$divLogros}
      id="logros-perfil"
      className="bg-amarillo transition-all duration-500 ease-in flex items-center min-h-max rounded-2xl relative overflow-hidden [box-shadow:2px_3px_8px_3px_#242424]"
    >
      <div className="linea-animada"></div>
      <details
        ref={$detailLogros}
        className="flex flex-col justify-center w-full desktop:hidden"
      >
        <summary
          onClick={toggleBg}
          className="p-2.5 flex items-center gap-1.5 [border:solid_1px_black] rounded-[12px] desktop:justify-center"
        >
          <img
            className="w-[8%] tablet:w-[10%] desktop:w-[6%]"
            src={logroicon}
            alt=""
          />
          <span className="tablet:text-[20px]">Logros y medallas</span>
        </summary>
        <div className="flex flex-col gap-2 desktop:grid desktop:[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] desktop:gap-4 desktop:pl-3 pr-3">
          <TarjetaMedalla
            img={cascada}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
          <TarjetaMedalla
            img={extremo}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
          <TarjetaMedalla
            img={laguna}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
          <TarjetaMedalla
            img={reserva}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
        </div>
      </details>

      <div className="hidden flex-col justify-center w-full desktop:flex">
        <div className="p-2.5 flex items-center gap-1.5 [border:solid_1px_black] rounded-[12px] desktop:justify-center">
          <img
            className="w-[8%] tablet:w-[10%] desktop:w-[6%]"
            src={logroicon}
            alt=""
          />
          <span className="tablet:text-[20px]">Logros y medallas</span>
        </div>
        <div className="flex flex-col gap-2 desktop:grid desktop:[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] desktop:gap-4 desktop:p-2">
          <TarjetaMedalla
            img={cascada}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
          <TarjetaMedalla
            img={extremo}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
          <TarjetaMedalla
            img={laguna}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
          <TarjetaMedalla
            img={reserva}
            titulo={"Medalla Top"}
            texto={
              "Medalla en concepto de no se que pronto veremos bla bla bla"
            }
          />
        </div>
      </div>
    </div>
  );
}
