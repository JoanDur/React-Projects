/*
  ================================================================
  App.jsx — Componente principal
  ----------------------------------------------------------------
  Es el "padre" que coordina todo y donde se ven los tres patrones
  en acción, trabajando con COMPONENTES y PROPS:

    1) CALLBACKS       -> App pasa funciones al hijo <Contador />.
    2) PROP CHILDREN   -> <Tarjeta> envuelve contenido (children).
    3) OPERADOR SPREAD -> expandir objetos/arreglos y pasar props.

  Usamos useState solo para que el contador reaccione; el foco del
  proyecto son los tres patrones.
  ================================================================
*/
import { useState } from "react";
import Tarjeta from "./components/Tarjeta.jsx";
import Contador from "./components/Contador.jsx";
import Perfil from "./components/Perfil.jsx";

function App() {
  // Estado del contador. Vive en el padre -> base del patrón de callbacks.
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

export default App;
