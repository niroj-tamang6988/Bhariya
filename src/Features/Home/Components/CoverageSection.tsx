

function CoverageSection (){


    return(
        <>
         <section className="py-25 px-5 bg-[#f8f8f8] text-[#ffbf00] ">
        <div className="max-w-[1000px] mx-auto mb-[50px] text-center" >
            <h2 className="font-poppins: Poppins text-[2.5rem] font-bold text-black " >
                International Coverage & </h2>
                <h2 className="font-poppins: Poppins text-[2.5rem] font-bold text-[#ffbf00] mb-[2rem]  ">Service Promise</h2>
            <p className="max-w-190 mx-auto text-black leading-[1.7] text-[1.05rem]">
                Bhariyaa connects your consignments to the world with reliable handling, customs expertise, and tiered delivery options so every shipment moves confidently from door to door.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            <div className="bg-white border border-gray-300 rounded-[0.5vw] p-[30px] shadow-[0_18px_30px_rgba(0,0,0,0.18)] text-left hover:bg-[#ffbf00] hover:-translate-y-0.5 hover:duration-700" >
                <h3 className="font-poppins: Poppins text-[1.35rem] text-black  mb-[15px]">
                    Global reach</h3>
                <p className="text-[black] font-poppins: Poppins  leading-[1.8] mb-0">
                    Delivery across major trade corridors including Australia, the Americas, Europe, Asia-Pacific, and emerging markets - with local partner networks for faster handoffs.</p>
            </div>

            <div className="bg-[#f8f8f8] border border-gray-300 rounded-[0.5vw] p-[30px] shadow-[0_18px_30px_rgba(0,0,0,0.18)] text-left hover:bg-[#ffbf00] hover:-translate-y-0.5 hover:duration-700" >
                <h3 className="font-poppins: Poppins text-[1.35rem] text-[black]  mb-[15px]">Customs support</h3>
                <p className="text-[black] font-poppins: Poppins  leading-[1.8] mb-0">Dedicated customs documentation and clearance guidance to keep international shipments moving smoothly and avoid cross-border delays.</p>
            </div >
            <div className="bg-[#f8f8f8] border border-gray-300 rounded-[0.5vw] p-[30px] shadow-[0_18px_30px_rgba(0,0,0,0.18)] text-left hover:bg-[#ffbf00] hover:-translate-y-0.5 hover:duration-700" >
                <h3 className="font-poppins: Poppins text-[1.35rem] text-[black] mb-[15px]">Service map</h3>
                <p className="text-[black] leading-[1.8] mb-0">Clear service choices for express, standard, and economy shipping that suit every budget and delivery urgency, with transparent tracking at every step.</p>
            </div>
        </div>
        </section>
        </>

    )
}

export default CoverageSection