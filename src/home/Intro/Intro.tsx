import logo from "../../assets/icons/logo.png";
import letra from "../../assets/icons/letra.png";
import { useEffect, useState } from "react";

export default function Intro() {
  const [state, setState] = useState(true);
  const tiempo = 2000;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(false);
    }, tiempo);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="absolute z-50 h-[95vh] w-screen bg-green-100">
      <img
        className="absolute  top-[50%] transform-[translateY(-50%)] w-[200px] splash1"
        src={logo}
        alt=""
      />
      <img className="w-[200px]" src={letra} alt="" />
    </div>
  );
}
