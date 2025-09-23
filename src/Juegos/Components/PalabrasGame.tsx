import React, { useEffect, useReducer } from "react";
import { getInitialState, palabrasGameReducer } from "../Reducer/palabrasGameReducer";

import confetti from "canvas-confetti";

export const PalabrasGame = () => {
  const [state, actions] = useReducer(palabrasGameReducer, getInitialState());

  const {
    palabras,
    palabraActual,
    palabraDesordenada,
    respuesta,
    puntos,
    contadorError,
    erroresMax,
    contadorSkips,
    skipsMax,
    isGameOver,
    totalPalabras,
  } = state;

  useEffect(() => {
    if (puntos === 0) return;
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, [puntos]);

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    actions({ type: "CHECK_RESPUESTA" });
  };

  const handleSkip = () => {
    actions({ type: " SKIP_PALABRA" });
  };

  const handlePlayAgain = () => {
    actions({ type: " START_NEW_GAME", payload: getInitialState() });
  };

  if (palabras.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-darkGreen to-lightGreen bg-clip-text text-transparent mb-2">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">No hay palabras para jugar</p>
          <br />
          <div>Puntaje: {puntos}</div>
          <br />
          <div>Errores: {contadorError}</div>
          <br />
          <div>Saltos: {contadorSkips}</div>
          <br />
          <button className="" onClick={handlePlayAgain}>
            Jugar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-darkGreen to-lightGreen bg-clip-text text-transparent mb-2">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">Desordena las letras para encontrar la palabra!</p>
        </div>

        {/* Main Game Card */}
        <div className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <div className="p-8">
            {/* Scrambled Word Display */}
            <div className="mb-8">
              <h2 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide flex items-center justify-center gap-2">
                Palabra Desordenada
                {isGameOver && <span className="text-red-500 text-xl"> {palabraActual}</span>}
              </h2>

              <div className="flex justify-center gap-2 mb-6">
                {palabraDesordenada.split("").map((letter, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-darkGreen to-lightGreen rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-105 transition-transform duration-200"
                    style={{
                      animationDelay: `${index * 0.1}s`,
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
                <div>
                  <label htmlFor="guess" className="block text-sm font-medium text-gray-700 mb-2">
                    Adivina la palabra
                  </label>
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
                    className=" w-full text-center text-lg font-semibold font-nunito h-12 border-3 border-indigo-200   focus:border-red-200  active:border-red-200 transition-colors"
                    maxLength={palabraDesordenada.length}
                    disabled={isGameOver}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-darkGreen to-lightGreen cursor-pointer text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                  disabled={!respuesta.trim() || isGameOver}
                >
                  Enviar Adivinanza
                </button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 text-center border border-green-200">
                <div className="text-2xl font-bold text-green-600">
                  {puntos} / {totalPalabras}
                </div>
                <div className="text-sm text-green-700 font-medium">Puntos</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 text-center border border-red-200">
                <div className="text-2xl font-bold text-red-600">
                  {contadorError}/{erroresMax}
                </div>
                <div className="text-sm text-red-700 font-medium">Errores</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleSkip}
                className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                disabled={isGameOver || contadorSkips >= skipsMax}
              >
                <div className="w-4 h-4" />
                Saltar ({contadorSkips} / {skipsMax})
              </button>
              <button
                onClick={handlePlayAgain}
                className="border-2 border-darkGreen hover:border-indigo-400 hover:bg-indigo-50 text-darkGreen transition-colors flex items-center justify-center gap-2"
              >
                <div className="w-4 h-4" />
                Jugar de nuevo
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Desafíate con palabras desordenadas!
            <br />
            <br />
            {palabras.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};
