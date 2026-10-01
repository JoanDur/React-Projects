/*
  ================================================================
  Perfil.jsx
  ----------------------------------------------------------------
  Muestra los datos de una persona. Se usa junto con el
  PATRÓN 3 (operador spread) para recibir todas sus props de una
  sola vez: <Perfil {...persona} />
  ================================================================
*/
function Perfil({ nombre, rol, ciudad }) {
  return (
    <div className="perfil">
      <strong>{nombre}</strong>
      <span className="rol">{rol}</span>
      <div className="nota">Ciudad: {ciudad}</div>
    </div>
  );
}

export default Perfil;
