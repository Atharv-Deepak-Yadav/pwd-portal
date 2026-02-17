import { ClipboardList, Send, Loader, XCircle } from "lucide-react";
import { mockTests } from "../../data/mockTests";

const StatCards = () => {
  const total = mockTests.length;
  const sent = mockTests.filter((t) => t.reportStatus === "Sent").length;
  const inProcess = mockTests.filter((t) => t.reportStatus === "In-process").length;
  const rejected = mockTests.filter((t) => t.reportStatus === "Rejected").length;

  const cards = [
    {
      label: "Total Test",
      value: total,
      icon: ClipboardList,
      color: "text-blue-700",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      label: "Send Report",
      value: sent,
      icon: Send,
      color: "text-green-600",
      bg: "bg-green-50 border-green-100",
    },
    {
      label: "In-process Report",
      value: inProcess,
      icon: Loader,
      color: "text-indigo-700",
      bg: "bg-indigo-50 border-indigo-100",
    },
    {
      label: "Rejected Report",
      value: rejected,
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-50 border-red-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`rounded-xl p-5 shadow-sm border flex flex-col items-center text-center gap-2 ${card.bg}`}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm">
            <card.icon className={`w-5 h-5 ${card.color}`} />
          </div>
          <span className="text-3xl font-bold text-gray-800">{card.value}</span>
          <span className="text-sm text-gray-500 font-medium">{card.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatCards;

