function ContentPage() {



    return(
        <>
        <section className="py-25 px-5 bg-white text-center">
            <h2 className="font:[Poppins] text-[2.5rem] font-bold text-black mb-[20px] ">Create Your <span className="text-[#ffbf00]">Shipment</span></h2>
            
            <div className="flex justify-center gap-10 mb-[100px] flex-wrap">
                <div className="bg-white backdrop-blur-[10px] border border-gray-300  rounded-[0.5vw] px-[30px] py-10 w-[320px] text-center transition-all duration-300 hover:shadow-2xl ">
                    <div className="text-5xl mb-5">🚀</div>
                    <h3 className="font:[Poppins] text-2xl font-bold text-black mb-[10px]">Express</h3>
                    <p className="text-base text-gray-600 mb-2.5">1-2 Days Delivery</p>
                    <p  className="text-[1.2rem] text-[#ffbf00] mb-[20px]">***</p>
                    <a href="#"className="px-8 py-4 text-base font-bold font:[Poppins] bg-[#ffbf00] rounded-[0.5vw] cursor-pointer no-underline transition-all duration-300 hover:bg-[#ca9903]    ">
                    Select</a>
                </div>
                <div  className="bg-white backdrop-blur-[10px] border border-gray-300   rounded-[0.5vw] px-[30px] py-10 w-[320px] text-center transition-all duration-300 hover:shadow-2xl ">
                    <div className="text-5xl mb-5">📦</div>
                    <h3 className="font:[Poppins] text-2xl font-bold text-black mb-[10px]">Normal</h3>
                    <p  className="text-base text-gray-600 mb-2.5">3-5 Days Delivery</p>
                    <p className="text-[1.5rem] text-[#ffbf00] mb-[20px]">***</p>
                    <a href="#" className="px-8 py-4 text-base font-bold font:[Poppins] rounded-[0.5vw] cursor-pointer no-underline transition-all duration-300 bg-[#ffbf00] hover:bg-[#ca9903]  ">
                    Select</a>
                </div>
                <div  className="bg-white backdrop-blur-[10px] border border-gray-300   rounded-[0.5vw] px-[30px] py-10 w-[320px] text-center transition-all duration-300  hover:shadow-2xl ">
                    <div className="text-5xl mb-5">🏠</div>
                    <h3 className="font:[Poppins] text-2xl font-bold text-black mb-[10px]">Standard</h3>
                    <p className="text-base text-gray-600 mb-2.5">5-7 Days Delivery</p>
                    <p className="text-[1.2rem] text-[#ffbf00] mb-[20px]">***</p>
                    <a href="#" className="px-8 py-4 text-base font-bold font:[Poppins] rounded-[0.5vw] cursor-pointer no-underline transition-all duration-300 bg-[#ffbf00] hover:bg-[#ca9903]  ">
                    Select</a>
                </div>
                </div>
                </section>
        
        </>

    )
}

export default ContentPage