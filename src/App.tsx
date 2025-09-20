import Router from "./Router/Router";
import "leaflet/dist/leaflet.css";
import { SesionProvider } from "./Context/AuthContex";
export const App = () => {
  return (
    <>
      <SesionProvider>
        <Router />
      </SesionProvider>
    </>
  );
};
