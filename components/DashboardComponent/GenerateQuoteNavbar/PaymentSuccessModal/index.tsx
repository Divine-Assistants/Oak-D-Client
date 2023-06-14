import Link from "next/link"

export const PaymentSuccessModal = ()=> {
    return (
        <div className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] sm:w-[50%] lg:w-[30%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  pt-[20px] px-[20px] pb-[30px] font-poppins ">
                <img src="../img/sign-in-modal-img.svg" alt="Modal Image" className="h-[98px] mx-auto" />
                
                <h1 className="text-center text-[#0A089A] text-[20px] mb-[20px] font-[700]">Payment Successful!</h1>

                <p className="text-center text-[16px] mb-[20px]">Congratulations, you have successfully made payments for OAK & D shipping services within Canada. Our customer representative will contact you shortly.</p> 

                <div className="flex gap-x-[20px] ">
                    <button  className="bg-[#9C9C9C] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%] ">View Invoice</button>

                    <button className="bg-[#0A089A] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Continue</button>
                </div>
            </div>
        </div>
    )
}