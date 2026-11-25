import { useState, useEffect, useCallback } from "react";
import "./styles.css";
import ModoSelector from "./components/ModoSelector";
import RelojDisplay from "./components/RelojDisplay";
import ControlesTimer from "./components/ControlesTimer";
import EstadisticasPomodoro from "./components/EstadisticasPomodoro";

const SEGUNDOS_TRABAJO = 25 * 60;
const SEGUNDOS_DESCANSO = 5 * 60;

export default function App() {
  const [modo, setModo] = useState("trabajo"); // "trabajo" | "descanso"
  const [segundosRestantes, setSegundosRestantes] = useState(SEGUNDOS_TRABAJO);
  const [activo, setActivo] = useState(false);
  const [completados, setCompletados] = useState(0);

  const manejarFinCiclo = useCallback(() => {
    setActivo(false);
    if (modo === "trabajo") {
      setCompletados((prev) => prev + 1);
      setModo("descanso");
      setSegundosRestantes(SEGUNDOS_DESCANSO);
    } else {
      setModo("trabajo");
      setSegundosRestantes(SEGUNDOS_TRABAJO);
    }
  }, [modo]);

  // Efecto 1: Temporizador con intervalo y función de limpieza (cleanup)
  useEffect(() => {
    if (!activo) return;

    const intervalo = setInterval(() => {
      setSegundosRestantes((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          manejarFinCiclo();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [activo, manejarFinCiclo]);

  const minutos = String(Math.floor(segundosRestantes / 60)).padStart(2, "0");
  const segundos = String(segundosRestantes % 60).padStart(2, "0");

  // Efecto 2: Actualizar título de la pestaña cuando cambia el tiempo o el modo
  useEffect(() => {
    const etiqueta = modo === "trabajo" ? "Trabajo" : "Descanso";
    document.title = `${minutos}:${segundos} · ${etiqueta}`;
  }, [minutos, segundos, modo]);

  const handleCambiarModo = (nuevoModo) => {
    setActivo(false);
    setModo(nuevoModo);
    setSegundosRestantes(
      nuevoModo === "trabajo" ? SEGUNDOS_TRABAJO : SEGUNDOS_DESCANSO
    );
  };

  const handleReiniciar = () => {
    setActivo(false);
    setSegundosRestantes(
      modo === "trabajo" ? SEGUNDOS_TRABAJO : SEGUNDOS_DESCANSO
    );
  };

  return (
    <main
      className={`pomodoro-container ${
        modo === "trabajo"
          ? "pomodoro-container--trabajo"
          : "pomodoro-container--descanso"
      }`}
    >
      <h1 className="pomodoro-title">Temporizador Pomodoro</h1>

      <ModoSelector modo={modo} onCambiarModo={handleCambiarModo} />

      <RelojDisplay
        minutos={minutos}
        segundos={segundos}
        modo={modo}
        activo={activo}
      />

      <ControlesTimer
        activo={activo}
        onToggleActivo={() => setActivo((prev) => !prev)}
        onReiniciar={handleReiniciar}
      />

      <EstadisticasPomodoro completados={completados} />
    </main>
  );
}