import HeroSection from "../Features/Home/Components/HeroSection"
import CoverageSection from "../Features/Home/Components/CoverageSection"
import TrustedBy from "../Features/Home/Components/TrustedBy"
import WhyChoose from "../Features/Home/Components/WhyChoose"

function HomePage(){



    return(
        <>
        <div className="bg-white min-h-screen ">
        <HeroSection/>
        <CoverageSection/>
        <TrustedBy/>
        <WhyChoose/>
        </div>
        </>
    )
}

export default HomePage