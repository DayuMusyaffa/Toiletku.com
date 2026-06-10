import { statusMeta } from "../data/toilets.js";

export function StatusLegend() {
  return (
    <section className="panel legend-panel">
      <div>
        <h2>Status Badge</h2>
        <p>Warna indikator untuk kondisi setiap kamar toilet.</p>
      </div>

      <div className="legend-list">
        {Object.entries(statusMeta).map(([key, meta]) => (
          <div className="legend-item" key={key}>
            <span className={`legend-swatch ${meta.className}`} />
            <span>
              {meta.colorName} = {meta.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
