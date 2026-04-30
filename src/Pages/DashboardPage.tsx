import HomePage from "./HomePage"
import CreateShipmentPage from "./CreateShipmentPage"
import Navbar from "../Components/Navbar"
import { useState } from "react";
import ForBusinessPage from "./ForBusinessPage";


function DashboardPage(){
    const[activeModule, setActiveModule] = useState("Home");
    

    const handleSelect = (module:string) => {
        setActiveModule(module);
    }


    return(
        <>
        <div >
            <Navbar
                activeModule={activeModule}
                onSelect={handleSelect}/>

                <main >
                 {activeModule === "Home" && <HomePage/>}
                 {activeModule ==="Create Shipment" && <CreateShipmentPage/>}
                 {activeModule === "For Business" && <ForBusinessPage/>}
                  </main>
                


        </div>
        
        
        </>
    )
}

export default DashboardPage