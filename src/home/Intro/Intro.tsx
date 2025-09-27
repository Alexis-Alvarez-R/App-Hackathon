import logoLetra from "../../assets/img/logo-letra.png";

export default function Intro() {
  return (
    <div className="absolute z-50 h-[95vh] w-full bg-white">
      <img
        className="absolute top-[50%] left-[50%]  w-[200px] splash1"
        src={logoLetra}
        alt=""
      />
    </div>
  );
}
