export interface ReservaNatural {
  frecuencia_avistamiento: string;
  reservas_naturales: ReservasNaturales;
}

export interface ReservasNaturales {
  nombre: string;
  latitud: number;
  url_img: string;
  longitud: number;
  reserva_id: number;
}
