import { LayoutDashboard, Users, Package, BarChart2, Settings, LogOut } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Clients" },
  { icon: Package, label: "Produits" },
  { icon: BarChart2, label: "Statistiques" },
  { icon: Settings, label: "Paramètres" },
  { icon: LogOut, label: "Déconnexion" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-6 space-y-8">
      <div className="text-2xl font-bold text-primary">Chipou Admin</div>
      <nav className="space-y-4">
        {navItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
