import './App.css'
import DashboardPage from "./Pages/DashboardPage"
import { Routes, Route } from "react-router-dom";
import CreateShipmentPage from './Pages/CreateShipmentPage';


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardPage/>} />
      <Route path="/DashboardPage" element={<DashboardPage/>} />
      <Route path="/CreateShipmentPage" element={<CreateShipmentPage/>} />
      </Routes>
    </>
  )
}

export default App
