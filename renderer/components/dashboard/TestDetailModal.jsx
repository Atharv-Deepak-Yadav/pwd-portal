import { X, FileText, Upload, Download, ChevronDown } from "lucide-react";
import { useState } from "react";

const TestDetailModal = ({ test, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  if (!test) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Report Details</h2>
            <p className="text-sm text-gray-500 mt-1">
              {test.workName || "N/A"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              <Detail label="PAN Number" value={test.panNumber} />
              <Detail label="Aadhaar Number" value={test.aadhaarNumber} />
              <Detail label="Registration Number" value={test.registrationNumber} />
              <Detail label="Taluka" value={test.taluka} />
              <Detail label="Contractor Name" value={test.contractorName} />

              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Total Amount
                </div>
                <div className="text-xl font-bold text-gray-900">
                  ₹{(test.totalAmount || 0).toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              {/* DOCUMENTS */}
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Documents
                </div>

                <div className="space-y-2">
                  {test.documents?.length > 0 ? (
                    test.documents.map((doc, index) => (
                      <a
                        key={index}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-3 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium text-sm"
                      >
                        <FileText className="w-4 h-4" />
                        {doc.name}
                      </a>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No documents available</p>
                  )}
                </div>
              </div>

              {/* MATERIAL & TEST */}
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Material & Test
                </div>

                <div className="space-y-2">
                  {test.materials?.length > 0 ? (
                    test.materials.map((material, index) => {
                      const isExpanded = expandedCategories.includes(
                        material.category
                      );

                      return (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleCategory(material.category)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm font-medium text-gray-900"
                          >
                            <span>{material.category}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-4 py-3 bg-white">
                              <ul className="space-y-1.5">
                                {material.tests?.map((t, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-600 flex items-center gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm text-gray-500">
                      No material data available
                    </p>
                  )}
                </div>
              </div>

              {/* UPLOAD BUTTON */}
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold">
                <Upload className="w-4 h-4" />
                Upload Report
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Close
          </button>

          <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors">
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

/* 🔥 Small Reusable Component */
const Detail = ({ label, value }) => (
  <div>
    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
      {label}
    </div>
    <div className="text-base font-semibold text-gray-900">
      {value || "N/A"}
    </div>
  </div>
);

export default TestDetailModal;
