import { MapPin } from "lucide-react";
import { StatusBadge } from "./StatusBadge.jsx";
import { statusMeta } from "../data/toilets.js";

export function ToiletCard({ floor }) {
  return (
    <article className="panel toilet-card">
      <div className="toilet-card-header">
        <div>
          <h2>{floor.name}</h2>
          <p>
            <MapPin size={15} aria-hidden="true" />
            {floor.area}
          </p>
        </div>
        <span className="room-count">{floor.rooms.length} kamar</span>
      </div>

      <div className="room-list">
        {floor.rooms.map((room) => {
          const meta = statusMeta[room.status];

          return (
            <div className="room-row" key={room.id}>
              <div className="room-visual" aria-label={`${room.name} ${meta.label}`}>
                <span className={`room-square ${meta.className}`} />
              </div>
              <div className="room-info">
                <strong>{room.name}</strong>
                <span>{meta.label}</span>
              </div>
              <StatusBadge status={room.status} />
            </div>
          );
        })}
      </div>
    </article>
  );
}
