import { Route, Routes } from "react-router-dom"
import Navbar from "../Components/Navbar"


function RoutePage({activeModule, onSelect} :Navbarprops) {


    return(

        <>
        <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/Create ShipmentPage" element={<CreateShipmentPage/>} />
      <Route path="/ForBusiness" element={<ForBusinessPage/>} />

    </Routes>


        </>
    )
}
export default RoutePage