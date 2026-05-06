import { useNavigate } from "react-router-dom";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";

function Footer() {

  const navigate = useNavigate()
    return(
        <>
        <footer  className=" mt-30 bg-black relative overflow-hidden  before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-[linear-gradient(90deg,transparent,#D4AF37,transparent)]" >
        <div className="max-w-300 mx-auto p-0">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 pt-16 px-8 pb-8">
                <div className="text-[#F5F5F5]">
                    <div className="block font:poppins-Poppins text-[2rem] font-bold text-[#ffbf00] no-underline mb-2" >
                        <a >Bhariyaa</a>
                        <p className="font:[Poppins] text-[1.1rem] text-[#ffbf00] mb-4 font-semibold" >Fast, Secure Global Shipping</p>
                    </div>
                    <p className="text-white leading-relaxed mb-8 text-[0.95rem]">
                        Delivering across Australia, America, Europe and beyond with trust and speed.
                        Your premium international courier service partner.
                    </p>
                    <div className="flex gap-4" >
                        <a href="https://www.facebook.com" target="_blank" className="flex items-center justify-center w-10 h-10 bg-[#ffbf00] rounded-full text-black no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
                         title="Facebook" 
                        aria-label="Facebook"><RiFacebookBoxFill />
                        </a>
                        <a href="https://www.x.com" target="_blank" className="flex items-center justify-center w-10 h-10 bg-[#ffbf00] rounded-full text-black no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" 
                        title="Twitter" 
                        aria-label="Twitter">
                        <FaXTwitter /></a>
                        <a href="https://www.linkedin.com" target="_blank" className="flex items-center justify-center w-10 h-10 bg-[#ffbf00] rounded-full text-black no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" 
                        title="LinkedIn"
                         aria-label="LinkedIn">
                        <FaLinkedin /></a>
                        <a href="https://www.instagram.com" target="_blank" className="flex items-center justify-center w-10 h-10 bg-[#ffbf00] rounded-full text-black no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" 
                        title="Instagram"
                         aria-label="Instagram">
                        <FaInstagram /></a>
                        <a href="https://www.youtube.com" target="_blank" className="flex items-center justify-center w-10 h-10 bg-[#ffbf00] rounded-full text-black no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]"
                         title="YouTube" 
                        aria-label="YouTube">
                        <TiSocialYoutube /></a>
                    </div>
                </div>

                <div >
                    <h3 className="relative font:[Poppins] text-[1.2rem] text-[#ffbf00] mb-6 font-semibold">
                        Quick Links</h3>
                    <ul className="list-none p-0 m-0" >
                        <li className="mb-3"><button onClick={() => 
                            navigate("/")} 
                            className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]">
                            Home</button></li>
                        <li className="mb-3"><button onClick={() => 
                            navigate("/CreateShipmentPage")} 
                            className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]">
                            Create Shipment</button></li>
                        <li className="mb-3"><button onClick={() => 
                            navigate("/TrackPage")} 
                            className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]">
                            Track Package</button></li>
                        <li className="mb-3"><button onClick={() => 
                            navigate("/ForBusinessPage")} 
                            className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]">
                            For Businesses</button></li>
                        <li className="mb-3"><button onClick={() => 
                            navigate("/Support")} 
                            className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]">
                            Support</button></li>
                    </ul>
                </div>

                <div  >
                    <h3 className="relative font:[Poppins] text-[1.2rem] text-[#ffbf00] mb-6 font-semibold">
                            Services</h3>
                    <ul className="list-none p-0 m-0" >
                        <li className="mb-3">
                                <button onClick={() => 
                                navigate("/CreateShipmentPage")} 
                                className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" 
                                >Express Shipping</button></li>
                        <li className="mb-3" >
                                <button onClick={() => 
                                    navigate("/CreateShipmentPage")} 
                                    className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]"  >
                                    Normal Shipping</button></li>
                        <li className="mb-3" >
                                <button onClick={() => 
                                    navigate("/CreateShipmentPage")} 
                                    className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" >
                                        Standard Shipping</button></li>
                        <li className="mb-3">
                                <button onClick={() => 
                                navigate("/ForBusinessPage")} 
                                className="relative text-white no-underline text-[0.95rem] transition-all duration-300 hover:text-[#ffbf00] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" >
                                        Business Solutions</button></li>
                    </ul>
                </div>

                <div className="text-[#F5F5F5]" >
                    <h3  className="relative font:[Poppins] text-[1.2rem] text-[#ffbf00] mb-6 font-semibold">
                                            Contact Info</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-white text-[0.95rem]">
                            <span className="text-[1.1rem]">📞</span>
                            <span>1-800-BHARIYA</span>
                        </div>
                        <div className="flex items-center gap-3 text-white text-[0.95rem]" >
                            <span className=" text-[1.1rem]">✉️</span>
                            <span>support@bhariyaa.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-white text-[0.95rem]" >
                            <span className=" text-[1.1rem]">🕒</span>
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-3 text-white text-[0.95rem]" >
                            <span className=" text-[1.1rem]" >🌍</span>
                            <span>Global Coverage</span>
                        </div>
                    </div>
                </div>

                <div  className="text-[#F5F5F5]" >
                    <h3 className="relative font:[Poppins] text-[1.2rem] text-[#ffbf00] mb-6 font-semibold">
                        Stay Updated</h3>
                    <p className=" leading-relaxed mb-8 text-[0.95rem] ">Get the latest shipping updates and exclusive offers.</p>
                    <form className="flex flex-col gap-4" >
                        <input   className="px-3 py-3 bg-[rgba(11,11,12,0.8)] border border-[rgba(212,175,55,0.3)] rounded-lg text-white text-[0.9rem] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                         type="email"  placeholder="Enter your email" required/>
                        <button className="bg-[#ffbf00] text-[#0B0B0C] px-3 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#B8952A]"
                         type="submit">Subscribe</button>
                    </form>
                    <p className="text-[0.85rem] text-[#ffbf00] mt-2">Get 10% off your first shipment!</p>
                </div>
            </div>

            <div className="border-t border-[#d4af37]/10 p-8 bg-[#0B0B0C]/50" >
                <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
                    <p className="text-white text-[0.9rem] m-0">
                        &copy; 2026 Bhariyaa International Courier. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-white no-underline text-[0.9rem] transition-colors duration-300 ease-in-out hover:text-[#D4AF37]">
                            Privacy Policy</a>
                        <a href="#" className="text-white no-underline text-[0.9rem] transition-colors duration-300 ease-in-out hover:text-[#D4AF37]">
                            Terms of Service</a>
                        <a href="#" className="text-white  no-underline text-[0.9rem] transition-colors duration-300 ease-in-out hover:text-[#D4AF37]">
                            Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>        
        </>

    )
}

export default Footer