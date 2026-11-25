export default function ControlesTimer({ activo, onToggleActivo, onReiniciar }) {
  return (
    <div className="controles-timer">
      <button type="button" onClick={onToggleActivo} className="btn btn--primary">
        {activo ? "Pausar" : "Iniciar"}
      </button>
      <button type="button" onClick={onReiniciar} className="btn btn--secondary">
        Reiniciar
      </button>
    </div>
  );
}