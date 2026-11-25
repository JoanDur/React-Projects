export default function PedidoInfo({ mesa, platillo, estado }) {
  return (
    <div>
      <span className="pedido-mesa">Mesa {mesa}:</span>
      <span>{platillo}</span>
      <span className="pedido-estado">{estado}</span>
    </div>
  );
}