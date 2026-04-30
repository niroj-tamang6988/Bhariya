function ContentPage() {



    return(
        <>
        <div >
        <section className="py-25 px-5 bg-[#0B0B0C] text-center">
            <h2 className="font-[Poppins] text-[2.5rem] font-bold text-[#D4AF37] mb-[20px] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">Create Your Shipment</h2>
            
            <div className="flex justify-center gap-10 mb-[100px] flex-wrap">
                <div className="bg-[rgba(17,17,17,0.8)] backdrop-blur-[10px] border border-[rgba(212,175,55,0.2)] rounded-3xl px-[30px] py-10 w-[320px] text-center transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:border-[#D4AF37] hover:shadow-[0_20px_25px_-5px_rgba(212,175,55,0.1),0_10px_10px_-5px_rgba(212,175,55,0.04)]">
                    <div className="text-5xl mb-5">🚀</div>
                    <h3 className="font-[Poppins] text-2xl font-bold text-[#D4AF37] mb-[10px]">Express</h3>
                    <p className="text-base text-[#A1A1AA] mb-2.5">1-2 Days Delivery</p>
                    <p  className="text-[1.2rem] text-[#D4AF37] mb-[20px]">Rs</p>
                    <a href="#"className="px-8 py-4 text-base font-bold font-[Poppins] rounded-2xl cursor-pointer no-underline transition-all duration-300 bg-[#D4AF37] text-[#0B0B0C] hover:bg-[#B8952A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40">
                    Select</a>
                </div>
                <div  className="bg-[rgba(17,17,17,0.8)] backdrop-blur-[10px] border border-[rgba(212,175,55,0.2)] rounded-3xl px-[30px] py-10 w-[320px] text-center transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:border-[#D4AF37] hover:shadow-[0_20px_25px_-5px_rgba(212,175,55,0.1),0_10px_10px_-5px_rgba(212,175,55,0.04)]">
                    <div className="text-5xl mb-5">📦</div>
                    <h3 className="font-[Poppins] text-2xl font-bold text-[#D4AF37] mb-[10px]">Normal</h3>
                    <p  className="text-base text-[#A1A1AA] mb-2.5">3-5 Days Delivery</p>
                    <p className="text-[1.2rem] text-[#D4AF37] mb-[20px]">Rs</p>
                    <a href="#" className="px-8 py-4 text-base font-bold font-[Poppins] rounded-2xl cursor-pointer no-underline transition-all duration-300 bg-[#D4AF37] text-[#0B0B0C] hover:bg-[#B8952A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40">
                    Select</a>
                </div>
                <div  className="bg-[rgba(17,17,17,0.8)] backdrop-blur-[10px] border border-[rgba(212,175,55,0.2)] rounded-3xl px-[30px] py-10 w-[320px] text-center transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] hover:border-[#D4AF37] hover:shadow-[0_20px_25px_-5px_rgba(212,175,55,0.1),0_10px_10px_-5px_rgba(212,175,55,0.04)]">
                    <div className="text-5xl mb-5">🏠</div>
                    <h3 className="font-[Poppins] text-2xl font-bold text-[#D4AF37] mb-[10px]">Standard</h3>
                    <p className="text-base text-[#A1A1AA] mb-2.5">5-7 Days Delivery</p>
                    <p className="text-[1.2rem] text-[#D4AF37] mb-[20px]">Rs</p>
                    <a href="#" className="px-8 py-4 text-base font-bold font-[Poppins] rounded-2xl cursor-pointer no-underline transition-all duration-300 bg-[#D4AF37] text-[#0B0B0C] hover:bg-[#B8952A] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40">
                    \Select</a>
                </div>
                </div>
                </section>
            </div>
        
        </>

    )
}

export default ContentPage