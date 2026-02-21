import { AlertCircle } from "lucide-react";

const StatusBadge = ({ status, rejectionReason }) => {
  const statusConfig = {
    Sent: {
      label: "Sent",
      className: "bg-green-100 text-green-700 border border-green-200",
      showDot: false,
    },
    "In-process": {
      label: "In-process",
      className: "bg-blue-100 text-blue-700 border border-blue-200",
      showDot: false,
    },
    Rejected: {
      label: "Rejected",
      className: "bg-red-100 text-red-700 border border-red-200",
      showDot: true,
    },
    Pending: {
      label: "Pending",
      className: "bg-yellow-100 text-yellow-700 border border-yellow-200",
      showDot: false,
    },
  };

  const config = statusConfig[status] ?? statusConfig["Pending"];

  return (
    <div className="relative inline-block group">
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold ${config.className}`}
      >
        {config.showDot && (
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
        )}
        {config.label}
        {config.showDot && rejectionReason && (
          <AlertCircle className="w-3.5 h-3.5 ml-0.5" />
        )}
      </span>

      {/* Tooltip on hover for rejected items */}
      {config.showDot && rejectionReason && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-64 z-50">
          <div className="font-semibold mb-1">Rejected by Senior</div>
          <div className="text-gray-300">{rejectionReason}</div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      )}
    </div>
  );
};

export default StatusBadge;