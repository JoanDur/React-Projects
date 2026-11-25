import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

export default function Navbar() {
  const { totalItems } = useCarrito();

  return (
    <header className="navbar">
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">
          Inicio
        </Link>
        <Link to="/productos" className="navbar-link">
          Catálogo
        </Link>
      </nav>

      <Link to="/carrito" className="navbar-carrito">
        Carrito ({totalItems})
      </Link>
    </header>
  );
}