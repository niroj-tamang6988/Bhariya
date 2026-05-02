import { Link } from "react-router-dom";

function Footer() {


    return(
        <>
        <footer  className=" mt-30 bg-[#0B0B0C] relative overflow-hidden  bg-[linear-gradient(135deg,#0B0B0C_0%,#111111_100%)] border-t border-[rgba(212,175,55,0.2)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[1px] before:bg-[linear-gradient(90deg,transparent,#D4AF37,transparent)]" >
        <div className="max-w-300 mx-auto p-0">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 pt-16 px-8 pb-8">
                <div className="text-[#F5F5F5]">
                    <div className="block font-[Poppins] text-[2rem] font-bold text-[#D4AF37] no-underline mb-2" >
                        <a >Bhariyaa</a>
                        <p className="font-[Poppins] text-[1.1rem] text-[#D4AF37] mb-4 font-semibold" >Fast, Secure Global Shipping</p>
                    </div>
                    <p className="text-[#A1A1AA] leading-relaxed mb-8 text-[0.95rem]">
                        Delivering across Australia, America, Europe and beyond with trust and speed.
                        Your premium international courier service partner.
                    </p>
                    <div className="flex gap-4" >
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" title="Facebook" aria-label="Facebook">📘</a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" title="Twitter" aria-label="Twitter">🐦</a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" title="LinkedIn" aria-label="LinkedIn">💼</a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" title="Instagram" aria-label="Instagram">📷</a>
                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] no-underline text-[1.2rem] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.3)]" title="YouTube" aria-label="YouTube">📺</a>
                    </div>
                </div>

                <div className="text-[#F5F5F5]">
                    <h3 className="relative font-[Poppins] text-[1.2rem] text-[#D4AF37] mb-6 font-semibold
                        after:content-[''] after:absolute after:-bottom-1.25 after:left-0 after:w-7.5 after:h-0.5 after:bg-[#D4AF37] after:rounded-sm">
                        Quick Links</h3>
                    <ul className="list-none p-0 m-0" >
                        <li className="mb-3"><Link to="/DashboardPage" className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" 
                                  > Home</Link></li>
                        <li className="mb-3"><Link to="/CreateShipmentPage" className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" 
                                           > Create Shipment</Link></li>
                        <li className="mb-3"><Link to="/TrackPage" className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" 
                                           > Track Package</Link></li>
                        <li className="mb-3"><a className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" 
                                             href="business.html">   For Businesses</a></li>
                        <li className="mb-3"><a className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]"
                                            href="support.html">   Support</a></li> 
                                               
                    </ul>
                </div>

                <div className="text-[#F5F5F5]" >
                    <h3 className="relative font-[Poppins] text-[1.2rem] text-[#D4AF37] mb-6 font-semibold
                                        after:content-[''] after:absolute after:-bottom-1.25 after:left-0 after:w-7.5 after:h-0.5 after:bg-[#D4AF37] after:rounded-sm">
                            Services</h3>
                    <ul className="list-none p-0 m-0" >
                        <li className="mb-3">
                                <a className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" 
                                 href="shipment.html">Express Shipping</a></li>
                        <li className="mb-3" >
                                <a className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]"  href="shipment.html">
                                    Normal Shipping</a></li>
                        <li className="mb-3" >
                                <a className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" href="shipment.html">
                                        Standard Shipping</a></li>
                        <li className="mb-3">
                                <a className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" href="business.html">
                                        Business Solutions</a></li>
                        <li className="mb-3" >
                                <a className="relative text-[#A1A1AA] no-underline text-[0.95rem] transition-all duration-300 hover:text-[#D4AF37] hover:pl-2 before:content-[''] before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-0 before:bg-[#D4AF37] before:transition-all before:duration-300 hover:before:w-[6px]" href="business.html">
                                    API Integration</a></li>
                    </ul>
                </div>

                <div className="text-[#F5F5F5]" >
                    <h3  className="relative font-[Poppins] text-[1.2rem] text-[#D4AF37] mb-6 font-semibold
                                        after:content-[''] after:absolute after:-bottom-1.25 after:left-0 after:w-7.5 after:h-0.5 after:bg-[#D4AF37] after:rounded-sm">
                                            Contact Info</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-[#A1A1AA] text-[0.95rem]">
                            <span className="text-[#D4AF37] text-[1.1rem]">📞</span>
                            <span>1-800-BHARIYA</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#A1A1AA] text-[0.95rem]" >
                            <span className="text-[#D4AF37] text-[1.1rem]">✉️</span>
                            <span>support@bhariyaa.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#A1A1AA] text-[0.95rem]" >
                            <span className="text-[#D4AF37] text-[1.1rem]">🕒</span>
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#A1A1AA] text-[0.95rem]" >
                            <span className="text-[#D4AF37] text-[1.1rem]" >🌍</span>
                            <span>Global Coverage</span>
                        </div>
                    </div>
                </div>

                <div  className="text-[#F5F5F5]" >
                    <h3 className="relative font-[Poppins] text-[1.2rem] text-[#D4AF37] mb-6 font-semibold
                                        after:content-[''] after:absolute after:-bottom-1.25 after:left-0 after:w-7.5 after:h-0.5 after:bg-[#D4AF37] after:rounded-sm">Stay Updated</h3>
                    <p className="text-[#A1A1AA] leading-relaxed mb-8 text-[0.95rem] ">Get the latest shipping updates and exclusive offers.</p>
                    <form className="flex flex-col gap-4" action="#" method="post">
                        <input   className="px-3 py-3 bg-[rgba(11,11,12,0.8)] border border-[rgba(212,175,55,0.3)] rounded-lg text-[#F5F5F5] text-[0.9rem] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all duration-300"
                         type="email"  placeholder="Enter your email" required/>
                        <button className="bg-[#D4AF37] text-[#0B0B0C] px-3 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-300 hover:bg-[#B8952A]"
                         type="submit">Subscribe</button>
                    </form>
                    <p className="text-[0.85rem] text-[#D4AF37] mt-2">Get 10% off your first shipment!</p>
                </div>
            </div>

            <div className="border-t border-[#d4af37]/10 p-8 bg-[#0B0B0C]/50" >
                <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
                    <p className="text-[#A1A1AA] text-[0.9rem] m-0">
                        &copy; 2026 Bhariyaa International Courier. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-[#A1A1AA] no-underline text-[0.9rem] transition-colors duration-300 ease-in-out hover:text-[#D4AF37]">
                            Privacy Policy</a>
                        <a href="#" className="text-[#A1A1AA] no-underline text-[0.9rem] transition-colors duration-300 ease-in-out hover:text-[#D4AF37]">
                            Terms of Service</a>
                        <a href="#" className="text-[#A1A1AA] no-underline text-[0.9rem] transition-colors duration-300 ease-in-out hover:text-[#D4AF37]">
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