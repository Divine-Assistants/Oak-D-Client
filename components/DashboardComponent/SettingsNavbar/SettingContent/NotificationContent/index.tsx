import { useContext, useState } from "react";
import { SettingContext } from "@/context/UserDashboardSettings";
import { DeleteModalContext } from "@/context/UserDashboardLayout";

export function NotificationContent(){
    const {activeSettingNav, setActiveSettingNav} = useContext(SettingContext);
    const { setShowFirstModal } = useContext(DeleteModalContext);

    return(
        <section className={activeSettingNav === 2 ? `` : `hidden`}>
            <h1 className="text-[18px] text-[#1E1E1E] mb-[20px] font-[600] lg:text-[24px] ">Notification Settings</h1>

            <div className="flex items-center bg-[#FEFEFE] p-[10px] border-[2px] border-[#F3F3F3] rounded-[10px] mb-[20px] lg:p-[20px] lg:bg-none ">
                <div className=" ">
                    <h1 className="text-[18px] text-[#1E1E1E] font-[600] lg:text-[20px] ">Notification</h1>
                    <p className="text-[12px] text-[#9C9C9C] font-[500] lg:text-[14px] ">Choose whether OAK & D can send news and new updates to your email</p>
                </div>
            </div>

            <form className="border-[2px] border-[#F3F3F3] rounded-[10px] lg:p-[20px] ">

                <div className="bg-[#FEFEFE] p-[10px] rounded-[10px] mb-[20px] lg:bg-none ">
                    <h2 className="text-[#1E1E1E] text-[18px] font-[600] lg:text-[20px] ">Shipping Information</h2>

                    <p className="text-[12px] text-[#9C9C9C] font-[500] lg:text-[14px] ">Choose where OAK & D should send shipping information. If nothing is selected, the sender and receiver’s phone number/email address will be used.</p>

                    <div className="flex flex-col lg:flex-row lg:gap-x-[30px] lg:justify-between my-[20px] ">
                        <div className="flex flex-col mb-[20px] lg:w-[100%] ">
                            <label htmlFor="email" className="text-[#9C9C9C] text-[16px] font-[500] mb-[8px] ">Email Address</label>
                            <input 
                                id="email" 
                                type="email" 
                                placeholder="Add Email"
                                className="p-[20px] bg-none border-[2px] border-[#F3F3F3] rounded-[10px] " 
                            />
                        </div>

                        <div className="flex flex-col lg:w-[100%]">
                            <label htmlFor="phoneNumber" className="text-[#9C9C9C] text-[16px] font-[500] mb-[8px] ">Phone Number</label>
                            <input 
                                id="phoneNumber" 
                                type="number"
                                placeholder="Add Phone Number"
                                className="p-[20px] bg-none border-[2px] border-[#F3F3F3] rounded-[10px] " 
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className="p-[20px] bg-[#0A089A] rounded-[15px] text-[#FEFEFE] text-[16px] font-[500] w-[100%] lg:text-[20px] ">Save Changes</button>
            </form>

            <button onClick={()=> setShowFirstModal(true)} className="p-[20px] bg-[#AC0108] mt-[20px] rounded-[15px] text-[#FEFEFE] text-[16px] font-[500] w-[100%] lg:text-[20px] lg:hidden ">Delete</button>
        </section>
    )
}