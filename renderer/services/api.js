const API_BASE_URL = "https://www.bookurtest.com/_functions";

// 🔐 Static Token from Mam
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzE2Nzk0MDR9.DGbsPHrDcHAuRC7ewwsvaxCQvhzktgN-g5TWTys4WkM";

// ✅ Fetch Dashboard Data
export const fetchDashboardData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/dashboard_data`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`, // if fails remove Bearer
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Dashboard API error:", error);
    throw error;
  }
};

// ✅ Transform API Data to Match Dashboard Table
export const transformApiData = (apiResponse) => {
  if (!apiResponse?.totalRooms?.items) return [];

  return apiResponse.totalRooms.items.map((item) => ({
    id: item._id,
    workName: item.nameOfWork || "N/A",

    taluka: item.selectDivision || "N/A",
    contractorName: item.userEmail?.split("@")[0] || "N/A",

    totalAmount: item.workOrderAmount || 0,

    // 🔥 ADD THESE BACK
    panNumber: item.serialNumber || "N/A",
    aadhaarNumber: "XXXX-XXXX-XXXX", // not available in API
    registrationNumber: item.workOrderNumber || "N/A",

    // 🔥 DOCUMENTS
    documents: [
      item.workOrderDocument && {
        name: "Work Order Document",
        url: item.workOrderDocument,
      },
      item.report && {
        name: "Report Document",
        url: item.report,
      },
    ].filter(Boolean),

    // 🔥 MATERIALS & TEST
    materials:
      item.repeater2Data?.map((r) => ({
        category: r.material,
        tests: r.testName.split(","),
      })) || [],

    reportStatus: item.status === "Done" ? "Sent" : "Pending",
    approvalStatus: item.status === "Done" ? "Approved" : "Pending",
  }));
};
