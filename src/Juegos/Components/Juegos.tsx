import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Juegos() {
  return (
    <div>
      <h1>Juegos acaaaa</h1>
      <Link to={"algo"}>A algo</Link>
      <Outlet />
    </div>
  );
}
