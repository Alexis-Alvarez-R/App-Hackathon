import {
  createContext,
  useContext,
  useEffect,
  useState,
  type JSX,
} from "react";
import { type Sesion, type SesionContextType } from "../Auth/interface/iAuth";

interface prop {
  children: JSX.Element | JSX.Element[];
}

const SesionContext = createContext<SesionContextType>({} as SesionContextType);

export function SesionProvider({ children }: prop) {
  const [sesion, setSesion] = useState<Sesion | undefined>(undefined);
  useEffect(() => {
    async function verificarSesion() {
      try {
        const fetching = await fetch(
          "http://localhost:3000/auth/verificarsesion",
          {
            credentials: "include",
          }
        );
        if (fetching.ok) {
          const data = await fetching.json();
          setSesion({
            nombre: data.nombre,
            email: data.email,
          });

          console.log("si tod bien");
          console.log(data);
          return;
        }
        setSesion(undefined);
        console.log(sesion);
      } catch (error) {
        setSesion(undefined);
      }
    }
    verificarSesion();
  }, []);

  return (
    <SesionContext.Provider value={{ sesion, setSesion }}>
      {children}
    </SesionContext.Provider>
  );
}

export function useSesionContex() {
  return useContext(SesionContext);
}
