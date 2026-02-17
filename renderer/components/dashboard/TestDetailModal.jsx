import { X, Calendar, MapPin, User } from "lucide-react";
import StatusBadge from "./StatusBadge";

const TestDetailModal = ({ test, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                {test.id}
              </span>
              <StatusBadge status={test.reportStatus} />
            </div>
            <h2 className="text-lg font-bold text-gray-900 leading-tight">
              {test.workName}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Meta Info */}
        <div className="px-6 py-4 grid grid-cols-2 gap-3 border-b border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>{test.taluka}, {test.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <User className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>{test.contractorName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>
              {new Date(test.testDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <span className="text-green-600">₹</span>
            <span>₹{test.totalAmount.toLocaleString("en-IN")}</span>
          </div>
        </div>

        {/* Items Table */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
            Material Details
          </h3>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Material</th>
                  <th className="px-4 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Unit</th>
                  <th className="px-4 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Rate</th>
                  <th className="px-4 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody>
                {test.items.map((item, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-200 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}
                  >
                    <td className="px-4 py-2.5 text-gray-800">{item.material}</td>
                    <td className="px-4 py-2.5 text-right text-gray-500">{item.quantity}</td>
                    <td className="px-4 py-2.5 text-gray-500">{item.unit}</td>
                    <td className="px-4 py-2.5 text-right text-gray-500">₹{item.ratePerUnit.toLocaleString("en-IN")}</td>
                    <td className="px-4 py-2.5 text-right font-medium text-gray-800">
                      ₹{(item.quantity * item.ratePerUnit).toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-200 bg-gray-50">
                  <td colSpan={4} className="px-4 py-2.5 font-bold text-gray-800 text-right">Total</td>
                  <td className="px-4 py-2.5 text-right font-bold text-gray-800">
                    ₹{test.totalAmount.toLocaleString("en-IN")}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Remarks */}
        {test.remarks && (
          <div className="px-6 pb-6">
            <h3 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Remarks</h3>
            <p className="text-sm text-gray-500 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
              {test.remarks}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestDetailModal;

