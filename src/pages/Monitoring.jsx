import { ToiletCard } from "../components/ToiletCard.jsx";
import { floors } from "../data/toilets.js";

export function Monitoring() {
  return (
    <main className="page">
      <section className="page-heading compact">
        <div>
          <span className="eyebrow">Monitoring</span>
          <h1>Monitoring Kamar WC</h1>
          <p>Tampilan detail untuk mengecek kamar kosong, digunakan, atau maintenance.</p>
        </div>
      </section>

      <section className="toilet-grid wide">
        {floors.map((floor) => (
          <ToiletCard floor={floor} key={floor.id} />
        ))}
      </section>
    </main>
  );
}
