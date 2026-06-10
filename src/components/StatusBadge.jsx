import { statusMeta } from "../data/toilets.js";

export function StatusBadge({ status }) {
  const meta = statusMeta[status];

  return (
    <span className={`status-badge ${meta.className}`}>
      <span className="status-dot" aria-hidden="true" />
      {meta.label}
    </span>
  );
}
