import { useState } from "react";
import { mockTests } from "../../data/mockTests";
import StatusBadge from "./StatusBadge";
import TestDetailModal from "./TestDetailModal";

const TestTable = () => {
  const [selectedTest, setSelectedTest] = useState(null);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">Test List</h2>
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
            {mockTests.length} records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">Work Name</th>
                <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">Taluka</th>
                <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">Contractor</th>
                <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">Total Amount</th>
                <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">Details</th>
                <th className="px-5 py-3 font-semibold text-gray-500 text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTests.map((test, index) => (
                <tr
                  key={test.id}
                  className={`border-b border-gray-200 last:border-0 transition-colors hover:bg-blue-50/30 ${
                    index % 2 === 1 ? "bg-gray-50/50" : ""
                  }`}
                >
                  <td className="px-5 py-4 text-gray-800 font-medium max-w-[260px]">
                    <span className="line-clamp-2">{test.workName}</span>
                  </td>
                  <td className="px-5 py-4 text-gray-500">{test.taluka}</td>
                  <td className="px-5 py-4 text-gray-700">{test.contractorName}</td>
                  <td className="px-5 py-4 text-gray-800 font-medium">
                    ₹{test.totalAmount.toLocaleString("en-IN")}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => setSelectedTest(test)}
                      className="px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold hover:bg-green-600 transition-colors shadow-sm"
                    >
                      View More
                    </button>
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={test.reportStatus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedTest && (
        <TestDetailModal
          test={selectedTest}
          onClose={() => setSelectedTest(null)}
        />
      )}
    </>
  );
};

export default TestTable;
