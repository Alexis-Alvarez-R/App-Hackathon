import AppRouter from "./Router/AppRouter";
import "leaflet/dist/leaflet.css";
import { SesionProvider } from "./Context/AuthContex";

import Intro from "./home/Intro/Intro";
import { useEffect, useState } from "react";

export const App = () => {
  const [state, setState] = useState(true);
  const tiempo = 2300;
  useEffect(() => {
    if (sessionStorage.getItem("intro")) setState(false);
    sessionStorage.setItem("intro", "true");

    const timeout = setTimeout(() => {
      setState(false);
    }, tiempo);
    return () => clearTimeout(timeout);
  }, []);

  if (state) {
    return <Intro />;
  }
  return (
    <>
      <SesionProvider>
        <AppRouter />
      </SesionProvider>
    </>
  );
};
