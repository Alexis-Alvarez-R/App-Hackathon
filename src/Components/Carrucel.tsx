import { useRef, useState, useEffect } from "react";
import { listImgReservas } from "../aviturismo-page/data/imgReservas";

export const Carrucel = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImg = listImgReservas.length;
  const widthImg = 500;

  const scrollToImage = (direction: string): void => {
    if (direction === "prev") {
      setCurrentIndex((current) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? totalImg - 1 : current - 1;
      });
    } else {
      setCurrentIndex((current) => {
        const isLastSlide = current === totalImg - 1;
        return isLastSlide ? 0 : current + 1;
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((current) => {
        const isLastSlide = current === totalImg - 1;
        // Si es el último, vuelve al primero (0).
        return isLastSlide ? 0 : current + 1;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [totalImg]);

  const translateXValue = -currentIndex * widthImg;

  return (
    <div className="w-full flex justify-center items-center desktop:w-[40%] ">
      <div className="w-[500px] h-[280px] overflow-hidden">
        <div className="relative h-full">
          <div className="rightArrow select-none" onClick={() => scrollToImage("next")}>
            &#187;
          </div>
          <div className="leftArrow select-none" onClick={() => scrollToImage("prev")}>
            &#171;
          </div>
          <div className="w-full h-full rounded-2xl overflow-hidden border-1 border-gray-300">
            <ul
              ref={listRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                // Usamos translate3d para garantizar la aceleración por hardware
                transform: `translateX(${translateXValue}px)`,
              }}
            >
              {listImgReservas.map((item) => (
                <li key={item.id} className="w-[500px] h-[280px] flex-shrink-0">
                  <img src={item.urlImg} className="w-[500px] h-[280px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
