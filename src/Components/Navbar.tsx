import { useNavigate, useLocation } from "react-router-dom"
import { NavbarDetails } from "../Config/data.ts"
import bhariya from "../assets/bhariya.png"

const navRoutes: Record<string, string> = {
    "Home": "/",
    "Create Shipment": "/CreateShipmentPage",
    "Track Package": "/TrackPage",
    "For Business": "/ForBusinessPage",
    "Support": "/Support",
    "Login": "/Login",
}

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <header className="fixed top-0 w-full bg-[#f8f8f8] backdrop-blur-[10px] border-b border-[rgba(212,175,55,0.2)] z-[1000] px-8 py-4">
            <nav className="max-w-300 mx-auto flex justify-between items-center flex-wrap gap-4 relative">
                <div className="inline-flex items-center gap-3 no-underline">
                    <img src={bhariya} alt="Bhariyaa" className="h-15 w-20 cursor-pointer" onClick={() => navigate("/")} />
                </div>
                <div className="flex gap-5 items-center pr-20">
                    {NavbarDetails.map((nav) => (
                        <button     
                            key={nav}
                            onClick={() => navigate(navRoutes[nav] ?? "/")}
                            className={`px-3 py-2 font:[Poppins] rounded-md text-l font-medium hover:text-yellow-400 
                                ${location.pathname === navRoutes[nav] ? "text-yellow-400" : "text-black"}`}>
                            {nav}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
