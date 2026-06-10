export function StatCard({ title, value, description, tone = "default" }) {
  return (
    <article className={`stat-card ${tone}`}>
      <span>{title}</span>
      <strong>{value}</strong>
      <p>{description}</p>
    </article>
  );
}
