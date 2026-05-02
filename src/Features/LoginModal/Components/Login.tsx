import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Register from "./Register"

function Login() {
    const [activeTab, setActiveTab] = useState<"login" | "register">("login")
    const navigate = useNavigate()

    return (
        <div className="flex fixed top-0 left-0 w-full h-full bg-black/80 z-[2000] backdrop-blur-sm justify-center items-center">
            <div className="bg-[#111111]/95 backdrop-blur-xl border border-[#d4af37]/30 rounded-2xl p-8 w-[90%] max-w-[400px] shadow-2xl relative">
                <button onClick={() => navigate(-1)}
                    className="absolute cursor-pointer top-4 right-4 text-[#A1A1AA] hover:text-[#D4AF37] text-xl font-bold transition-colors duration-300">
                    &times;
                </button>
                
                <div className="text-center mb-8">
                    <h2 className="font-serif text-[#D4AF37] mb-2">Welcome to Bhariyaa</h2>
                    <p className="text-[#A1A1AA] text-sm">Sign in to your account or create a new one</p>
                </div>

                <div className="flex gap-4 mb-6">
                    <button onClick={() => setActiveTab("login")}
                        className={`flex-1 py-2 rounded-lg font-semibold transition-colors duration-300 
                            ${activeTab === "login" ? "bg-[#D4AF37] text-[#0B0B0C]" : "text-[#A1A1AA] border border-[#D4AF37]/30"}`}>
                        Login
                    </button>
                    <button onClick={() => setActiveTab("register")}
                        className={`flex-1 py-2 rounded-lg font-semibold transition-colors duration-300 
                            ${activeTab === "register" ? "bg-[#D4AF37] text-[#0B0B0C]" : "text-[#A1A1AA] border border-[#D4AF37]/30"}`}>
                        Register
                    </button>
                </div>

                {activeTab === "login" ? (
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-[#A1A1AA] text-sm">Email or Mobile Number</label>
                            <input type="text" placeholder="Enter your email or mobile number" required
                                className="px-3 py-2 bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-[#A1A1AA] text-sm">Password</label>
                            <input type="password" placeholder="Enter your password" required
                                className="px-3 py-2 bg-[#0B0B0C] border border-[#D4AF37]/30 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D4AF37]" />
                        </div>
                        <button type="submit"
                            className="bg-[#D4AF37] text-[#0B0B0C] py-2 rounded-lg font-semibold hover:bg-[#B8952A] transition-colors duration-300">
                            Sign In
                        </button>
                        <p className="text-center text-[#A1A1AA] text-sm">
                            Don't have an account?{" "}
                            <span onClick={() => setActiveTab("register")} className="text-[#D4AF37] cursor-pointer">
                                Create one
                            </span>
                        </p>
                    </form>
                ) : (
                    <Register onSwitch={() => setActiveTab("login")} />
                )}

            </div>
        </div>
    )
}

export default Login
