import React, { useEffect, useReducer } from "react";
import { getInitialState, palabrasGameReducer } from "../Reducer/palabrasGameReducer";

import confetti from "canvas-confetti";

export const PalabrasGame = () => {
  const [state, actions] = useReducer(palabrasGameReducer, getInitialState());

  const {
    palabras,
    palabraActual,
    palabraActualObjeto,
    palabraDesordenada,
    respuesta,
    puntos,
    contadorError,
    erroresMax,
    contadorSkips,
    skipsMax,
    isGameOver,
    totalPalabras,
    showBonusData,
  } = state;

  useEffect(() => {
    if (puntos > 0 && showBonusData) {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.6 },
      });
    }
  }, [puntos, showBonusData]);

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    actions({ type: "CHECK_RESPUESTA" });
  };

  const handleProceedNextWord = () => {
    actions({ type: " PROCEED_NEXT_WORD" });
  };

  const handleSkip = () => {
    actions({ type: " SKIP_PALABRA" });
  };

  const handlePlayAgain = () => {
    actions({ type: " START_NEW_GAME" });
  };

  const progress = Math.round((puntos / totalPalabras) * 100);

  // --- VISTA DE JUEGO TERMINADO ---
  if (isGameOver || (palabras.length === 0 && !showBonusData && puntos === totalPalabras && totalPalabras > 0)) {
    const isWin = puntos === totalPalabras;
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-50 to-blue-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-2xl text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-600 mb-4">
            {isWin ? "¡Misión Cumplida!" : "¡Fin del Juego!"}
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            {isWin
              ? "¡Felicidades! Has completado todas las palabras y has aprendido mucho sobre conservación."
              : `Se te acabaron los errores. Lograste decifrar ${puntos} de ${totalPalabras} palabras.`}
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
              <span className="font-semibold text-gray-600 flex items-center gap-2">
                <span className="text-xl">✅</span> Palabras Correctas:
              </span>
              <span className="text-3xl font-bold text-green-700">{puntos}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
              <span className="font-semibold text-gray-600 flex items-center gap-2">
                <span className="text-xl">❌</span> Errores Cometidos:
              </span>
              <span className="text-3xl font-bold text-red-700">{contadorError}</span>
            </div>
          </div>

          <button
            onClick={handlePlayAgain}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-green-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
          >
            <span className="text-xl">🔄</span> Jugar de Nuevo
          </button>
        </div>
      </div>
    );
  }

  // --- VISTA PRINCIPAL (Juego / Bono) ---
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1
            className="text-4xl font-bold bg-clip-text text-transparent mb-2"
            style={{ backgroundImage: `linear-gradient(to right, #20887e, #2ec4b6)` }}
          >
            Ordena las Palabras
          </h1>
          <p className="text-gray-600 font-bold">¡Ordena las letras para aprender sobre Nicaragua!</p>
        </div>

        {/* VISTA DE PREGUNTA DE BONO */}
        {showBonusData ? (
          <div className="backdrop-blur-sm bg-white/90 border-4 border-lightOcean p-8 rounded-xl shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-6xl mx-auto mb-4 animate-bounce">✅</div>
              <h2 className="text-3xl font-bold text-ocean mb-2">¡Palabra Correcta!</h2>
              <p className="text-lg font-semibold text-gray-700 mb-6">
                Palabra: <span className="text-xl font-extrabold  text-teal-600">{palabraActualObjeto.word}</span>
              </p>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 shadow-md">
                <h3 className="text-lg font-bold text-blue-700 mb-3 flex items-center justify-center gap-2">
                  <span className="text-xl">⚡️</span> Informacion Bono
                </h3>
                <p className="text-gray-800 text-base font-nunito italic">{palabraActualObjeto.bonusData}</p>
              </div>
            </div>

            <button
              onClick={handleProceedNextWord}
              className="w-full bg-gradient-to-r from-lightOcean to-ocean text-white font-nunito font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 mt-4"
            >
              Continuar al Siguiente Desafío
            </button>
          </div>
        ) : (
          // --- VISTA DE JUEGO PRINCIPAL ---
          <div className="backdrop-blur-sm bg-white/80 border-0 shadow-xl p-6 rounded-xl">
            {/* Progress Bar */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-600 mb-1">
                Progreso: {puntos} / {totalPalabras} ({progress}%)
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, backgroundColor: "teal" }}
                ></div>
              </div>
            </div>

            {/* Scrambled Word Display */}
            <div className="mb-8">
              <h2 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                Palabra Desordenada
              </h2>

              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                {palabraDesordenada.split("").map((letter, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md transform hover:scale-105 transition-transform duration-200"
                    style={{
                      backgroundColor: "#2ec4b6",
                      animationDelay: `${index * 0.05}s`,
                      opacity: 0,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>

            {/* Guess Input */}
            <form className="mb-6" onSubmit={handleGuessSubmit}>
              <div className="space-y-4">
                <input
                  id="guess"
                  type="text"
                  value={respuesta}
                  onChange={(e) => {
                    actions({
                      type: " SET_RESPUESTA",
                      payload: e.target.value,
                    });
                  }}
                  placeholder="Ingresa tu palabra..."
                  className="w-full text-center text-lg font-semibold h-12 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors px-3"
                  maxLength={palabraActual.length}
                  disabled={isGameOver || showBonusData}
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-lightOcean to-ocean text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                  disabled={!respuesta.trim() || isGameOver || showBonusData}
                >
                  Enviar Adivinanza
                </button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 text-center border border-green-200 shadow-sm">
                <div className="text-2xl font-bold text-green-600">
                  {puntos} / {totalPalabras}
                </div>
                <div className="text-xs text-green-700 font-medium">PALABRAS ACERTADAS</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-3 text-center border border-red-200 shadow-sm">
                <div className="text-2xl font-bold text-red-600">
                  {contadorError}/{erroresMax}
                </div>
                <div className="text-xs text-red-700 font-medium">ERRORES RESTANTES</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-3">
              <button
                onClick={handleSkip}
                className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={isGameOver || contadorSkips >= skipsMax}
              >
                <span className="text-lg">⏩</span>
                Saltar ({skipsMax - contadorSkips} restantes)
              </button>
              <button
                onClick={handlePlayAgain}
                className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium border border-blue-500 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <span className="text-lg">🔄</span>
                Reiniciar
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Animation keyframes for the letter transition */}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Simple bounce animation for the checkmark */
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>

      <div className="text-center font-nunito mt-6">
        <p className="text-sm text-gray-500">
          Desafíate con palabras desordenadas!
          <br />
          <br />
          {palabras.join(", ")}
        </p>
      </div>
    </div>
  );
};
