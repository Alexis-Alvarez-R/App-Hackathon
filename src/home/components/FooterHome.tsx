import facebookIcon from "../../assets/icons/facebook-tag.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import tiktokIcon from "../../assets/icons/tiktok.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";

const links = ["Inicio", "Aviturismo", "Explora", "Juegos", "Contacto"];

export const FooterHome = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esto hace que el desplazamiento sea suave
    });
  };

  return (
    <>
      <footer
        id="footer"
        className="w-full flex-col  bg-black flex desktop:flex-row gap-4 p-2 text-white "
      >
        <section className=" w-full py-2 px-4 desktop:ml-8 mt-4 mb-4 flex flex-col gap-5 desktop:w-[50%] ">
          <h1 className="font-nunito font-bold text-3xl text-lightGreen ">
            RumboNica
          </h1>

          <p className="w-full deskto:w-[70%] font-nunito">
            Somos una plataforma digital que inspira a descubrir la cultura y
            naturaleza de Nicaragua. A través de dinámicas de exploración y
            juego, motivamos a visitar destinos únicos, resaltando también la
            riqueza de nuestras aves, áreas protegidas y belleza del país.
          </p>

          <h2 className="font-nunito font-bold text-2xl text-lightGreen">
            Contactanos en:
          </h2>

          <div className="flex justify-start items-center gap-4  p-3">
            <a
              href="https://www.facebook.com/profile.php?id=61581291989568"
              target="_blank"
            >
              <img
                className="w-[42px] h-[42px] object-contain hover:scale-120 transition-transform ease-in-out duration-300 "
                src={facebookIcon}
                alt=""
              />
            </a>

            <a
              href="https://www.instagram.com/rumbo_nica505?igsh=MXRiYWp5N3pkeHRvbg=="
              target="_blank"
            >
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
            className="outline-3 outline-darkGreen w-[50%] desktop:w-[40%] py-3 flex justify-center items-center gap-2 font-nunito font-bold rounded-2xl hover:bg-darkGreen active:scale-95  transition-all ease-in-out duration-300"
          >
            {" "}
            <img className="inline fill-white" src={arrowUp} alt="" />
            BACK TO TOP
          </button>
        </section>

        <section className="flex flex-col gap-3 w-full desktop:w-[25%] mt-4 ml-4">
          <h2 className="text-lightGreen text-2xl font-nunito font-bold ">
            Enlaces Rapidos
          </h2>
          <NavLinks links={links}></NavLinks>
        </section>

        <section className="flex flex-col gap-4 w-full desktop:w-[25%] mt-4 ml-4 mb-4">
          <h2 className="text-lightGreen text-2xl font-nunito font-bold">
            Legal
          </h2>
          <h3 className="font-nunito">Politicas de Privacidad</h3>
          <h3 className="font-nunito">Terminos y condiciones</h3>
          <h3 className="font-nunito">Todos los Derechos Reservados</h3>
        </section>
      </footer>
      <div className=" w-full h-[10px] bg-darkGreen"></div>
    </>
  );
};
