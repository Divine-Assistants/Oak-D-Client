import { useContext } from "react";
import { SecurityModalContext } from "@/context/UserDashboardLayout";

export function SecurityModal() {
    const {showSecurtyModal, setShowSecurityModal} = useContext(SecurityModalContext);
    
    return (
        <div style={{display: showSecurtyModal ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] md:w-[350px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-[30px] font-poppins ">

                <h1 className='text-center text-[20px] text-[#1E1E1E] font-[500] lg:text-[24px] mb-[10px] '>Password Changed</h1>

                <p className="text-center text-[#1E1E1E] text-[16px] mb-[20px] font-[500] lg:text-[18px] ">Congratulations, your password has been changed successfully</p>

                <button onClick={()=>setShowSecurityModal(false)} className="bg-[#0A089A] p-[15px] text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Continue</button>
            </div>
        </div>
    )
}