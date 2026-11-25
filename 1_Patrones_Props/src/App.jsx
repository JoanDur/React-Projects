import { useState } from "react";
import "./styles.css";
import Card from "./components/Card";
import PedidoCard from "./components/PedidoCard";
import BotonAccion from "./components/BotonAccion";

export default function App() {
  const [pedidos, setPedidos] = useState([
    { id: 1, mesa: 4, platillo: "Hamburguesa Doble", estado: "pendiente" },
    { id: 2, mesa: 2, platillo: "Café Americano + Croissant", estado: "listo" },
  ]);

  const [mesa, setMesa] = useState("");
  const [platillo, setPlatillo] = useState("");

  const handleAgregarPedido = (e) => {
    e.preventDefault();
    if (!mesa || !platillo.trim()) return;

    const nuevoPedido = {
      id: Date.now(),
      mesa: Number(mesa),
      platillo: platillo.trim(),
      estado: "pendiente",
    };

    setPedidos((prev) => [...prev, nuevoPedido]);
    setMesa("");
    setPlatillo("");
  };

  const handleCambiarEstado = (id) => {
    setPedidos((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, estado: p.estado === "pendiente" ? "listo" : "pendiente" }
          : p
      )
    );
  };

  const handleEliminarPedido = (id) => {
    setPedidos((prev) => prev.filter((p) => p.id !== id));
  };

  const pendientesCount = pedidos.filter((p) => p.estado === "pendiente").length;

  return (
    <main className="app-container">
      <h1 className="app-title">Comandos de Cocina</h1>   

      <Card titulo="Nuevo Pedido">
        <form onSubmit={handleAgregarPedido} className="pedido-form">
          <input
            type="number"
            min="1"
            placeholder="N° Mesa"
            value={mesa}
            onChange={(e) => setMesa(e.target.value)}
            className="pedido-input pedido-input--mesa"
          />
          <input
            type="text"
            placeholder="Platillo o bebida..."
            value={platillo}
            onChange={(e) => setPlatillo(e.target.value)}
            className="pedido-input pedido-input--platillo"
          />
          <BotonAccion texto="Agregar" variante="primary" tipo="submit" />
        </form>
      </Card>

      <Card
        titulo={`Pedidos Activos (${pedidos.length}) — ${pendientesCount} pendientes`}
      >
        {pedidos.length === 0 ? (
          <p className="empty-msg">No hay pedidos en este momento.</p>
        ) : (
          pedidos.map((pedido) => (
            <PedidoCard
              key={pedido.id}
              {...pedido}
              onCambiarEstado={handleCambiarEstado}
              onEliminar={handleEliminarPedido}
            />
          ))
        )}
      </Card>
    </main>
  );
}