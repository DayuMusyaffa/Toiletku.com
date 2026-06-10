import { Building2 } from "lucide-react";
import { floors } from "../data/toilets.js";

export function Building() {
  return (
    <main className="page">
      <section className="page-heading compact">
        <div>
          <span className="eyebrow">Building</span>
          <h1>Daftar Area Toilet</h1>
          <p>Rancangan lokasi toilet dalam gedung berdasarkan lantai dan area.</p>
        </div>
      </section>

      <section className="building-list">
        {floors.map((floor) => (
          <article className="panel building-row" key={floor.id}>
            <div className="building-icon">
              <Building2 size={24} aria-hidden="true" />
            </div>
            <div>
              <h2>{floor.name}</h2>
              <p>{floor.area}</p>
            </div>
            <strong>{floor.rooms.length} kamar WC</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
