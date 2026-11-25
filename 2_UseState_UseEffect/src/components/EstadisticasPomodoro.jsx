export default function EstadisticasPomodoro({ completados }) {
  return (
    <div className="estadisticas-box">
      Pomodoros completados: <strong>{completados}</strong>
    </div>
  );
}