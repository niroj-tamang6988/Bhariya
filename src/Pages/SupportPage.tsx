function SupportPage() {



    return(
        <>
        <div className="bg-[#0B0B0C] min-h-screen ">
        <div className="max-w-300 mx-auto py-20 px-5 text-center">

    
    <h1 className="font-[Poppins] text-5xl font-bold text-[#D4AF37] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        Get Support
    </h1>

    
    <p className="text-[1.2rem] text-[#A1A1AA] mb-16 max-w-[600px] mx-auto">
        We're here to help you with all your shipping needs. Choose the support option that works best for you.
    </p>

  
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 mt-12">

        
        <div className="relative overflow-hidden bg-[rgba(17,17,17,0.8)] backdrop-blur-[20px] border border-[rgba(212,175,55,0.2)] rounded-2xl p-12 text-center transition-all duration-500 shadow-md hover:border-[#D4AF37] hover:shadow-[0_20px_25px_-5px_rgba(212,175,55,0.1),_0_10px_10px_-5px_rgba(212,175,55,0.04)] hover:-translate-y-[10px] hover:bg-[rgba(17,17,17,0.9)] group">

            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.1)] to-transparent transition-all duration-700 group-hover:left-full"></div>

            <span className="text-6xl mb-6 block transition-transform duration-300 group-hover:scale-110">💬</span>

            <h3 className="font-[Poppins] text-2xl font-bold text-[#D4AF37] mb-4">
                Live Chat
            </h3>

            <p className="text-[#A1A1AA] mb-8 leading-[1.6]">
                Get instant help from our support team through our live chat feature. Available 24/7 for immediate assistance with your shipping queries.
            </p>

            <button 
                className="bg-[#D4AF37] text-[#0B0B0C] px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-[#B8952A] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
                Start Chat
            </button>
        </div>

       
        <div className="relative overflow-hidden bg-[rgba(17,17,17,0.8)] backdrop-blur-[20px] border border-[rgba(212,175,55,0.2)] rounded-2xl p-12 text-center transition-all duration-500 shadow-md hover:border-[#D4AF37] hover:shadow-[0_20px_25px_-5px_rgba(212,175,55,0.1),_0_10px_10px_-5px_rgba(212,175,55,0.04)] hover:-translate-y-[10px] hover:bg-[rgba(17,17,17,0.9)] group">

            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.1)] to-transparent transition-all duration-700 group-hover:left-full"></div>

            <span className="text-6xl mb-6 block transition-transform duration-300 group-hover:scale-110">📞</span>

            <h3 className="font-[Poppins] text-2xl font-bold text-[#D4AF37] mb-4">
                Call Support
            </h3>

            <p className="text-[#A1A1AA] mb-8 leading-[1.6]">
                Speak directly with our customer service representatives. Our phone lines are open 24/7 with expert assistance for all your shipping needs.
            </p>

            <a href="tel:+1800BHARIYA"
                className="bg-[#D4AF37] text-[#0B0B0C] px-8 py-3 rounded-lg font-semibold inline-block transition-all duration-300 hover:bg-[#B8952A] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
                Call Now
            </a>
        </div>

        
        <div className="relative overflow-hidden bg-[rgba(17,17,17,0.8)] backdrop-blur-[20px] border border-[rgba(212,175,55,0.2)] rounded-2xl p-12 text-center transition-all duration-500 shadow-md hover:border-[#D4AF37] hover:shadow-[0_20px_25px_-5px_rgba(212,175,55,0.1),_0_10px_10px_-5px_rgba(212,175,55,0.04)] hover:-translate-y-[10px] hover:bg-[rgba(17,17,17,0.9)] group">

            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.1)] to-transparent transition-all duration-700 group-hover:left-full"></div>

            <span className="text-6xl mb-6 block transition-transform duration-300 group-hover:scale-110">✉️</span>

            <h3 className="font-[Poppins] text-2xl font-bold text-[#D4AF37] mb-4">
                Email Support
            </h3>

            <p className="text-[#A1A1AA] mb-8 leading-[1.6]">
                Send us detailed inquiries and we'll respond within 24 hours. Perfect for complex questions or when you need written documentation.
            </p>

            <a href="mailto:support@bhariyaa.com"
                className="bg-[#D4AF37] text-[#0B0B0C] px-8 py-3 rounded-lg font-semibold inline-block transition-all duration-300 hover:bg-[#B8952A] hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(212,175,55,0.4)]">
                Send Email
            </a>
        </div>

    </div>
</div>
</div>
        
        
        </>


    )
}
export default SupportPage