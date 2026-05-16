function SupportPage() {



    return(
        <>
        <div className="bg-white mt-10 min-h-screen ">
        <div className="max-w-300 mx-auto py-20 px-5 text-center">

    
    <h1 className="font:[Poppins] text-5xl font-bold mb-4 ">
        Get <span className="text-[#ffbf00]">Support</span>
    </h1>

    
    <p className="text-[1.2rem] text-black mb-16 max-w-[600px] mx-auto">
        We're here to help you with all your shipping needs. Choose the support option that works best for you.
    </p>

  
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">
        
        <div className="relative overflow-hidden bg-white backdrop-blur-[20px] border border-gray-600 rounded-2xl p-12 text-center transition-all duration-500 shadow-md hover:border-[#D4AF37]  hover:-translate-y-2.5 ">
            <span className="text-6xl mb-6 block transition-transform duration-300 group-hover:scale-110">💬</span>
            <h3 className="font:[Poppins] text-2xl font-bold text-[#ffbf00] mb-4">
                Live Chat
            </h3>

            <p className=" mb-8 leading-[1.6]">
                Get instant help from our support team through our live chat feature. Available 24/7 for immediate assistance with your shipping queries.
            </p>

            <button 
                className="bg-[#ffbf00] text-[#0B0B0C] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#B8952A] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
                Start Chat
            </button>
        </div>

       
        <div className="relative overflow-hidden bg-white backdrop-blur-[20px] border border-gray-600 rounded-2xl p-12 text-center transition-all duration-500 shadow-md hover:border-[#ffbf00] hover:-translate-y-[10px]  ">
            <span className="text-6xl mb-6 block transition-transform duration-300 group-hover:scale-110">📞</span>

            <h3 className="font:[Poppins] text-2xl font-bold text-[#ffbf00] mb-4">
                Call Support
            </h3>

            <p className=" mb-8 leading-[1.6]">
                Speak directly with our customer service representatives. Our phone lines are open 24/7 with expert assistance for all your shipping needs.
            </p>

            <a href="tel:+1800BHARIYA"
                className="bg-[#ffbf00] text-[#0B0B0C] px-8 py-3 rounded-lg font-semibold inline-block transition-all duration-300 hover:bg-[#B8952A] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
                Call Now
            </a>
        </div>

        
        <div className="relative overflow-hidden bg-white backdrop-blur-[20px] border border-gray-600 rounded-2xl p-12 text-center transition-all duration-500 shadow-md hover:border-[#ffbf00] hover:-translate-y-[10px] ">

            <span className="text-6xl mb-6 block transition-transform duration-300 group-hover:scale-110">✉️</span>

            <h3 className="font:[Poppins] text-2xl font-bold text-[#ffbf00] mb-4">
                Email Support
            </h3>

            <p className=" mb-8 leading-[1.6]">
                Send us detailed inquiries and we'll respond within 24 hours. Perfect for complex questions or when you need written documentation.
            </p>

            <a href="mailto:support@bhariyaa.com"
                className="bg-[#ffbf00]  px-8 py-3 rounded-lg font-semibold inline-block transition-all duration-300 hover:bg-[#B8952A] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
                Send Email
            </a>
        </div>

    </div>
</div>
</div>
        
        
         {/*Additional contact  */}
         <div className="mt-16 p-12 bg-white backdrop-blur-[10px] rounded-xl border border-gray-600">
    
    <h2 className="font:[Poppins] text-3xl font-bold text-center  text-[#ffbf00] mb-8">
        Additional Contact Information
    </h2>

    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">

        <div className="text-center">
            <div className="text-2xl mb-4">🕒</div>
            <div className="font-semibold  mb-2">Support Hours</div>
            <div>24/7 Available</div>
        </div>

        <div className="text-center">
            <div className="text-2xl mb-4">📍</div>
            <div className="font-semibold  mb-2">Global Coverage</div>
            <div >Australia, America, Europe & Beyond</div>
        </div>

        <div className="text-center">
            <div className="text-2xl mb-4">⚡</div>
            <div className="font-semibold  mb-2">Response Time</div>
            <div >
                Live Chat: Instant<br/>Email: Within 24 hours
            </div>
        </div>

    </div>
</div>
        </>


    )
}
export default SupportPage