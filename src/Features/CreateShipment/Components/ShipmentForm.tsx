

function ShipmentForm() {


    return(
            <>
            
            <div className="  bg-white mb-30 ">
              <form className="max-w-[900px] mx-auto bg-white backdrop-blur-[10px] p-[50px] rounded-[0.5vw] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-[rgba(212,175,55,0.2)]">
                <div className="mb-20">
                    <h3 className="text-black mb-[20px] text-[1.5rem] font:[poppins] font-bold text-center">
                        Sender <span className="text-[#ffbf00]">Details</span>
                    </h3>
                    <div className="flex gap-[20px] text-center">
                        <div className="flex-1 ">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">Name</label>
                            <input  placeholder="Enter your name"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black "
                             required/> 
                        </div>
                        <div className="flex-1  gap-[20px] text-center">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">Phone</label>
                            <input placeholder="Enter your phone number"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black"  required>
                            </input>
                        </div>
                    </div>
                    <div className="flex gap-5 text-center">
                        <div className="flex-1">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">Email</label>
                            <input placeholder="Enter your email"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black" required></input>
                        </div>
                        <div className="fex-1 gap-[20px] text-center">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">
                                Address</label>
                            <input placeholder="Enter your address"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black" required></input>
                        </div>
                    </div>
                </div>
                

                {/* Receiver Details */}
                 <div className="mb-20">
                    <h3 className="text-black mb-[20px] text-[1.5rem] font:[poppins] font-bold text-center">
                        Receiver <span className="text-[#ffbf00]">Details</span>
                    </h3>

                    <div className="flex gap-[20px] text-center">
                        <div className="flex-1 ">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium" >Name</label>
                            <input placeholder="Enter name"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black"
                             required/> 
                        </div>

                        <div className="flex-1">
                            <label className="flex pl-[6px] mb-[8px] font:[poppins] text-gray-600 font-medium">Phone</label>
                            <input placeholder="Enter phone number"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black" required>
                            </input>
                        </div>
                    </div>
                    <div className="flex gap-5 text-center" >
                        <div className="flex-1">
                            <label  className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">Email</label>
                            <input placeholder="Enter email"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black" required></input>
                        </div>
                        <div className="fex-1">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">
                                Address</label>
                            <input placeholder="Enter address"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black" required></input>
                        </div>
                    </div>
                </div>


                {/* Package Details */} 
                <div className="mb-12.5">
                    <h3 className="text-black mb-5 text-[1.5rem] font:[poppins] text-center font-bold">
                        Package <span className="text-[#ffbf00]">Details</span></h3>
                    <div className="flex gap-[20px] text-center">
                        <div className="mb-5 flex-1">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">
                                Package Weight (kg)</label>
                            <input placeholder="Enter package weight"  className=" placeholder:text-gray-300 w-100 px-2 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black" required/>
                        </div>
                        <div className="mb-12.5">
                            <label className="flex pl-[6px] mb-[8px] text-gray-600 font-medium">Destination</label>
                            <select  className=" placeholder:text-gray-300 w-100 px-3 py-3 bg-white border border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black"
                              required>
                                <option>Select Destination</option>
                                <option>Australia</option>
                                <option >America</option>
                                <option >Europe</option>
                                <option >Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-left text-[#A1A1AA] font:[poppins] font-medium">Service Type</label>
                        <select  className=" placeholder:text-gray-text-gray-600 w-200 px-3 py-3 bg-white border font:[poppins] border-[rgba(194,206,33,0.3)] rounded-[0.5vw] text-black" required>
                            <option value="">Select Service Type</option>
                            <option value="express">Express</option>
                            <option value="normal">Normal</option>
                            <option value="standard">Standard</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" className="block mb-2 text-[1.5rem] cursor-pointer text-center text-black font:[poppins] bg-[#ffbf00] w-200 py-3 rounded-[0.5vw] " >
                    Create Shipment</button>
            </form>
            </div>
          
            </>


    )
}

export default ShipmentForm