import { Activity, DoorOpen, Wrench } from "lucide-react";
import { StatCard } from "../components/StatCard.jsx";
import { StatusLegend } from "../components/StatusLegend.jsx";
import { ToiletCard } from "../components/ToiletCard.jsx";
import { floors, getToiletStats } from "../data/toilets.js";

export function Dashboard() {
  const stats = getToiletStats();

  return (
    <main className="page">
      <section className="page-heading">
        <div>
          <span className="eyebrow">Realtime Monitoring</span>
          <h1>Dashboard Toilet Gedung</h1>
          <p>Memantau ketersediaan WC, penggunaan kamar, dan status perbaikan di setiap lantai.</p>
        </div>
        <div className="live-indicator">
          <Activity size={18} aria-hidden="true" />
          Live
        </div>
      </section>

      <section className="stats-grid" aria-label="Ringkasan status toilet">
        <StatCard title="Total Toilet" value={stats.total} description="Total kamar WC di gedung" />
        <StatCard title="Kosong" value={stats.kosong} description="Siap digunakan" tone="green" />
        <StatCard title="Digunakan" value={stats.digunakan} description="Ada orang di dalam" tone="red" />
        <StatCard title="Maintenance" value={stats.maintenance} description="Sedang diperbaiki" tone="yellow" />
      </section>

      <StatusLegend />

      <section className="dashboard-layout">
        <div className="toilet-grid">
          {floors.map((floor) => (
            <ToiletCard floor={floor} key={floor.id} />
          ))}
        </div>

        <aside className="panel activity-panel">
          <h2>Ringkasan Operasional</h2>
          <div className="activity-item">
            <DoorOpen size={18} aria-hidden="true" />
            <div>
              <strong>{stats.kosong} kamar kosong</strong>
              <span>Prioritaskan lantai dengan antrean paling ramai.</span>
            </div>
          </div>
          <div className="activity-item">
            <Wrench size={18} aria-hidden="true" />
            <div>
              <strong>{stats.maintenance} kamar maintenance</strong>
              <span>Jadwalkan teknisi dan tampilkan peringatan di pintu toilet.</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
