/*
  ================================================================
  Tarjeta.jsx
  ----------------------------------------------------------------
  PATRÓN 2: PROP CHILDREN

  Esta Tarjeta no sabe qué contenido mostrará. Dibuja un marco
  (título + caja) y coloca dentro lo que le pasen como "children",
  es decir, todo lo que se escriba ENTRE las etiquetas:

      <Tarjeta titulo="...">
        ...esto es children...
      </Tarjeta>

  Esto la hace muy reutilizable: sirve de envoltorio para cualquier
  cosa (texto, botones, listas u otros componentes).
  ================================================================
*/
function Tarjeta({ titulo, children }) {
  return (
    <section className="tarjeta">
      <h2>{titulo}</h2>
      {/* "children" = todo lo que el componente padre puso adentro */}
      {children}
    </section>
  );
}

export default Tarjeta;
