import { useParams, useNavigate, Link } from "react-router-dom";
import { PRODUCTOS } from "../data/productos";
import { useCarrito } from "../context/CarritoContext";

export default function DetalleProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const producto = PRODUCTOS.find((item) => item.id === id);

  if (!producto) {
    return (
      <div className="card-box">
        <h2 className="page-title">Producto no encontrado</h2>
        <Link to="/productos" className="enlace-detalle">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="card-box">
      <button
        type="button"
        className="btn btn--secondary"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "1rem" }}
      >
        ← Volver
      </button>

      <h2 className="page-title">{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="producto-precio">Precio: ${producto.precio}</p>

      <button
        type="button"
        className="btn btn--primary"
        onClick={() => agregarAlCarrito(producto)}
      >
        Agregar al carrito
      </button>
    </div>
  );
}