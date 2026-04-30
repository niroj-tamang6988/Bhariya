

function ShipmentForm() {


    return(
            <>
            
            <div className="  bg-[#0B0B0C] mb-30 ">
              <form className="max-w-[900px] mx-auto bg-[rgba(17,17,17,0.8)] backdrop-blur-[10px] p-[50px] rounded-3xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-[rgba(212,175,55,0.2)]">
                <div className="mb-20">
                    <h3 className="text-[#D4AF37] mb-[20px] text-[1.5rem] font-[sans-serif] font-bold text-center">
                        Sender Details</h3>
                    <div className="flex gap-[20px] text-center">
                        <div className="flex-1 ">
                            <label className="block mb-[8px] text-[#A1A1AA] font-medium" >Name</label>
                            <input className="w-100 px-2 py-3 bg-[rgba(11,11,12,0.8)] border border-[rgba(194,206,33,0.3)] rounded-xl text-[#F5F5F5] text-base transition-colors duration-300 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
                             required/> 
                        </div>
                        <div className="flex-1">
                            <label className="block mb-[8px] text-[#A1A1AA] font-medium">Phone</label>
                            <input className="w-100 py-3 text-[#F5F5F5] border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]"  required>
                            </input>
                        </div>
                    </div>
                    <div className="flex gap-5 text-center">
                        <div className="flex-1">
                            <label className="block mb-[8px] text-[#A1A1AA] font-medium">Email</label>
                            <input className="w-100 py-3 border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]" required></input>
                        </div>
                        <div className="fex-1">
                            <label className="block mb-[8px] text-[#A1A1AA] font-medium">
                                Address</label>
                            <input className="w-100 py-3 border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]" required></input>
                        </div>
                    </div>
                </div>
                

                {/* Receiver Details */}
                 <div className="mb-20">
                    <h3 className="text-[#D4AF37] mb-[20px] text-[1.5rem] font-[sans-serif] font-bold text-center">
                        Receiver Details</h3>
                    <div className="flex gap-[20px] text-center">
                        <div className="flex-1 ">
                            <label className="block mb-[8px] text-[#A1A1AA] font-medium" >Name</label>
                            <input className="w-100 px-2 py-3 bg-[rgba(11,11,12,0.8)] border border-[rgba(194,206,33,0.3)] rounded-xl text-[#F5F5F5] text-base transition-colors duration-300 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10"
                             required/> 
                        </div>
                        <div className="flex-1">
                            <label className="block mb-[8px] text-[#A1A1AA] font-medium">Phone</label>
                            <input className="w-100 py-3 text-[#F5F5F5] border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]"  required>
                            </input>
                        </div>
                    </div>
                    <div className="flex gap-5 text-center">
                        <div className="flex-1">
                            <label className="block mb-2 text-[#A1A1AA] font-medium">Email</label>
                            <input className="w-100 py-3 border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]" required></input>
                        </div>
                        <div className="fex-1">
                            <label className="block mb-2 text-[#A1A1AA] font-medium">
                                Address</label>
                            <input className="w-100 py-3 border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]" required></input>
                        </div>
                    </div>
                </div>


                {/* Package Details */} 
                <div className="mb-12.5">
                    <h3 className="text-[#D4AF37] mb-5 text-[1.5rem] font-[sans-serif] text-center font-bold">Package Details</h3>
                    <div className="flex gap-5 text-center">
                        <div className="mb-5 flex-1">
                            <label className="block mb-2 text-[#A1A1AA] font-medium ">
                                Package Weight (kg)</label>
                            <input className="w-100 py-3  text-[#cdcdd4] border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]" required/>
                        </div>
                        <div className="mb-12.5">
                            <label className="block mb-2 text-[#A1A1AA] font-medium">Destination</label>
                            <select className="w-100 py-3 text-[#cdcdd4] border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]"
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
                        <label className="block mb-2 text-center text-[#A1A1AA] font-medium">Service Type</label>
                        <select className="w-200 py-3 text-[#cdcdd4] border border-[rgba(194,206,33,0.3)] rounded-xl bg-[rgba(11,11,12,0.8)]"required>
                            <option value="">Select Service Type</option>
                            <option value="express">Express</option>
                            <option value="normal">Normal</option>
                            <option value="standard">Standard</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" className="block mb-2 text-[1.5rem] cursor-pointer text-center text-black font-[sans-serif] font-bold bg-[#D4AF37] w-200 py-3 rounded-xl " >Create Shipment</button>
            </form>
            </div>
          
            </>


    )
}

export default ShipmentForm