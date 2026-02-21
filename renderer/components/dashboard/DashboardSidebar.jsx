import { useState } from "react";
import {
  Home,
  User,
  LayoutDashboard,
  Plus,
  FileCheck,
  LogOut,
  HardHat,
  Menu,
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home },
  { label: "My Account", icon: User },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Add Test", icon: Plus },
  { label: "Report Approval", icon: FileCheck },
  { label: "Logout", icon: LogOut },
];

const DashboardSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside
      className={`fixed left-0 top-0 h-screen flex flex-col justify-between z-30 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
      style={{ backgroundColor: "#f5c100" }}
    >
      {/* TOP SECTION */}
      <div>
        {/* Logo */}
        <div
          className={`flex flex-col items-center pt-8 pb-6 border-b border-white/20 ${
            isCollapsed ? "px-2" : ""
          }`}
        >
          <div
            className={`rounded-full bg-white flex items-center justify-center shadow-md transition-all ${
              isCollapsed ? "w-10 h-10 mb-2" : "w-16 h-16 mb-3"
            }`}
          >
            <HardHat
              className={`${isCollapsed ? "w-6 h-6" : "w-9 h-9"}`}
              style={{ color: "#f5c100" }}
            />
          </div>

          {!isCollapsed && (
            <>
              <h1 className="text-lg font-bold text-gray-900 tracking-tight">
                bookURtest
              </h1>
              <p className="text-[10px] text-gray-800 mt-0.5 tracking-widest uppercase">
                Material Testing
              </p>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = activeItem === item.label;

            return (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white text-yellow-600 font-bold shadow-sm"
                    : "text-gray-900 hover:bg-black/10"
                } ${isCollapsed ? "justify-center px-2" : ""}`}
                title={isCollapsed ? item.label : ""}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />

                {!isCollapsed && (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-yellow-600" />
                    )}
                  </>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col items-center pb-6 gap-4">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-3 rounded-full bg-white/30 hover:bg-white/50 transition-all shadow-md"
        >
          <Menu className="w-5 h-5 text-gray-800" />
        </button>

        {/* Footer */}
        {!isCollapsed && (
          <div className="text-xs text-gray-700 text-center">
            © 2026 bookURtest
          </div>
        )}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
