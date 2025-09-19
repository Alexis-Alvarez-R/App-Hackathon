import Router from "./Router/Router";
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
