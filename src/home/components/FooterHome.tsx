import { Link } from "react-router-dom";

import facebookIcon from "../../assets/icons/facebook-tag.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import tiktokIcon from "../../assets/icons/tiktok.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import misionIcon from "../../assets/icons/historic-shield.svg";
import visionIcon from "../../assets/icons/binocular.svg";
import logo from "../../assets/img/LogoRumboNica.svg";

export const FooterHome = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esto hace que el desplazamiento sea suave
    });
  };

  return (
    <>
      <footer className="w-full flex-col  bg-black flex desktop:flex-row gap-4 p-2 text-white ">
        <section className=" w-full py-2 px-4 desktop:ml-8 mt-2 mb-4 flex justify-center flex-col gap-6 desktop:w-[50%] ">
          <img className="w-[70%] h-[150px] object-cover" src={logo}></img>

          <p className="w-full deskto:w-[70%] font-nunito text-justify">
            Somos una plataforma digital que inspira a descubrir la cultura y naturaleza de Nicaragua. A través de
            dinámicas de exploración y juego, motivamos a visitar destinos únicos, resaltando también la riqueza de
            nuestras aves, áreas protegidas y belleza del país.
          </p>

          <h2 className="font-nunito font-bold text-2xl text-lightGreen">Contactanos en:</h2>

          <div className="flex justify-start items-center gap-4  p-3">
            <a href="https://www.facebook.com/profile.php?id=61581291989568" target="_blank">
              <img
                className="w-[42px] h-[42px] object-contain hover:scale-120 transition-transform ease-in-out duration-300 "
                src={facebookIcon}
                alt=""
              />
            </a>

            <a href="https://www.instagram.com/rumbo_nica505?igsh=MXRiYWp5N3pkeHRvbg==" target="_blank">
              <img
                className="w-[42px] h-[42px] object-contain hover:scale-120 transition-transform ease-in-out duration-300 "
                src={instagramIcon}
                alt=""
              />
            </a>

            <a href="http://tiktok.com/@rumbo.nicaoficial" target="_blank">
              <img
                className="w-[42px] h-[42px] object-contain hover:scale-120 transition-transform ease-in-out duration-300 "
                src={tiktokIcon}
                alt=""
              />
            </a>

            <Link to={"/whatsApp"}>
              <img
                className="w-[42px] h-[42px] object-contain hover:scale-120 transition-transform ease-in-out duration-300"
                src={whatsappIcon}
                alt=""
              />
            </Link>
          </div>

          <button
            onClick={handleScrollToTop}
            className="outline-3 outline-lightGreen w-[50%] desktop:w-[40%] py-3 flex justify-center items-center gap-2 font-nunito font-bold rounded-2xl hover:bg-lightGreen active:scale-95  transition-all ease-in-out duration-300"
          >
            {" "}
            <img className="inline fill-white" src={arrowUp} alt="" />
            BACK TO TOP
          </button>
        </section>

        <section className="flex flex-col gap-4 w-full py-2 px-4 desktop:w-[30%] mt-4 mb-4">
          <hr />
          <div className="flex justify-start items-center gap-4 w-full">
            <img className="w-[50px] h-[50px] object-cover" src={visionIcon} alt="" />
            <h2 className="text-lightGreen text-2xl text-center font-nunito font-bold "> Visión</h2>
          </div>
          <p className="font-nunito p-1">
            Ser la plataforma digital lider en Turismo en Nicaragua, reconocida por la innovacion y el impulso de
            crecimiento de empresas y guias locales, fomentando un turismo prospero y respetuoso con el medio ambiente y
            la cultura.
          </p>
          <hr />

          <div className="flex justify-start items-center w-full gap-4">
            <img className="w-[50px] h-[50px] object-cover" src={misionIcon} alt="" />
            <h2 className="text-lightGreen text-2xl text-center font-nunito font-bold">Misión</h2>
          </div>
          <p className="font-nunito p-1">
            Conectar a los turistas con experiencias autenticas y sostenibles en Nicargua al mismo tiempo que impulsamos
            a empresas y guias locales a crecer y fortalecer el turismo responsable.
          </p>
          <hr />
        </section>

        <section className="flex flex-col justify-start items-start gap-3 w-full desktop:w-[20%] mt-6 py-2 px-4">
          <h2 className="text-lightGreen text-2xl font-nunito font-bold ">Legal Warning</h2>
          <h2 className="text-white text-2xl font-nunito font-bold ">Privacy Policy</h2>
          <h2 className="text-lightGreen text-2xl font-nunito font-bold ">Cookies Policy</h2>
          <h2 className="text-white text-2xl font-nunito font-bold ">Quality Policy</h2>
        </section>
      </footer>
      <div className=" w-full h-[10px] bg-lightGreen"></div>
    </>
  );
};
