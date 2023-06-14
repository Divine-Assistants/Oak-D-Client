import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { forgotPassword } from "@/api/api"

const ForgotPassword = ()=> {

    const styles = {
        bgImage: {
            background: 'url(../img/get-started-background.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
        square: {
            background: 'rgba(254, 254, 254, 0.68)'
        }
    }
    const [email, setEmail] = useState('')
    const router = useRouter()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setEmail(event.target.value)
    }

    const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        try {
            if (email !== '') {
                const {data, status, message} = await forgotPassword({email});
                console.log(data);
                console.log(status);
                console.log(message);
                if (status === 'Success'){
                    router.push(`/verify-password-otp?email=${encodeURIComponent(data.email)}`);
                }
            }
        } catch (error) {
           console.log(error)
        }
    }

    

    return (
        <div>
            <div className="font-poppins px-[10px] md:px-[0px] relative">
                <div className="flex justify-between">
                    <div className="hidden bg-black lg:py-[50px] lg:block relative lg:w-[70%]" style={styles.bgImage}>
                        <div className="w-[350px] p-[20px] absolute top-[40%] lg:left-[5%] xl:left-[15%]" style={styles.square}>
                            <img src="../img/get-started-vector.svg" alt="" className="mb-[10px] h-50]" />
                            <p className="text-[16px] mb-[10px]">I have been using the company since its inception and its been a smooth ride all the way. Their customer service is topnotch. Their delivery time is si exceptional.  Tested, trusted and Recommended.</p>
                            <h1 className="font-[600] text-[24px]">Yetunde Temi</h1>
                        </div>
                    </div>
                    <form onSubmit={handleEmailSubmit} className="mx-auto w-[100%] md:w-[70%] lg:px-[50px] lg:mx-0 lg:py-[100px] lg:w-[100%] xl:px-[150px]">
                        <div className="flex flex-col justify-center text-[#1E1E1E] mb-[30px] ">
                            <h1 className="text-[32px] font-[600] text-center mb-[5px]">Forgot Password?</h1>
                            <p className="text-[18px] text-center">Follow these steps to reset your password</p>
                        </div>
                        <div className="flex flex-col mb-[10px]">
                            <label htmlFor="email" className="mb-[10px] text-[18px] font-[500]">Email</label>
                            <input 
                                id="email" 
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Enter Email"
                                className="rounded-[8px] border-[#D9D9D9] border-[2px] px-[20px] py-[10px] focus:outline-[#0A089A] md:h-[60px]" 
                            />
                        </div>
                        
                        <button type="submit"  className="p-[20px] w-[100%] text-[#FAFAFA] font-[500] mt-[10px] lg:mt-[50px] mb-[10px] text-center text-[18px] bg-[#0A089A] rounded-[8px]">Proceed</button>
                        

                        <div className="flex justify-center text-18px">
                            <p>Or</p>
                        </div>

                        <Link href="/login">
                            <button className="p-[20px] w-[100%] text-[#0A089A] text-[18px] font-[500] text-center mt-[10px] border-[2px] border-[#0A089A] rounded-[8px]">Log In</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword