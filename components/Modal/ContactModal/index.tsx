import React, {Dispatch, SetStateAction} from "react";

interface ContactModaltype {
    setDisplayModal: Dispatch<SetStateAction<boolean>>;
}

export const ContactModal = ({setDisplayModal}: ContactModaltype)=> {
    return ( 
        <div className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.8)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] sm:w-[50%] lg:w-[35%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  pt-[50px] px-[20px] pb-[30px] font-poppins ">
                {/* <img src="../img/sign-in-modal-img.svg" alt="Modal Image" className="h-[98px] mx-auto" /> */}
                
                <h1 className="text-center text-[#AC0108] text-[20px] mb-[20px] font-[700] lg:text-[25px]">Message Sent Successfully</h1>

                <p className="text-center text-[16px] mb-[20px]">You have successfully sent a message to Oak and D support, you will be contacted shortly.</p> 

                <button onClick={()=> setDisplayModal(false)} className="bg-[#AC0108] p-[15px] text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Continue</button>
            </div>
        </div>
    )
}