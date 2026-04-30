import './App.css'
import Navbar from "./Components/Navbar"
import { Routes, Route } from "react-router-dom";
import CreateShipmentPage from './Pages/CreateShipmentPage';
import ForBusinessPage from "./Pages/ForBusinessPage";

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/Create ShipmentPage" element={<CreateShipmentPage/>} />
      <Route path="/ForBusiness" element={<ForBusinessPage/>} />

    </Routes>
    </>
  )
}

export default App
