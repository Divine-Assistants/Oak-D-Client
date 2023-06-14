import { useContext } from 'react';
import { DeleteModalContext, SecondModalContext } from "@/context/UserDashboardLayout";

export function FirstDeleteModal() {
    const {showFirstModal, setShowFirstModal} = useContext(DeleteModalContext);
    const {showSecondModal, setShowSecondModal} = useContext(SecondModalContext);

    return (
        <div style={{display: showFirstModal ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] md:w-[350px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-[30px] font-poppins ">

                <p className="text-center text-[16px] mb-[20px]">Proceeding with this action will delete your account from OAK & D</p>

                <div className="flex gap-x-[20px] ">
                    <button onClick={()=>setShowFirstModal(false)} className="bg-[#9C9C9C] p-[15px] text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%] ">Cancel</button>

                    <button onClick={()=>{setShowFirstModal(false); setShowSecondModal(true)}} className="bg-[#AC0108] p-[15px] text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Proceed</button>
                </div>
            </div>
        </div>
    )
}