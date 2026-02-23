import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSendOTP = () => {
    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number");
      return;
    }
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    alert(`Dummy OTP Generated: ${generatedOTP}`);
    localStorage.setItem("userPhone", phone);
    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/login-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* YELLOW OVERLAY - DARKER (70% opacity like image 2) */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/70 via-yellow-600/70 to-yellow-700/70"></div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      {/* CONTENT */}
      <div className="w-full max-w-7xl grid grid-cols-2 gap-20 items-center relative z-10">
        
        {/* LEFT SIDE - SAME AS IMAGE 1 */}
        <div className="space-y-10">
          <div>
            <p className="text-black font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-lg">
              🏗️ Construction Testing Portal
            </p>
            <h1 className="text-6xl font-black leading-tight mb-6 text-black" style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3), 4px 4px 8px rgba(0,0,0,0.2)"
            }}>
              Material Testing
              <br />
              Excellence
            </h1>
            <p className="text-2xl font-bold text-black" style={{
              textShadow: "1px 1px 3px rgba(0,0,0,0.3)"
            }}>
              Civil Construction Laboratory Dashboard
            </p>
          </div>

          <p className="text-lg text-black leading-relaxed max-w-xl font-semibold" style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
          }}>
            Professional material testing solutions for civil construction projects. Manage tests, reports, and operations with precision and security.
            <br />
            <br />
            <span className="font-black text-black text-lg">✓ Certified • ✓ Accurate • ✓ Professional</span>
          </p>

          {/* CONSTRUCTION IMAGE */}
          <img
            src="/images/construction.png"
            alt="Construction site"
            className="w-64 rounded-2xl shadow-2xl border-4 border-black/20 hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>

        {/* RIGHT SIDE - SAME AS IMAGE 1 */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/40">
            
            <div className="mb-10">
              <h2 className="text-4xl font-black text-gray-900">Welcome Back</h2>
              <p className="text-gray-600 text-base mt-3 font-medium">Sign in to access your dashboard</p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-xs font-black text-gray-700 uppercase tracking-widest block mb-4">
                  📱 Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400/20 transition-all outline-none text-gray-900 text-lg font-medium placeholder-gray-500"
                />
              </div>

              <button
                onClick={handleSendOTP}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-gray-900 font-black text-lg transition-all hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 active:scale-95 uppercase tracking-wider"
              >
                Send OTP
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm font-medium">
                Don't have an account?{" "}
                <span
                  onClick={() => router.push("/register")}
                  className="font-black text-yellow-600 cursor-pointer hover:text-yellow-700 underline"
                >
                  Register Here
                </span>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center font-semibold">
                🛡️ Enterprise-Grade Security • SSL Encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}