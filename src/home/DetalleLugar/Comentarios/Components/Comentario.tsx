import Perfil from "../../../../assets/icons/perfil.png";

interface prop {
  picture: string;
  usuarioNombre: string;
  fecha: string;
  puntuacion: number;
  contenido: string;
  esComentarioUsuario?: boolean;
}

export default function Comentario({
  picture,
  usuarioNombre,
  fecha,
  puntuacion,
  contenido,
  esComentarioUsuario = false,
}: prop) {
  if (!picture) {
    picture = Perfil;
  }

  function tiempoRelativo(fecha: string | Date) {
    const ahora = new Date();
    const fechaObj = new Date(fecha);
    const diff = ahora.getTime() - fechaObj.getTime();

    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const años = Math.floor(dias / 365);

    if (segundos < 60) return "Hace unos segundos";
    if (minutos < 60) return `Hace ${minutos} minuto${minutos > 1 ? "s" : ""}`;
    if (horas < 24) return `Hace ${horas} hora${horas > 1 ? "s" : ""}`;
    if (dias < 30) return `Hace ${dias} día${dias > 1 ? "s" : ""}`;
    if (meses < 12) return `Hace ${meses} mes${meses > 1 ? "es" : ""}`;
    return `Hace ${años} año${años > 1 ? "s" : ""}`;
  }

  const estrellasArr = [1, 2, 3, 4, 5];
  return (
    <div
      id="Comentario"
      className="w-full flex flex-col gap-2 p-4 pt-2 pb-2 bg-verdeGris rounded-2xl [box-shadow:0px_0px_5px_1px_black] hover:transform-[translateX(6%)] hover:[filter:saturate(80%)] transition-all duration-200 ease-out tablet:gap-3.5 tablet:p-8 tablet:pt-4 tablet:pb-4 tablet:hover:transform-[translateX(10%)]"
    >
      <div
        id="comentario_header"
        className="w-full h-[40px] flex gap-3 relative tablet:h-[48px]"
      >
        <figure className="h-full overflow-hidden rounded-full">
          <img
            src={picture}
            alt=""
            className="h-full"
            referrerPolicy="no-referrer"
          />
        </figure>
        <p className="flex items-center font-semibold">
          {`${usuarioNombre.slice(0, 12)}...`}
        </p>
        <p className="flex items-center">{tiempoRelativo(`${fecha}z`)}</p>
        <div className="hidden tablet:flex items-center absolute right-0 ">
          {estrellasArr.map((estrella) => {
            return (
              <span
                key={estrella}
                className={`${
                  estrella <= puntuacion ? `text-amber-500` : `text-gray-800`
                }`}
              >
                &#9733;
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex tablet:hidden items-center  text-amber-500">
        {estrellasArr.map((estrella) => {
          return (
            <span
              key={estrella}
              className={`${
                estrella <= puntuacion ? `text-amber-500` : `text-gray-800`
              }`}
            >
              &#9733;
            </span>
          );
        })}
      </div>
      <div id="comentario_contenido">{contenido}</div>
      {esComentarioUsuario ? (
        <nav className="flex gap-2 self-end">
          <button className="p-1 pl-2 pr-2 rounded-2xl font-semibold hover:bg-gray-400 hover:text-white transition-colors duration-200 ease-out cursor-pointer">
            Eliminar
          </button>
          <button className="p-1 pl-2 pr-2 rounded-2xl bg-skyBlue text-white font-semibold hover:bg-regularBlue transition-colors duration-200 ease-out cursor-pointer">
            Editar
          </button>
        </nav>
      ) : null}
    </div>
  );
}
