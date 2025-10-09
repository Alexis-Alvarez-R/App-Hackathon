export interface iComentario {
  id_usuario: number;
  id_lugar: number;
  puntuacion: number;
  fecha: string;
  contenido: string;
}

export interface iComentarioPublicacion {
  id_comentario: number;
  contenido: string;
  puntuacion: number;
  fecha_creacion: string;
  usuarios: {
    nombre: string;
    imagenurl: string;
    id_usuario: number;
  };
}
