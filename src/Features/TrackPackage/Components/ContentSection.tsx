function ContentSection() {
  return (
    <div className="pt-20">
        <section className="py-25 px-5 bg-[#111111] text-center">
            <div className="max-w-[500px] mx-auto mb-15">
                <input placeholder="Enter Tracking ID"
                    className="w-full px-5 py-4 bg-[rgba(11,11,12,0.8)] backdrop-blur-[10px] border border-[#A1A1AA]/30 rounded-2xl text-[#F5F5F5] text-lg mb-5 shadow-md placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#D4AF37] focus:ring-[3px] focus:ring-[#D4AF37]/10" />
                <button className="bg-[#D4AF37] text-[#0B0B0C] px-8 py-4 text-lg font-bold font-[sans-serif] rounded-2xl cursor-pointer transition-all duration-300 shadow-md hover:bg-[#B8952A] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)]">
                    Track Now
                </button>
            </div>

            <div className="max-w-[800px] mx-auto relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-1 before:h-full before:-translate-x-1/2 before:rounded-sm before:bg-[linear-gradient(to_bottom,#D4AF37_0%,#D4AF37_75%,#A1A1AA_75%,#A1A1AA_100%)]">

                <div className="flex items-center mb-15 relative">
                    <div className="w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 z-10 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                    <div className="w-1/2 px-8 py-5 text-center border border-[#D4AF37] mr-110 rounded-2xl">
                        <h3 className="text-[#D4AF37] font-bold font-[sans-serif] text-lg mb-1">
                            Order Placed</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-2">
                            Your shipment has been successfully placed and is being processed.</p>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                        Completed</span>
                    </div>
                </div>

                <div className="flex items-center mb-15 relative">
                    <div className="w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 z-10 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                    <div className="w-1/2 ml-110 px-5 py-8 text-center border border-[#D4AF37] rounded-2xl">
                        <h3 className="text-[#F5F5F5] font-semibold text-lg mb-1">In Transit</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-2">Your package is on its way to the destination.</p>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">Completed</span>
                    </div>
                </div>

                <div className="flex items-center mb-15 relative">
                    <div className="w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 z-10 bg-[#D4AF37] animate-pulse" />
                    <div className="w-1/2 px-8 py-5 text-center border border-[#D4AF37] mr-110 rounded-2xl">
                        <h3 className="text-[#F5F5F5] font-semibold text-lg mb-1">Out for Delivery</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-2">Your package is out for delivery and will arrive soon.</p>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">Current</span>
                    </div>
                </div>

                <div className="flex items-center mb-15 relative">
                    <div className="w-5 h-5 rounded-full absolute left-1/2 -translate-x-1/2 z-10 bg-[#A1A1AA]" />
                    <div className="w-1/2 ml-110 px-5 py-8 text-center border border-[#D4AF37] rounded-2xl">
                        <h3 className="text-[#F5F5F5] font-semibold text-lg mb-1">
                        Delivered</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-2">
                            Your package has been successfully delivered.</p>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#A1A1AA]/20 text-[#A1A1AA]">
                        Pending</span>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default ContentSection
