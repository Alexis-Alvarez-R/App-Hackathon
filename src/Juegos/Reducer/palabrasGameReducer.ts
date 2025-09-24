export interface palabrasGameState {
  palabras: string[];
  palabraActual: string;
  palabraDesordenada: string;
  respuesta: string;
  puntos: number;
  contadorError: number;
  erroresMax: number;
  contadorSkips: number;
  skipsMax: number;
  isGameOver: boolean;
  totalPalabras: number;
}

export type palabrasGameActions =
  | { type: " SET_RESPUESTA"; payload: string }
  | { type: "CHECK_RESPUESTA" }
  | { type: " SKIP_PALABRA" }
  | { type: " START_NEW_GAME"; payload: palabrasGameState };

const PALABRAS_GAME = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const getInitialState = (): palabrasGameState => {
  const palabrasBarajadas = shuffleArray([...PALABRAS_GAME]);

  return {
    palabras: palabrasBarajadas,
    palabraActual: palabrasBarajadas[0],
    palabraDesordenada: scrambleWord(palabrasBarajadas[0]),
    respuesta: "",
    puntos: 0,
    contadorError: 0,
    erroresMax: 3,
    contadorSkips: 0,
    skipsMax: 3,
    isGameOver: false,
    totalPalabras: palabrasBarajadas.length,
  };
};

export const palabrasGameReducer = (state: palabrasGameState, action: palabrasGameActions): palabrasGameState => {
  switch (action.type) {
    case " SET_RESPUESTA": {
      return {
        ...state,
        respuesta: action.payload.trim().toUpperCase(),
      };
    }

    case "CHECK_RESPUESTA": {
      if (state.palabraActual === state.respuesta) {
        const newWords = state.palabras.slice(1);

        return {
          ...state,
          palabras: newWords,
          puntos: state.puntos + 1,
          respuesta: "",
          palabraActual: newWords[0],
          palabraDesordenada: scrambleWord(newWords[0]),
        };
      }

      return {
        ...state,
        respuesta: "",
        contadorError: state.contadorError + 1,
        isGameOver: state.contadorError + 1 >= state.erroresMax,
      };
    }

    case " SKIP_PALABRA": {
      if (state.contadorSkips >= state.skipsMax) return state;

      const updateWords = state.palabras.slice(1);

      return {
        ...state,
        contadorSkips: state.contadorSkips + 1,
        palabras: updateWords,
        palabraActual: updateWords[0],
        palabraDesordenada: scrambleWord(updateWords[0]),
        respuesta: "",
      };
    }

    case " START_NEW_GAME": {
      return action.payload;
    }

    default:
      return state;
  }
};
