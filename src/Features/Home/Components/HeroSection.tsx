import { useNavigate } from "react-router-dom";

function HeroSection () {

    const navigate = useNavigate()
    return(
    <>
      <section className=" flex flex-column justify-center items-center text-center relative bg-[#f8f8f8]  overflow-hidden p-(0 20px) before:content-[''] before:absolute before:inset-0 ] before:bg-center before:bg-cover before:animate-spinSlow" >
        <div className="relative z-10 max-w-[800px] ">      
          <h1 className="mt-50 font-poppins: Poppins text-[3rem] font-bold text-black]  ">
            Fast, Reliable International</h1>
            <h1 className=" font-poppins: Poppins text-[3rem] font-bold text-[#ffbf00] mb-5">
               Courier Delivery</h1>
          <p className="text-[1rem] mb-10 text-black font-poppins: Poppins leading-relaxed">
            Express and standard shipments across Australia, America, Europe and beyond, backed by customs clearance support, package insurance, guaranteed delivery windows, and 24/7 assistance.</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <button onClick={() => navigate("/CreateShipmentPage")}  
            className="px-8 py-3 font-poppins: Poppins rounded-[0.5vw] transition-all duration-300 cursor-pointer  bg-[#ffbf00] text-[#0B0B0C] border-2 border-[#ffbf00]  hover:border-[#ffbf00] hover:-translate-y-0.5 hover:shadow-lg" >
                Ship Today - Guaranteed Delivery</button>
            <button onClick={() => navigate("/TrackPage")} 
            className="px-8 text-[#ffbf00]  py-3 text-base bg-white rounded-[0.5vw] transition-all duration-300 cursor-pointer font-poppins: Poppins bg-transparent textblck] border-2 border-[#ffbf00] hover:bg-[#ffbf00] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]" >
                Track Package Instantly</button>
            <button onClick={() => navigate("/ForBusinessPage")}
             className="px-8 py-3 text-base text-[#ffbf00] bg-white  rounded-[0.5vw] transition-all duration-300 cursor-pointer font-poppins: Poppins bg-transparent  border-2 border-[#ffbf00] hover:bg-[#ffbf00] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]" >
                Business Solutions - Save Time</button>
            </div>
        </div>
        </section>

       
        </>
    )
}

export default HeroSection