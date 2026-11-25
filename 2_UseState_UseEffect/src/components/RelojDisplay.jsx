export default function RelojDisplay({ minutos, segundos, modo, activo }) {
  const etiquetaEstado =
    modo === "trabajo"
      ? activo
        ? "Enfocado trabajando..."
        : "Listo para enfocar"
      : activo
        ? "Tomando un descanso..."
        : "Listo para descansar";

  return (
    <div className="reloj-display">
      <div className="reloj-tiempo">
        {minutos}:{segundos}
      </div>
      <div className="reloj-etiqueta">{etiquetaEstado}</div>
    </div>
  );
}