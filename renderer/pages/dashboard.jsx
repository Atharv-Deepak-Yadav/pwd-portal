import { useState, useEffect } from "react";
import Head from "next/head";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import StatCards from "../components/dashboard/StatCards";
import TestTable from "../components/dashboard/TestTable";
import { fetchDashboardData, transformApiData } from "../services/api";



export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
     const apiData = await fetchDashboardData();
     const formatted = transformApiData(apiData);
     setTests(formatted);




      setError(null);
    } catch (err) {
      console.error("Error loading dashboard:", err);
      setError(err.message);
      // Fallback to empty array if API fails
      setTests([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>bookURtest — Laboratory Dashboard</title>
      </Head>

      <div className="min-h-screen flex" style={{ backgroundColor: "#fffbeb" }}>
        <DashboardSidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />

       <main
  className={`flex-1 transition-all duration-300 ${
    isSidebarCollapsed ? "ml-16" : "ml-60"
  }`}
>

          <header className="px-8 py-6" style={{ backgroundColor: "#f5c100" }}>
            <h1 className="text-2xl font-bold text-gray-900">
              Laboratory — Overview
            </h1>
            <p className="text-sm text-gray-800 mt-1">
              Civil Construction Material Testing Dashboard
            </p>
          </header>

          <div className="px-8 py-6 space-y-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Loading dashboard data...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700">Error: {error}</p>
                <button
                  onClick={loadDashboardData}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Retry
                </button>
              </div>
            ) : (
              <>
                <StatCards tests={tests} />
                <TestTable tests={tests} />
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}