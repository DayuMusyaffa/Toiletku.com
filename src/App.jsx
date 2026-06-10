import { useState } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Building } from "./pages/Building.jsx";
import { Monitoring } from "./pages/Monitoring.jsx";

const pages = {
  Dashboard,
  Building,
  Monitoring,
};

export default function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const Page = pages[activePage];

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <Page />
    </div>
  );
}
