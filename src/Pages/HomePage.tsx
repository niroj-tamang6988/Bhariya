import HeroSection from "../Features/Home/Components/HeroSection"
import CoverageSection from "../Features/Home/Components/CoverageSection"
import TrustedBy from "../Features/Home/Components/TrustedBy"

function HomePage(){



    return(
        <>
        <div className="bg-[#0B0B0C] min-h-screen ">
        <HeroSection/>
        <CoverageSection/>
        <TrustedBy/>
        </div>
        </>
    )
}

export default HomePage