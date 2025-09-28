import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-screen mt-30 ">
      <h1 className="w-full text-8xl text-center text-darkGreen font-nunito font-bold  p-2">
        404
      </h1>

      <h2 className="w-full text-center p-2 font-nunito text-6xl font-bold text-darkGreen">
        Page Not Found
      </h2>

      <p className="w-[80%] font-nunito font-black text-center">
        Lo sentimos, página no encontrada Parece que te has perdido. La página
        que estás buscando no existe o{" "}
        <span className="text-regularGreen text-xl"> no esta terminada.</span>{" "}
        Puedes usar la barra de navegación para encontrar lo que buscas o, si lo
        prefieres, volver a la página de inicio para empezar de nuevo.
      </p>

      <Link
        className="bg-darkGreen rounded-full px-2 py-3 mb-20 font-bold font-nunito text-beige text-2xl text-center w-[40%] desktop:w-[15%] hover:text-darkGreen hover:bg-beige hover:scale-105 active:scale-98 transition-all ease-in-out duration-300"
        to={"/"}
      >
        Go Home
      </Link>
    </div>
  );
};
