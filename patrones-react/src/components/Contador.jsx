/*
  ================================================================
  Contador.jsx
  ----------------------------------------------------------------
  PATRÓN 1: CALLBACKS

  El Contador NO decide cómo cambia el valor. Recibe desde el padre
  dos funciones (callbacks) por props: onIncrementar y onReiniciar.
  Cuando el usuario hace clic, el hijo simplemente "avisa" al padre
  llamando a esas funciones. Así el padre mantiene el control del
  estado y el hijo queda reutilizable.
  ================================================================
*/
function Contador({ valor, onIncrementar, onReiniciar }) {
  return (
    <div className="contador">
      <span className="valor">{valor}</span>

      {/* Al hacer clic, llamamos el callback que nos dio el padre */}
      <button onClick={onIncrementar}>+1</button>

      <button className="secundario" onClick={onReiniciar}>
        Reiniciar
      </button>
    </div>
  );
}

export default Contador;
