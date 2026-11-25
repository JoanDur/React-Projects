import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";

export default function CarritoVista() {
  const { carrito, eliminarDelCarrito, vaciarCarrito, totalPrecio } = useCarrito();

  if (carrito.length === 0) {
    return (
      <div className="card-box">
        <h2 className="page-title">Tu carrito está vacío</h2>
        <p>Agrega algún producto desde el catálogo para verlo aquí.</p>
        <Link to="/productos" className="enlace-detalle">
          Ir al catálogo →
        </Link>
      </div>
    );
  }

  return (
    <div className="card-box">
      <h2 className="page-title">Resumen del Carrito</h2>

      {carrito.map((item) => (
        <div key={item.id} className="carrito-item">
          <div>
            <strong>{item.nombre}</strong> × {item.cantidad}
            <div style={{ fontSize: "0.9rem", color: "#4b5563" }}>
              Subtotal: ${item.precio * item.cantidad}
            </div>
          </div>

          <button
            type="button"
            className="btn btn--danger"
            onClick={() => eliminarDelCarrito(item.id)}
          >
            Quitar
          </button>
        </div>
      ))}

      <div className="carrito-total">Total a pagar: ${totalPrecio}</div>

      <div className="acciones-row">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={vaciarCarrito}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}