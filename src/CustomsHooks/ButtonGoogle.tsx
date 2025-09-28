import { useEffect, useRef } from "react";
import type { typeActionQuery } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";
import { useSesionContex } from "../Context/AuthContex";
import { turismoAPiFecth } from "../apis/turismo.api";

declare global {
  interface Window {
    google: any;
  }
}

type props = {
  accionquery: typeActionQuery;
  onSuccess?: (credential: string) => void;
};

export default function ButtonGoogle({ accionquery }: props) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const { setSesion } = useSesionContex();
  const nav = useNavigate();

  useEffect(() => {
    const renderButton = () => {
      if (window.google && buttonRef.current) {
        window.google.accounts.id.initialize({
          client_id:
            "492388293091-clirrcpj162pl46g9ao53hft4uoa2qh5.apps.googleusercontent.com",
          callback: async (response: any) => {
            try {
              const res = await fetch(
                `${turismoAPiFecth}auth/google/callback?accion=${accionquery}`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ credential: response.credential }),
                  credentials: "include",
                }
              );

              if (res.ok) {
                console.log("Login exitoso");
                const data = await res.json();
                console.log(data);
                setSesion(data);
                nav("/", { replace: true });
              } else {
                setSesion(undefined);
                console.error("Token inválido o error en backend");
              }
            } catch (error) {
              setSesion(undefined);
            }
          },
        });

        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",
          type: "standard",
          text: "continue_with",
        });
        window.google.accounts.id.disableAutoSelect();
      }
    };

    const scriptExists = document.getElementById("google-client-script");

    if (!scriptExists) {
      const script = document.createElement("script");
      script.id = "google-client-script";
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = renderButton;
      document.body.appendChild(script);
    } else {
      renderButton();
    }
  }, [accionquery, nav]);

  return <div ref={buttonRef}></div>;
}
