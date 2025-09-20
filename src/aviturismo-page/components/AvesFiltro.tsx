interface Filtro {
  id: number;
  nombre: string;
}

interface Props {
  filtros: Filtro[];

  onFiltroClick: (filtro: number) => void;
}

export const AvesFiltro = ({ filtros, onFiltroClick }: Props) => {
  return (
    <div className="flex  flex-wrap justify-center gap-3.5 p-4  w-screen mb-3 bg-darkGreen">
      {filtros.map((filtro) => (
        <button
          key={filtro.id}
          className=" font-nunito font-bold  py-2 px-3 bg-beige rounded-2xl active:scale-97 transition-transform cursor-pointer"
          onClick={() => onFiltroClick(filtro.id)}
        >
          {filtro.nombre}
        </button>
      ))}
    </div>
  );
};
