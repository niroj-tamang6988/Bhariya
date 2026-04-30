import HomePage from "./HomePage"
import CreateShipmentPage from "./CreateShipmentPage"
import Navbar from "../Components/Navbar"
import { useState } from "react";


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
                 
                  </main>
                


        </div>
        
        
        </>
    )
}

export default DashboardPage