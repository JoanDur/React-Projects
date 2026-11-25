export default function ModoSelector({ modo, onCambiarModo }) {
  return (
    <div className="modo-selector">
      <button
        type="button"
        onClick={() => onCambiarModo("trabajo")}
        className={`modo-btn ${modo === "trabajo" ? "modo-btn--activo" : ""}`}
      >
        Trabajo (25m)
      </button>
      <button
        type="button"
        onClick={() => onCambiarModo("descanso")}
        className={`modo-btn ${modo === "descanso" ? "modo-btn--activo" : ""}`}
      >
        Descanso (5m)
      </button>
    </div>
  );
}