import { BarChart3, Building2, MonitorCog } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: BarChart3 },
  { label: "Building", icon: Building2 },
  { label: "Monitoring", icon: MonitorCog },
];

export function Navbar({ activePage, onNavigate }) {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-mark">T</span>
        <div>
          <strong>ToiletKu</strong>
          <span>Smart Restroom Dashboard</span>
        </div>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.label;

          return (
            <button
              className={isActive ? "nav-link active" : "nav-link"}
              key={item.label}
              onClick={() => onNavigate(item.label)}
              type="button"
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
