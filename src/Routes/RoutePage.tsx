import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "../Components/Navbar"
import HomePage from "../Pages/HomePage"
import CreateShipmentPage from "../Pages/CreateShipmentPage"
import ForBusinessPage from "../Pages/ForBusinessPage"
import SupportPage from "../Pages/SupportPage"
import LoginPage from "../Pages/LoginPage"
import Footer from "../Components/Footer"
import TrackPackagePage from "../Pages/TrackPackagePage"

function RoutePage() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
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
                <Route path="/Login" element={<LoginPage/>} />
                <Route path="/TrackPage" element={< TrackPackagePage/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default RoutePage
