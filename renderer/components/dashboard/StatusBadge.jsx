const statusConfig = {
  Sent: {
    label: "Sent",
    className: "bg-green-100 text-green-700 border border-green-200",
  },
  "In-process": {
    label: "In-process",
    className: "bg-blue-100 text-blue-700 border border-blue-200",
  },
  Rejected: {
    label: "Rejected",
    className: "bg-red-100 text-red-700 border border-red-200",
  },
  Pending: {
    label: "Pending",
    className: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  },
};

const StatusBadge = ({ status }) => {
  const config = statusConfig[status] ?? statusConfig["Pending"];
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
