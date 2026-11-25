export default function Card({ titulo, children }) {
  return (
    <section className="card">
      {titulo && <h2 className="card-title">{titulo}</h2>}
      <div className="card-body">{children}</div>
    </section>
  );
}