import Link from "next/link"

const ResetPassModal = ()=> {
    return (
        <div className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] sm:w-[50%] lg:w-[30%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] pt-[20px] px-[20px] pb-[30px] font-poppins ">
                <img src="../img/sign-in-modal-img.svg" alt="Modal Image" className="h-[98px] mx-auto" />
                
                <h1 className="text-center text-[#0A089A] text-[20px] mb-[20px] font-[600]">Password Reset Successfully</h1>

                <p className="text-center text-[16px] mb-[20px]">You have successfully reset your password, Please proceed to Log In</p>

                <Link href="/login">
                    <button className="bg-[#0A089A] p-[15px] text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Log In</button>
                </Link>
            </div>
        </div>
    )
}

export default ResetPassModal