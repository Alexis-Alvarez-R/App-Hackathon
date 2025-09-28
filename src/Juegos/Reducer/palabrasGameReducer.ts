export interface WordData {
  word: string;
  bonusData: string;
}

export interface palabrasGameState {
  palabras: string[];
  palabraActual: string;
  palabraActualObjeto: WordData;
  palabraDesordenada: string;
  respuesta: string;
  puntos: number;
  contadorError: number;
  erroresMax: number;
  contadorSkips: number;
  skipsMax: number;
  isGameOver: boolean;
  totalPalabras: number;
  showBonusData: boolean;
}

export type palabrasGameActions =
  | { type: " SET_RESPUESTA"; payload: string }
  | { type: "CHECK_RESPUESTA" }
  | { type: " SKIP_PALABRA" }
  | { type: " PROCEED_NEXT_WORD" }
  | { type: " START_NEW_GAME" };

// Lista de palabras sobre Conservación y Buenas Prácticas en Nicaragua
const PALABRAS_GAME: WordData[] = [
  {
    word: "CONSERVACION",
    bonusData:
      "Es el objetivo principal del módulo. Conservar significa proteger y usar recursos de forma responsable.",
  },
  {
    word: "BIODIVERSIDAD",
    bonusData: "Es el término que describe la variedad de especies de vida en el ecosistema nicaragüense",
  },
  {
    word: "ECOTURISMO",
    bonusData: "Es el tipo de turismo que apoya la conservación de las áreas naturales.",
  },
  {
    word: "REFORESTAR",
    bonusData: "Es la acción que ayuda a restaurar el bosque y protege las cuencas hídricas",
  },
  {
    word: "SOSTENIBLE",
    bonusData:
      "Describe cualquier actividad o desarrollo que satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones.",
  },
  {
    word: "RECICLAJE",
    bonusData:
      "El proceso de convertir materiales de desecho en nuevos productos, reduciendo la necesidad de materias primas vírgenes y la contaminación.",
  },
  {
    word: "BOSAWAS",
    bonusData:
      "Es la Reserva de la Biósfera más grande de Centroamérica, crucial para la conservación de la flora, fauna y el patrimonio indígena de Nicaragua.",
  },
  {
    word: "OMETEPE",
    bonusData:
      "Una hermosa isla volcánica en el Lago de Nicaragua, declarada Reserva de la Biósfera por su riqueza natural y arqueológica.",
  },
  {
    word: "MANGLARES",
    bonusData:
      "Son ecosistemas costeros vitales que actúan como barreras naturales contra huracanes y como criaderos para muchas especies marinas y aves.",
  },
  {
    word: "HABITAT",
    bonusData:
      "El lugar específico en el medio ambiente donde vive una especie. Su protección es clave para asegurar la supervivencia de la fauna y flora.",
  },

  {
    word: "FAUNA",
    bonusData:
      "Se refiere al conjunto de animales que habitan en una región. En Nicaragua es muy diversa, incluyendo jaguares, monos y la lapa roja.",
  },
  {
    word: "FLORA",
    bonusData:
      "Se refiere a la vida vegetal de una región. La flora nicaragüense es rica en especies, desde bosques secos hasta selvas tropicales húmedas.",
  },
  {
    word: "ERUPCION",
    bonusData:
      "Es la liberación de material (lava, ceniza, gas) desde un volcán. A pesar del peligro, las cenizas fertilizan las tierras cercanas.",
  },
  {
    word: "ATENUACION",
    bonusData:
      "Es la acción de reducir o disminuir el impacto de un desastre natural o ambiental. Es un objetivo clave en la gestión de riesgos costeros.",
  },
  {
    word: "AVITURISMO",
    bonusData:
      "También conocido como birdwatching. Es un tipo de ecoturismo enfocado en la observación y el estudio de aves en su hábitat natural, común en las reservas de Nicaragua.",
  },
  {
    word: "SOLENTINAME",
    bonusData:
      "Archipiélago en el Lago de Nicaragua famoso por su belleza natural, talleres de artesanía primitiva y por ser un refugio de aves acuáticas.",
  },
  {
    word: "SIEMBRA",
    bonusData:
      "Es el proceso de plantar semillas en la tierra para que germinen. Es fundamental para la reforestación y la producción de alimentos.",
  },
];

// Esta función mezcla el arreglo para que siempre sea aleatorio

