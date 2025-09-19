export interface Sesion {
  nombre: string;
  email: string;
}

export interface SesionContextType {
  sesion: Sesion | undefined;
  setSesion: React.Dispatch<React.SetStateAction<Sesion | undefined>>;
}
