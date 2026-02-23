import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

export default function MyAccount() {
  const [labData, setLabData] = useState({
    labName: "",
    labEmail: "",
    labDistrict: "",
    labTaluka: "",
    labAddress: "",
    labCity: "",
    labPhone: "",
    registrationDoc: null,
    labApprovalDoc: null,
    gstCertificateDoc: null,
    isoCertificateDoc: null,
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    branchName: "",
    cancelChequePic: null,
    applyGST: "No",
    gstNumber: "",
  });

  const [dragActive, setDragActive] = useState({});

  useEffect(() => {
    const labPhone = localStorage.getItem("userPhone") || "";
    const labName = localStorage.getItem("labName") || "";
    const labEmail = localStorage.getItem("labEmail") || "";

    setLabData((prev) => ({
      ...prev,
      labName: labName,
      labEmail: labEmail,
      labPhone: labPhone,
    }));
  }, []);

  const handleLabChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file") {
      setLabData({
        ...labData,
        [name]: files[0] || null,
      });
    } else {
      setLabData({
        ...labData,
        [name]: value,
      });
    }
  };

  const handleDrag = (e, field) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive({ ...dragActive, [field]: true });
  };

  const handleDragLeave = (field) => {
    setDragActive({ ...dragActive, [field]: false });
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive({ ...dragActive, [field]: false });
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setLabData({
        ...labData,
        [field]: e.dataTransfer.files[0],
      });
    }
  };

  const handleSubmit = () => {
    console.log("Lab Data:", labData);
  };

  return (
    <DashboardLayout>
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(217, 119, 6, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(217, 119, 6, 0.6);
          }
        }

        .header-animate {
          animation: fadeInDown 0.8s ease-out;
        }

        .card-animate {
          animation: fadeInUp 0.6s ease-out;
        }

        .section-animate {
          animation: fadeInUp 0.7s ease-out;
        }

        .avatar-pulse {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .input-focus {
          transition: all 0.3s ease;
        }

        .input-focus:focus {
          transform: scale(1.02);
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .drag-drop-zone {
          background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%);
          border: 2px dashed #fde047;
          border-radius: 12px;
          padding: 10px 16px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .drag-drop-zone.active {
          border-color: #d97706;
          background: linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%);
          box-shadow: 0 0 30px rgba(217, 119, 6, 0.2);
        }

        .drag-drop-zone:hover {
          border-color: #d97706;
          background: linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%);
        }

        .drag-drop-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .drag-drop-icon {
          font-size: 28px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .drag-drop-zone input[type="file"] {
          display: none;
        }

        .file-uploaded {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: linear-gradient(135deg, #fde047 0%, #fcd34d 100%);
          border-radius: 6px;
          color: #92400e;
          font-weight: 600;
          font-size: 11px;
          margin-top: 6px;
        }

        .premium-input {
  background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%);
  border: none;                     /* 🔥 Border removed */
  outline: none;                    /* Remove default outline */
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 13px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06); /* Soft premium shadow */
}

