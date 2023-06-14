import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import VerifyCodeModal from "@/components/Modal/VerificationCodeModal";
import { verifyUser } from "@/api/api";
import { Spinner } from "@chakra-ui/react";

const styles = {
  bgImage: {
    background: "url(../img/get-started-background.svg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  square: {
    background: "rgba(254, 254, 254, 0.68)",
  },
};
const VerifyCode = () => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [displayModal, setDisplayModal] = useState(false);
  const [alertValue, setAlertValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVerificationCode(value);
  };
  const handleCodeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (verificationCode.length === 6) {
        setIsLoading(true);
        const email: string = router.query.email as string;
        const { data, status } = await verifyUser({
          email,
          verificationCode,
        });
        console.log(data);
        if (status === "Success") {
          setIsLoading(false);
          setDisplayModal(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative h-[100vh]">
      {displayModal ? <VerifyCodeModal /> : null}
      <div className="font-poppins px-[10px] md:px-[0px]">
        <div className="flex justify-between">
          <div
            className="hidden bg-black lg:py-[50px] lg:block relative lg:w-[70%]"
            style={styles.bgImage}
          >
            <div
              className="w-[350px] p-[20px] absolute top-[40%] lg:left-[5%] xl:left-[15%]"
              style={styles.square}
            >
              <img
                src="../img/get-started-vector.svg"
                alt=""
                className="mb-[10px] h-50]"
              />
              <p className="text-[16px] mb-[10px]">
                I have been using the company since its inception and its been a
                smooth ride all the way. Their customer service is topnotch.
                Their delivery time is si exceptional. Tested, trusted and
                Recommended.
              </p>
              <h1 className="font-[600] text-[24px]">Yetunde Temi</h1>
            </div>
          </div>
          <form
            onSubmit={handleCodeSubmit}
            className="mx-auto sm:w-[70%] lg:px-[50px] lg:mx-0 lg:py-[150px] lg:w-[100%] xl:px-[150px]"
          >
            <div className="flex flex-col justify-center text-[#1E1E1E] mb-[50px] ">
              <h1 className="text-[32px] font-[600] text-center mb-[10px]">
                Enter Verification Code
              </h1>
              <p className="text-[18px] text-center">
                A six digit code has been sent to your email, please enter the
                code below
              </p>
            </div>
            <div className="flex flex-col mb-[50px]">
              <label
                htmlFor="code"
                className="mb-[10px] text-[18px] font-[500]"
              >
                6 Digit Code
              </label>
              <input
                id="code"
                type="number"
                value={verificationCode}
                onChange={handleCodeChange}
                placeholder="Enter Code"
                required
                className="rounded-[8px] border-[#D9D9D9] border-[2px] px-[20px] py-[10px] focus:outline-[#0A089A] md:h-[60px]"
              />
              <p className="text-[12px] text-[#AC0108] font-[700]">
                {alertValue}
              </p>
            </div>

            <p className="text-center text-[16px] font-[500]">
              Didn&apos;t get the code?{" "}
              <a href="#" className="text-[#0A089A]">
                Re-send
              </a>
            </p>

            { isLoading ?
              <button
              type="submit"
              className="p-[20px] w-[100%] text-[#FAFAFA] mt-[15px] text-center bg-[#0A089A] rounded-[8px] flex items-center justify-center"
              >
                <Spinner className="h-[30px] w-[30px]" />
              </button> : 
              <button
              type="submit"
              className="p-[20px] w-[100%] text-[#FAFAFA] mt-[15px] text-center bg-[#0A089A] rounded-[8px]"
              >
                Submit
              </button>
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
