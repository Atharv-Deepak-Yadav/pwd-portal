import { TrendingUp, CheckCircle, Clock, AlertCircle } from "lucide-react";

const StatCards = ({ tests = [] }) => {
  const total = tests.length;
  const approved = tests.filter((t) => t.approvalStatus === "Approved").length;
  const pending = tests.filter((t) => t.approvalStatus === "Pending").length;
  const rejected = tests.filter((t) => t.reportStatus === "Rejected").length;

  const cards = [
    {
      label: "Total Tests",
      value: total.toLocaleString(),
      icon: TrendingUp,
      bg: "from-blue-600 to-blue-700",
    },
    {
      label: "Approved Reports",
      value: approved.toLocaleString(),
      icon: CheckCircle,
      bg: "from-green-600 to-green-700",
    },
    {
      label: "Pending Review",
      value: pending.toLocaleString(),
      icon: Clock,
      bg: "from-orange-500 to-orange-600",
    },
    {
      label: "Rejected",
      value: rejected.toLocaleString(),
      icon: AlertCircle,
      bg: "from-red-600 to-red-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`bg-gradient-to-br ${card.bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer text-white relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="text-sm font-medium opacity-90">{card.label}</div>
            <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-sm">
              <card.icon className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-4xl font-bold">{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;