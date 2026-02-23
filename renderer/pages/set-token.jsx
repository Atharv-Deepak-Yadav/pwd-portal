import { useRouter } from "next/router";
import { useState } from "react";

export default function SetToken() {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [form, setForm] = useState({
    labName: "",
    whatsapp: "",
    otp: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendOtp = () => {
    if (!role || !form.whatsapp) {
      alert("Please fill all fields");
      return;
    }
    setOtpSent(true);
  };

  const handleCreate = () => {
    if (role === "Lab") {
      localStorage.setItem("labName", form.labName);
    }
    localStorage.setItem("userPhone", form.whatsapp);
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/token-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* YELLOW OVERLAY - 40% opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/70 via-yellow-600/70 to-yellow-700/70"></div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      {/* CONTENT */}
      <div className="w-full max-w-7xl grid grid-cols-2 gap-20 items-center relative z-10">
        
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <div>
            <p className="text-black font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-lg">
              ✓ Final Step
            </p>
            <h1 className="text-6xl font-black leading-tight mb-6 text-black" style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.2)"
            }}>
              Complete Your
              <br />
              Registration
            </h1>
            <p className="text-2xl font-bold text-black" style={{
              textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
            }}>
              Activate Your Dashboard
            </p>
          </div>

          <p className="text-lg text-black leading-relaxed max-w-xl font-semibold" style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
          }}>
            You're almost there! Verify your details and activate your professional testing dashboard. Access all premium features immediately.
            <br />
            <br />
            <span className="font-black text-black text-lg">✓ Instant Activation • ✓ Full Access • ✓ Premium Support</span>
          </p>

          {/* CONSTRUCTION IMAGE */}
          <img
            src="/images/construction.png"
            alt="Construction professional"
            className="w-64 rounded-2xl shadow-2xl border-4 border-black/20 hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/40">
            
            <div className="mb-10">
              <h2 className="text-4xl font-black text-gray-900">Complete Setup</h2>
              <p className="text-gray-600 text-base mt-3 font-medium">Final Verification</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-black text-gray-700 uppercase tracking-widest block mb-3">
                  🏢 Organization Type
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none text-gray-900 text-lg font-medium"
                >
                  <option value="">Select Organization Type</option>
                  <option value="Lab">Laboratory</option>
                  <option value="Contractor">Contractor</option>
                </select>
              </div>

              {role === "Lab" && (
                <div>
                  <label className="text-xs font-black text-gray-700 uppercase tracking-widest block mb-3">
                    🏭 Laboratory Name
                  </label>
                  <input
                    name="labName"
                    placeholder="Enter your laboratory name"
                    value={form.labName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none text-gray-900 text-lg font-medium placeholder-gray-500"
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-black text-gray-700 uppercase tracking-widest block mb-3">
                  📱 WhatsApp Number
                </label>
                <input
                  name="whatsapp"
                  placeholder="Enter WhatsApp number"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none text-gray-900 text-lg font-medium placeholder-gray-500"
                />
              </div>

              {!otpSent ? (
                <button
                  onClick={handleSendOtp}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 font-black text-lg transition-all hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 active:scale-95 uppercase tracking-wider mt-6"
                >
                  Send OTP
                </button>
              ) : (
                <>
                  <div>
                    <label className="text-xs font-black text-gray-700 uppercase tracking-widest block mb-3">
                      🔐 Enter OTP
                    </label>
                    <input
                      name="otp"
                      placeholder="Enter OTP received"
                      value={form.otp}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none text-gray-900 text-lg font-medium placeholder-gray-500"
                    />
                  </div>
                  <button
                    onClick={handleCreate}
                    className="w-full py-4 rounded-xl bg-gray-900 hover:bg-gray-950 text-white font-black text-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 uppercase tracking-wider border-2 border-yellow-400/30"
                  >
                    Create Account
                  </button>
                </>
              )}
            </div>

            {/* PROGRESS */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm font-medium mb-4 text-center">
                Step {otpSent ? "2" : "1"} of 2
              </p>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all ${otpSent ? "w-full" : "w-1/2"}`}></div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center font-semibold">
                🔒 Bank-Level Security • 256-bit Encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}