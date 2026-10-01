/*
  ================================================================
  app.jsx — Demostración de patrones en React
  ================================================================
  Trabajamos con COMPONENTES y PROPS para mostrar tres patrones:

    1) CALLBACKS      -> el padre pasa funciones como props al hijo,
                         y el hijo las "llama de vuelta" cuando ocurre
                         un evento (por ejemplo, un clic).

    2) PROP CHILDREN  -> todo lo que se escribe ENTRE las etiquetas
                         de un componente llega a él mediante la prop
                         especial "children".

    3) OPERADOR SPREAD-> los tres puntos (...) sirven para "expandir"
                         un objeto o arreglo. Muy útil para pasar
                         muchas props de golpe o copiar datos sin
                         mutar el original.

  Nota: usamos React.useState solo para que los contadores
  reaccionen; el foco del proyecto son los tres patrones.
  ================================================================
*/

// Extraemos useState desde el objeto global React (viene del CDN).
const { useState } = React;

/* ================================================================
   COMPONENTE REUTILIZABLE: Tarjeta
   ----------------------------------------------------------------
   PATRÓN 2: PROP CHILDREN

   Esta Tarjeta no sabe qué contenido mostrará. Simplemente dibuja
   un marco (título + caja) y coloca dentro lo que le pasen como
   "children" (el contenido entre <Tarjeta> ... </Tarjeta>).

   Esto la hace muy reutilizable: sirve de envoltorio para cualquier
   cosa (texto, botones, listas, otros componentes, etc.).
   ================================================================ */
function Tarjeta({ titulo, children }) {
  return (
    <section className="tarjeta">
      <h2>{titulo}</h2>
      {/* "children" = todo lo que el componente padre puso adentro */}
      {children}
    </section>
  );
}

/* ================================================================
   COMPONENTE HIJO: Contador
   ----------------------------------------------------------------
   PATRÓN 1: CALLBACKS

   El Contador NO decide cómo cambia el valor. Recibe desde el padre
   dos funciones (callbacks) por props: onIncrementar y onReiniciar.
   Cuando el usuario hace clic, el hijo simplemente "avisa" al padre
   llamando a esas funciones. Así el padre mantiene el control del
   estado y el hijo queda reutilizable.
   ================================================================ */
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

/* ================================================================
   COMPONENTE HIJO: Perfil
   ----------------------------------------------------------------
   Muestra los datos de una persona. Lo usaremos junto con el
   PATRÓN 3 (spread) para pasarle todas sus props de una sola vez.
   ================================================================ */
function Perfil({ nombre, rol, ciudad }) {
  return (
    <div className="perfil">
      <strong>{nombre}</strong>
      <span className="rol">{rol}</span>
      <div className="nota">Ciudad: {ciudad}</div>
    </div>
  );
}

/* ================================================================
   COMPONENTE PRINCIPAL: App
   ----------------------------------------------------------------
   Es el "padre" que coordina todo y donde se ven los tres patrones
   en acción.
   ================================================================ */
function App() {
  // Estado del contador (vive en el padre: patrón de callbacks).
  const [cuenta, setCuenta] = useState(0);

  // -------- PATRÓN 1: CALLBACKS (definidos en el padre) --------
  // Estas funciones se pasan como props al hijo <Contador />.
  const incrementar = () => setCuenta((anterior) => anterior + 1);
  const reiniciar = () => setCuenta(0);

  // -------- PATRÓN 3: OPERADOR SPREAD --------
  // 3.a) Spread para copiar un objeto SIN modificar el original.
  const perfilBase = { nombre: "Joan", rol: "Estudiante", ciudad: "Bogotá" };
  // Copiamos todas las propiedades de perfilBase y cambiamos solo "rol".
  const perfilEditado = { ...perfilBase, rol: "Desarrollador React" };

  // 3.b) Spread para unir dos arreglos en uno nuevo.
  const equipoA = [
    { nombre: "Ana", rol: "Diseño", ciudad: "Medellín" },
    { nombre: "Luis", rol: "Backend", ciudad: "Cali" },
  ];
  const equipoB = [{ nombre: "Sofía", rol: "QA", ciudad: "Pereira" }];
  const equipoCompleto = [...equipoA, ...equipoB];

  return (
    <div className="app">
      <h1>Patrones en React</h1>
      <p className="subtitulo">
        Demostración de callbacks, prop children y operador spread
      </p>

      {/*
        PATRÓN 2 (children) + PATRÓN 1 (callbacks) juntos:
        - <Tarjeta> envuelve contenido => eso llega como "children".
        - Dentro ponemos <Contador> y le pasamos los callbacks.
      */}
      <Tarjeta titulo="1 y 2 · Callbacks dentro de una Tarjeta (children)">
        <p className="nota">
          El estado vive en el padre; el Contador solo avisa con callbacks.
        </p>
        <Contador
          valor={cuenta}
          onIncrementar={incrementar}
          onReiniciar={reiniciar}
        />
      </Tarjeta>

      {/*
        PATRÓN 3 (spread) con un objeto:
        En vez de escribir nombre={...} rol={...} ciudad={...}
        pasamos TODAS las props de golpe con {...perfilEditado}.
      */}
      <Tarjeta titulo="3a · Spread para pasar props de un objeto">
        <p className="nota">
          Las props se expanden desde el objeto con <code>{"{...perfil}"}</code>
          .
        </p>
        {/* {...perfilEditado} equivale a:
            nombre="Joan" rol="Desarrollador React" ciudad="Bogotá" */}
        <Perfil {...perfilEditado} />
      </Tarjeta>

      {/*
        PATRÓN 3 (spread) con arreglos:
        equipoCompleto se armó uniendo equipoA y equipoB con spread.
        Luego recorremos el arreglo y, de nuevo, usamos spread para
        pasar cada objeto como props de <Perfil />.
      */}
      <Tarjeta titulo="3b · Spread para unir arreglos y pasar props">
        <p className="nota">
          equipoA + equipoB se combinaron con <code>[...a, ...b]</code>.
        </p>
        <div className="lista-perfiles">
          {equipoCompleto.map((persona, indice) => (
            // key: React necesita un identificador único por elemento.
            <Perfil key={indice} {...persona} />
          ))}
        </div>
      </Tarjeta>
    </div>
  );
}

/* ================================================================
   MONTAJE DE LA APLICACIÓN
   ----------------------------------------------------------------
   Tomamos el div#root del index.html y le pedimos a React que
   renderice <App /> allí. A partir de aquí React controla el DOM.
   ================================================================ */
const contenedor = document.getElementById("root");
const raiz = ReactDOM.createRoot(contenedor);
raiz.render(<App />);
