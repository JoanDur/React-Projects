import PedidoInfo from "./PedidoInfo";
import BotonAccion from "./BotonAccion";

export default function PedidoCard({
  id,
  mesa,
  platillo,
  estado,
  onCambiarEstado,
  onEliminar,
}) {
  const esListo = estado === "listo";

  return (
    <div
      className={`pedido-item ${
        esListo ? "pedido-item--listo" : "pedido-item--pendiente"
      }`}
    >
      <PedidoInfo mesa={mesa} platillo={platillo} estado={estado} />

      <div className="pedido-acciones">
        <BotonAccion
          texto={esListo ? "Marcar pendiente" : "Marcar listo"}
          variante="secondary"
          onClick={() => onCambiarEstado(id)}
        />
        <BotonAccion
          texto="Eliminar"
          variante="danger"
          onClick={() => onEliminar(id)}
        />
      </div>
    </div>
  );
}