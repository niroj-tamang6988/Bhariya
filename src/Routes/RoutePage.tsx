import { Route, Routes } from "react-router-dom"
import Navbar from "../Components/Navbar"
import HomePage from "../Pages/HomePage"
import CreateShipmentPage from "../Pages/CreateShipmentPage"
import ForBusinessPage from "../Pages/ForBusinessPage"
import SupportPage from "../Pages/SupportPage"
import Footer from "../Components/Footer"

function RoutePage() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/DashboardPage" element={<HomePage />} />
                <Route path="/CreateShipmentPage" element={<CreateShipmentPage />} />
                <Route path="/ForBusinessPage" element={<ForBusinessPage />} />
                {/* |<Route path="/TrackPage" element={<TrackPage />} /> */}
                <Route path="/Support" element={<SupportPage/>} />
            </Routes>
            <Footer />
        </>
    )
}

export default RoutePage
