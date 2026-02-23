import DashboardSidebar from "./DashboardSidebar";
import { useState, useEffect } from "react";

export default function DashboardLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Force sidebar to be clickable
    const sidebar = document.querySelector("aside");
    if (sidebar) {
      sidebar.style.pointerEvents = "auto";
      sidebar.style.zIndex = "9999";
    }
  }, []);
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-60"
        }`}
        style={{ position: "relative", zIndex: 0, pointerEvents: "auto" }}
      >
        {children}
      </div>
    </div>
  );
}