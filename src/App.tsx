import AppRouter from "./Router/AppRouter";
import "leaflet/dist/leaflet.css";
import { SesionProvider } from "./Context/AuthContex";

export const App = () => {
  return (
    <>
      <SesionProvider>
        <AppRouter />
      </SesionProvider>
    </>
  );
};
