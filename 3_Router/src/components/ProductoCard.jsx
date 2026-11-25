import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

export default function ProductoCard({ producto }) {
  const { agregarAlCarrito } = useCarrito();

  return (
    <article className="card-box">
      <h3 style={{ margin: 0 }}>{producto.nombre}</h3>
      <p className="producto-precio">${producto.precio}</p>

      <div className="acciones-row">
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar
        </button>
        <Link to={`/productos/${producto.id}`} className="enlace-detalle">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}