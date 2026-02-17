import { useState } from "react";
import { Home, User, LayoutDashboard, Plus, FileCheck, LogOut, HardHat } from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home },
  { label: "My Account", icon: User },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Add Test", icon: Plus },
  { label: "Report Approval", icon: FileCheck },
  { label: "Logout", icon: LogOut },
];

const DashboardSidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-blue-800 flex flex-col z-30">
      {/* Logo Area */}
      <div className="flex flex-col items-center pt-8 pb-6 border-b border-blue-700/50">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-3">
          <HardHat className="w-9 h-9 text-blue-800" />
        </div>
        <h1 className="text-lg font-bold text-white tracking-tight">
          bookURtest
        </h1>
        <p className="text-[10px] text-blue-300 mt-0.5 tracking-widest uppercase">
          Material Testing
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-white/20 text-white font-bold"
                  : "text-blue-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white/80" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 pb-6 text-xs text-blue-400 text-center">
        © 2026 bookURtest
      </div>
    </aside>
  );
};

export default DashboardSidebar;