.premium-input:focus {
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.15); /* Focus glow */
}

        .section-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .section-header::before {
          content: '';
          width: 4px;
          height: 22px;
          background: linear-gradient(180deg, #d97706 0%, #f59e0b 100%);
          border-radius: 2px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        .doc-card {
  background: linear-gradient(135deg, #ffffff 0%, #fffbeb 100%);
  border: none;   /* 🔥 removed border */
  padding: 14px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06); /* soft premium shadow */
}

        .doc-card:hover {
          border-color: #d97706;
          box-shadow: 0 12px 30px rgba(217, 119, 6, 0.15);
          transform: translateY(-4px);
        }

        .doc-label {
          font-size: 12px;
          font-weight: 700;
        }

        .label-text {
          text-xs;
          font-weight: 700;
          color: #666;
          uppercase;
          tracking-wider;
          margin-bottom: 6px;
        }

        /* STICKY HEADER */
        .sticky-header {
          position: sticky;
          top: 0;
          z-index: 40;
          background-color: #f5c100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* STICKY HEADER - STAYS AT TOP WHEN SCROLLING */}
      <div className="sticky-header px-6 py-6 header-animate">
        <h1 className="text-3xl font-bold text-black">Laboratory Profile</h1>
        <p className="text-black/80 text-xs mt-1">
          Complete your laboratory information for premium services
        </p>
      </div>

      {/* SCROLLABLE CONTENT AREA */}
      <div className="p-6 min-h-screen" style={{ backgroundColor: "#f8f9fa" }}>
        
        {/* PREMIUM TOP CARD - YELLOW GRADIENT */}
        <div className="bg-gradient-to-br from-white via-yellow-50 to-white rounded-xl shadow-lg p-6 mb-6 flex items-start gap-6 border border-yellow-200 card-animate card-hover">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex items-center justify-center text-4xl font-bold text-white shadow-lg avatar-pulse flex-shrink-0">
            {labData.labName?.charAt(0) || "L"}
          </div>

          <div className="flex-1 pt-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome, {labData.labName || "Laboratory"}
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="label-text block mb-2">📛 Laboratory Name</label>
                <input
                  name="labName"
                  value={labData.labName}
                  onChange={handleLabChange}
                  className="w-full premium-input input-focus"
                  placeholder="Enter Laboratory Name"
                  style={{ pointerEvents: "auto" }}
                />
              </div>

              <div>
                <label className="label-text block mb-2">📧 Email Address</label>
                <input
                  name="labEmail"
                  value={labData.labEmail}
                  onChange={handleLabChange}
                  className="w-full premium-input input-focus"
                  placeholder="Enter Email"
                  style={{ pointerEvents: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* PREMIUM NOTE - YELLOW THEME */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-6 shadow-sm card-animate">
          <p className="text-gray-800 font-bold text-xs">
            ⚠️ Complete all required information to unlock premium features and gain access to the Book Test service.
          </p>
        </div>

        {/* LABORATORY INFO SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-yellow-200 section-animate card-hover">
          <div className="section-header">
            <h2 className="section-title">Laboratory Information</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "📍 Address", name: "labAddress", placeholder: "Enter Your Address" },
              { label: "🏙️ City", name: "labCity", placeholder: "Enter City" },
            ].map((field, idx) => (
              <div key={idx} style={{ animation: `fadeInUp 0.8s ease-out ${0.1 * idx}s both` }}>
                <label className="label-text block mb-2">{field.label}</label>
                <input
                  name={field.name}
                  value={labData[field.name]}
                  onChange={handleLabChange}
                  className="w-full premium-input input-focus"
                  placeholder={field.placeholder}
                  style={{ pointerEvents: "auto" }}
                />
              </div>
            ))}

            <div style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}>
              <label className="label-text block mb-2">🗺️ District</label>
              <select
                name="labDistrict"
                value={labData.labDistrict}
                onChange={handleLabChange}
                className="w-full premium-input input-focus"
                style={{ pointerEvents: "auto" }}
              >
                <option value="">Choose District</option>
                <option>Satara</option>
                <option>Pune</option>
                <option>Mumbai</option>
              </select>
            </div>

            <div style={{ animation: "fadeInUp 0.8s ease-out 0.3s both" }}>
              <label className="label-text block mb-2">📌 Taluka</label>
              <select
                name="labTaluka"
                value={labData.labTaluka}
                onChange={handleLabChange}
                className="w-full premium-input input-focus"
                style={{ pointerEvents: "auto" }}
              >
                <option value="">Choose Taluka</option>
                <option>Karad</option>
                <option>Phaltan</option>
                <option>Wai</option>
              </select>
            </div>

            <div className="col-span-2" style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}>
              <label className="label-text block mb-2">☎️ Phone Number</label>
              <input
                name="labPhone"
                value={labData.labPhone}
                readOnly
                className="w-full premium-input text-gray-600 bg-gray-100"
                style={{ pointerEvents: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* DOCUMENTS SECTION - COMPACT */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-yellow-200 section-animate card-hover">
          <div className="section-header">
            <h2 className="section-title">Documents & Certificates</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "📄 Registration/NABL Copy", name: "registrationDoc", icon: "🗂️" },
              { label: "✅ Lab Approval Certificate", name: "labApprovalDoc", icon: "📋" },
              { label: "🏛️ GST Certificate", name: "gstCertificateDoc", icon: "💼" },
              { label: "🏅 ISO Certificate", name: "isoCertificateDoc", icon: "⭐" },
            ].map((doc, idx) => (
              <div key={idx} className="doc-card" style={{ animation: `fadeInUp 0.8s ease-out ${0.1 * idx}s both` }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{doc.icon}</span>
                  <h3 className="doc-label text-gray-900">{doc.label}</h3>
                </div>
                
                <div
                  className={`drag-drop-zone ${dragActive[doc.name] ? 'active' : ''}`}
                  onDragOver={(e) => handleDrag(e, doc.name)}
                  onDragLeave={() => handleDragLeave(doc.name)}
                  onDrop={(e) => handleDrop(e, doc.name)}
                  onClick={() => document.getElementById(doc.name).click()}
                  style={{ pointerEvents: "auto" }}
                >
                  <input
                    id={doc.name}
                    name={doc.name}
                    type="file"
                    onChange={handleLabChange}
                    accept=".pdf,.jpg,.png,.jpeg"
                    style={{ pointerEvents: "auto" }}
                  />
                  <div className="drag-drop-content">
                    <div className="drag-drop-icon">📤</div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs">Drag & Drop</p>
                      <p className="text-xs text-gray-600">or click</p>
                    </div>
                  </div>
                </div>

                {labData[doc.name] && (
                  <div className="file-uploaded">
                    ✅ {labData[doc.name].name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BANK DETAILS SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-yellow-200 section-animate card-hover">
          <div className="section-header">
            <h2 className="section-title">Bank Details</h2>
          </div>
          <p className="text-gray-600 text-xs mb-4 font-medium">
            🔒 Secure your banking information for smooth transactions
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { label: "🏦 Bank Name", name: "bankName", placeholder: "Enter Bank Name" },
              { label: "🔑 IFSC Code", name: "ifscCode", placeholder: "Enter IFSC code" },
              { label: "💳 Account Number", name: "accountNumber", placeholder: "Enter Bank Account Number" },
              { label: "🏢 Branch Name", name: "branchName", placeholder: "Enter Branch Name" },
            ].map((field, idx) => (
              <div key={idx} style={{ animation: `fadeInUp 0.8s ease-out ${0.1 * idx}s both` }}>
                <label className="label-text block mb-2">{field.label}</label>
                <input
                  name={field.name}
                  value={labData[field.name]}
                  onChange={handleLabChange}
                  className="w-full premium-input input-focus"
                  placeholder={field.placeholder}
                  style={{ pointerEvents: "auto" }}
                />
              </div>
            ))}
          </div>

          <div className="doc-card" style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}>
            <h3 className="doc-label text-gray-900 flex items-center gap-2 mb-2">
              <span>📸</span> Cancel Cheque Photo
            </h3>
            <div
              className={`drag-drop-zone ${dragActive.cancelChequePic ? 'active' : ''}`}
              onDragOver={(e) => handleDrag(e, 'cancelChequePic')}
              onDragLeave={() => handleDragLeave('cancelChequePic')}
              onDrop={(e) => handleDrop(e, 'cancelChequePic')}
              onClick={() => document.getElementById('cancelChequePic').click()}
              style={{ pointerEvents: "auto" }}
            >
              <input
                id="cancelChequePic"
                name="cancelChequePic"
                type="file"
                onChange={handleLabChange}
                accept=".jpg,.png,.jpeg"
                style={{ pointerEvents: "auto" }}
              />
              <div className="drag-drop-content">
                <div className="drag-drop-icon">📸</div>
                <div>
                  <p className="font-bold text-gray-900 text-xs">Drag & Drop</p>
                  <p className="text-xs text-gray-600">or click</p>
                </div>
              </div>
            </div>

            {labData.cancelChequePic && (
              <div className="file-uploaded">
                ✅ {labData.cancelChequePic.name}
              </div>
            )}
          </div>
        </div>

        {/* GST SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-yellow-200 section-animate card-hover">
          <div className="section-header">
            <h2 className="section-title">GST Configuration</h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div style={{ animation: "fadeInUp 0.8s ease-out 0.1s both" }}>
              <label className="label-text block mb-2">💰 Apply GST to Test Amount</label>
              <select
                name="applyGST"
                value={labData.applyGST}
                onChange={handleLabChange}
                className="w-full premium-input input-focus"
                style={{ pointerEvents: "auto" }}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}>
              <label className="label-text block mb-2">🔢 GST Number (Optional)</label>
              <input
                name="gstNumber"
                value={labData.gstNumber}
                onChange={handleLabChange}
                className="w-full premium-input input-focus"
                placeholder="Enter GST Number"
                style={{ pointerEvents: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON - YELLOW THEME */}
        <div className="flex justify-center mb-8" style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
          <button 
            onClick={handleSubmit}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-amber-700 text-black px-8 py-3 rounded-lg font-bold text-sm transition-all hover:shadow-xl hover:scale-105"
            style={{ pointerEvents: "auto" }}
          >
            💾 Save & Update
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
