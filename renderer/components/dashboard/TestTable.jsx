import { useState } from "react";
import { Eye } from "lucide-react";
import StatusBadge from "./StatusBadge";
import TestDetailModal from "./TestDetailModal";

const TestTable = ({ tests = [] }) => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;

  // Pagination calculations
  const totalPages = Math.ceil(tests.length / recordsPerPage);
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentRecords = tests.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Laboratory Reports
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Material testing reports and approval status
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left border-b border-gray-200">
                <th className="px-6 py-3.5 font-semibold text-gray-700 text-xs uppercase">
                  Work Name
                </th>
                <th className="px-6 py-3.5 font-semibold text-gray-700 text-xs uppercase">
                  Taluka
                </th>
                <th className="px-6 py-3.5 font-semibold text-gray-700 text-xs uppercase">
                  Contractor
                </th>
                <th className="px-6 py-3.5 font-semibold text-gray-700 text-xs uppercase">
                  Total Amount
                </th>
                <th className="px-6 py-3.5 font-semibold text-gray-700 text-xs uppercase">
                  Details
                </th>
                <th className="px-6 py-3.5 font-semibold text-gray-700 text-xs uppercase">
                  Status
                </th>
                <th className="px-6 py-3.5 font-semibold text-gray-700 text-xs uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {currentRecords.map((test, index) => (
                <tr
                  key={test.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 ${
                    index % 2 === 1 ? "bg-gray-50/50" : ""
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {test.workName}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{test.taluka}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {test.contractorName}
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ₹{test.totalAmount.toLocaleString("en-IN")}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-xs">
                    {test.details}
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={test.reportStatus} />
                  </td>
                  <td className="px-6 py-4">
                   <button
  onClick={() => setSelectedTest(test)}
  className="inline-flex items-center justify-center gap-2 
             min-w-[110px] h-9
             px-4
             rounded-lg 
             bg-green-600 hover:bg-green-700 
             text-white text-xs font-semibold 
             whitespace-nowrap
             transition-all"
>
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-between items-center px-6 py-4 border-t bg-gray-50">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < totalPages ? prev + 1 : prev
              )
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
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