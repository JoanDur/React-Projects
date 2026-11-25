export default function BotonAccion({
  texto,
  onClick,
  variante = "secondary",
  tipo = "button",
}) {
  return (
    <button
      type={tipo}
      onClick={onClick}
      className={`btn btn--${variante}`}
    >
      {texto}
    </button>
  );
}