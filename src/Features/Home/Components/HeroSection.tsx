

function HeroSection () {

    return(
    <>
      <section className="h-100vh flex flex-column justify-center items-center text-center relative bg-[#0B0B0C]  overflow-hidden p-(0 20px) before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,...')] before:bg-center before:bg-cover before:animate-spinSlow" >
        <div className="relative z-10 max-w-[800px] px-">      
          <h1 className="font-[Playfair_Display] text-[3rem] font-bold text-[#D4AF37] mb-5 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">Fast, Reliable International Courier Delivery</h1>
          <p className="text-[1.2rem] mb-10 text-[#A1A1AA] leading-relaxed">Express and standard shipments across Australia, America, Europe and beyond, backed by customs clearance support, package insurance, guaranteed delivery windows, and 24/7 assistance.</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <a className="px-8 py-3 font-bold rounded-2xl transition-all duration-300 cursor-pointer font-[Poppins] bg-[#D4AF37] text-[#0B0B0C] border-2 border-[#D4AF37] hover:bg-[#B8952A] hover:border-[#B8952A] hover:-translate-y-0.5 hover:shadow-lg" >
                Ship Today - Guaranteed Delivery</a>
            <a className="px-8 py-3 text-base font-bold rounded-2xl transition-all duration-300 cursor-pointer font-[Poppins] bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]" >
                Track Package Instantly</a>
            <a className="px-8 py-3 text-base font-bold rounded-2xl transition-all duration-300 cursor-pointer font-[Poppins] bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0C] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]" >
                Business Solutions - Save Time</a>
            </div>
        </div>
        </section>

       
        </>
    )
}

export default HeroSection