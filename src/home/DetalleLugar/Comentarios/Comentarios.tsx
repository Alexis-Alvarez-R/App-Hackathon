import Comentario from "./Components/Comentario";
import AgregarComentario from "./Components/AgregarComentario";
import useGetComentarios from "./hooks/useGetComentarios";
import { useContext } from "react";
import { lugarContext } from "../Context/LugarContext";
import { useSesionContex } from "../../../Context/AuthContex";

export default function Comentarios() {
  const id_lugar = useContext(lugarContext) as number;
  const { sesion } = useSesionContex();
  const { comentariosPublicados, setComentariosPublicados } = useGetComentarios(
    { id_lugar }
  );

  return (
    <div
      id="Box_Comentarios"
      className="w-full p-3 flex flex-col justify-center gap-4 items-center [box-shadow:1px_2px_3px_1px_black] rounded-[12px] tablet:p-6"
    >
      {sesion ? (
        <AgregarComentario
          setComentariosPublicados={setComentariosPublicados}
        />
      ) : null}
      <div
        id="Comentarios"
        className="w-full h-[80%] flex flex-col gap-6 tablet:w-[80%] desktop:w-[60%]"
      >
        {!comentariosPublicados ? (
          <h1>No hay Comentarios</h1>
        ) : (
          comentariosPublicados.map((comentario) => {
            if (!comentario.usuarios) return;
            const esComentariousuario =
              sesion?.id_usuario === comentario.usuarios.id_usuario;
            return (
              <Comentario
                key={comentario.id_comentario}
                picture={comentario.usuarios.imagenurl}
                usuarioNombre={comentario.usuarios.nombre}
                fecha={comentario.fecha_creacion}
                puntuacion={comentario.puntuacion}
                contenido={comentario.contenido}
                esComentarioUsuario={esComentariousuario}
                id_comentario={comentario.id_comentario}
                setComentariosPublicados={setComentariosPublicados}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
