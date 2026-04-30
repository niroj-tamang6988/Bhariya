import Footer from "../Components/Footer"
import ContentPage from "../Features/CreateShipment/Components/ContentPage"
import ShipmentForm from "../Features/CreateShipment/Components/ShipmentForm"



function CreateShipmentPage () {


    return(


        <>
        <div className="  bg-[#0B0B0C] ">
        <ContentPage/>
        <ShipmentForm/>
        <Footer/>
        </div>
        </>
    )
}

    export default CreateShipmentPage