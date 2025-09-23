import { Link, Outlet } from "react-router-dom";

export default function Juegos() {
  return (
    <>
      <Link to={"ScrambleWords"}>VE a JUGAR</Link>
      <Outlet></Outlet>
    </>
  );
}
