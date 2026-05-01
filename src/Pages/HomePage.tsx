import HeroSection from "../Features/Home/Components/HeroSection"
import CoverageSection from "../Features/Home/Components/CoverageSection"
import Footer from "../Components/Footer"
import TrustedBy from "../Features/Home/Components/TrustedBy"

function HomePage(){



    return(
        <>
        <div className="bg-[#0B0B0C] ">
        <HeroSection/>
        <CoverageSection/>
        <TrustedBy/>
        <Footer/>
        </div>
        </>
    )
}

export default HomePage