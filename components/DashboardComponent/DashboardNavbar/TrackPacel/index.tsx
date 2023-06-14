

export function TrackPacel(){
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between ">
            <form className="flex flex-col lg:justify-between mb-[20px] lg:mb-[0px] lg:mr-[50px] lg:w-[600px] ">
                <h1 className="text-[20px] text-[#1E1E1E] font-[600] lg:text-center  ">Track Pacel</h1>

                <input className="p-[15px] w-[100%] text-[#A1A1A1] text-[16px] rounded-[10px] my-[15px]  " type="text" placeholder="Enter Tracking Number" />

                <button className="p-[15px] bg-[#0A089A] text-[#FEFEFE] text-[18px] w-[100%] rounded-[10px]  " type="submit">Track Pacel</button>
            </form>

            <div className="lg:w-[500px] ">
                <h1 className="text-[20px] font-[600] mb-[20px]  ">Testimonial</h1>
                <div className="bg-[#FEFEFE] py-[30px] px-[20px] rounded-[10px] ">
                    <p className="text-[#1E1E1E] text-[14px] mb-[10px] ">I have been using the company since its inception and its been a smooth ride all the way. Their customer service is topnotch. Their delivery time is si exceptional.  Tested, trusted and Recommended.</p>

                    <p className="text-[20px] font-[600]  ">Yetunde Temi</p>
                </div>
            </div>
        </div>
    )
}