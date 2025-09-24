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
    <>
      <h1 className="w-screen h-[90px] text-center text-5xl font-nunito font-bold p-2 bg-gradient-to-r from-darkGreen  to-lightGreen bg-clip-text text-transparent">
        Filtra por zona
      </h1>

      <div className="flex  flex-wrap justify-center gap-3.5 p-4  w-screen  bg-gradient-to-r from-darkGreen  via-beige to-darkGreen">
        {filtros.map((filtro) => (
          <button
            key={filtro.id}
            className=" font-nunito font-bold  py-2 px-3 text-white bg-darkGreen rounded-2xl active:scale-97 cursor-pointer  hover:scale-110  transition-all ease-in-out duration-300"
            onClick={() => onFiltroClick(filtro.id)}
          >
            {filtro.nombre}
          </button>
        ))}
      </div>
    </>
  );
};
