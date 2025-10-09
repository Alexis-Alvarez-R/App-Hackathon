export interface Sesion {
  name: string;
  email: string;
  picture: string;
  id_usuario: number;
}

export interface SesionContextType {
  sesion: Sesion | undefined;
  setSesion: React.Dispatch<React.SetStateAction<Sesion | undefined>>;
}
