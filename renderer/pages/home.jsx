import Head from "next/head";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import StatCards from "../components/dashboard/StatCards";
import TestTable from "../components/dashboard/TestTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>bookURtest — Laboratory Dashboard</title>
      </Head>

      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 ml-60">
          {/* Header */}
          <header className="px-8 pt-8 pb-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Laboratory —{" "}
              <span className="text-blue-700">Overview</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Civil Construction Material Testing Dashboard
            </p>
          </header>

          {/* Content */}
          <div className="px-8 py-6 space-y-6">
            <StatCards />
            <TestTable />
          </div>
        </main>
      </div>
    </>
  );
}
