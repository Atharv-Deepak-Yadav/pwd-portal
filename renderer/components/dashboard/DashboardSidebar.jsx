import { useRouter } from "next/router";
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
  { label: "Home", icon: Home, path: "/" },
  { label: "My Account", icon: User, path: "/dashboard/my-account" },
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Add Test", icon: Plus, path: "/dashboard/add-test" },
  { label: "Report Approval", icon: FileCheck, path: "/dashboard/report-approval" },
  { label: "Logout", icon: LogOut, path: "/" },
];

const DashboardSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const router = useRouter();

  const handleNavigation = (item) => {
    if (item.label === "Logout") {
      localStorage.removeItem("token");
    }
    router.push(item.path);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen flex flex-col justify-between z-40 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
      style={{ backgroundColor: "#f5c100" }}
    >
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center pt-8 pb-6 border-b border-white/20">
          <div
            className={`rounded-full bg-white flex items-center justify-center shadow-md ${
              isCollapsed ? "w-10 h-10 mb-2" : "w-16 h-16 mb-3"
            }`}
          >
            <HardHat
              className={`${isCollapsed ? "w-7 h-7" : "w-9 h-9"}`}
              style={{ color: "#f5c100" }}
            />
          </div>

          {!isCollapsed && (
            <>
              <h1 className="text-lg font-bold text-gray-900">
                bookURtest
              </h1>
              <p className="text-[10px] text-gray-800 uppercase">
                Material Testing
              </p>
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className={`mt-4 px-3 ${isCollapsed ? "space-y-4" : "space-y-1"}`}>
          {menuItems.map((item) => {
            const isActive = router.pathname === item.path;

            return (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`w-full flex items-center transition-all duration-200 ${
                  isCollapsed
                    ? "justify-center py-3 rounded-xl"
                    : "gap-3 px-4 py-3 rounded-lg"
                } ${
                  isActive
                    ? "bg-white text-yellow-600 font-bold shadow-sm"
                    : "text-gray-900 hover:bg-black/10"
                }`}
              >
                <item.icon
                  className={`${
                    isCollapsed ? "w-7 h-7" : "w-5 h-5"
                  }`}
                />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Toggle */}
      <div className="flex flex-col items-center pb-6">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-3 rounded-full bg-white/30 hover:bg-white/50 transition"
        >
          <Menu
            className={`${
              isCollapsed ? "w-6 h-6" : "w-5 h-5"
            } text-gray-800`}
          />
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;