const shuffleArray = (array: WordData[]): WordData[] => {
  return array.sort(() => Math.random() - 0.5);
};

// Función que mezcla las letras de la palabra
const scrambleWord = (word: string = ""): string => {
  // Quitamos tildes para evitar problemas con la mezcla de letras
  const normalizedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let scrambled = normalizedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  // Lógica simple para evitar que la palabra desordenada sea igual a la original
  while (scrambled === normalizedWord) {
    scrambled = normalizedWord
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  }
  return scrambled.toUpperCase();
};

export const getInitialState = (): palabrasGameState => {
  const palabrasBarajadas = shuffleArray([...PALABRAS_GAME]);
  const primeraPalabra = palabrasBarajadas[0] || { word: "", bonusQuestion: "" };

  return {
    // La lista de palabras solo guarda el string para tracking
    palabras: palabrasBarajadas.map((data) => data.word),
    palabraActual: primeraPalabra.word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase(),
    palabraActualObjeto: primeraPalabra, // El objeto completo con la pregunta
    palabraDesordenada: scrambleWord(primeraPalabra.word),
    respuesta: "",
    puntos: 0,
    contadorError: 0,
    erroresMax: 5,
    contadorSkips: 0,
    skipsMax: 2,
    isGameOver: false,
    totalPalabras: palabrasBarajadas.length,
    showBonusData: false, // Inicia en modo juego
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
      if (state.isGameOver || state.showBonusData) return state;

      // Normalizamos la respuesta y la palabra actual para ignorar acentos en la verificación
      const normalizedPalabraActual = state.palabraActual
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();
      const normalizedRespuesta = state.respuesta
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

      if (normalizedPalabraActual === normalizedRespuesta) {
        // Respuesta correcta: Gana puntos e inicia el modo "Pregunta de Bono"
        return {
          ...state,
          puntos: state.puntos + 1,
          respuesta: "",
          showBonusData: true, // Pasa al modo de pregunta de bono
        };
      }

      // Respuesta incorrecta: Suma error y verifica Game Over
      const newErrorCount = state.contadorError + 1;
      return {
        ...state,
        respuesta: "",
        contadorError: newErrorCount,
        isGameOver: newErrorCount >= state.erroresMax,
      };
    }

    case " PROCEED_NEXT_WORD": {
      // Acción que se ejecuta tras ver la pregunta de bono.
      const remainingWords = state.palabras.slice(1);

      // Si no hay más palabras, el juego ha terminado
      if (remainingWords.length === 0) {
        return {
          ...state,
          palabras: [],
          palabraActual: "",
          palabraActualObjeto: { word: "", bonusData: "" },
          palabraDesordenada: "",
          isGameOver: true,
          showBonusData: false,
        };
      }

      // Busca el objeto completo (palabra + pregunta) de la siguiente palabra
      const nextWordString = remainingWords[0];
      const nextWordObject = PALABRAS_GAME.find((data) => data.word === nextWordString) || {
        word: "",
        bonusData: "",
      };

      const nextPalabraActual = nextWordObject.word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

      return {
        ...state,
        palabras: remainingWords,
        palabraActual: nextPalabraActual,
        palabraActualObjeto: nextWordObject,
        palabraDesordenada: scrambleWord(nextWordObject.word),
        respuesta: "",
        showBonusData: false, // Vuelve al modo juego
      };
    }

    case " SKIP_PALABRA": {
      if (state.contadorSkips >= state.skipsMax) return state;

      const updateWords = state.palabras.slice(1);

      if (updateWords.length === 0) {
        return {
          ...state,
          contadorSkips: state.contadorSkips + 1,
          isGameOver: true,
          palabras: [],
        };
      }

      const nextWordString = updateWords[0];
      const nextWordObject = PALABRAS_GAME.find((data) => data.word === nextWordString) || {
        word: "",
        bonusData: "",
      };

      const nextPalabraActual = nextWordObject.word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

      return {
        ...state,
        contadorSkips: state.contadorSkips + 1,
        palabras: updateWords,
        palabraActual: nextPalabraActual,
        palabraActualObjeto: nextWordObject,
        palabraDesordenada: scrambleWord(nextWordObject.word),
        respuesta: "",
        showBonusData: false,
      };
    }

    case " START_NEW_GAME": {
      return getInitialState(); // Llamar a getInitialState para asegurar un reset completo
    }

    default:
      return state;
  }
};
