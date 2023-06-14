import { useState } from "react";
import ResetPasswordModal from "../components/Modal/ResetPasswordModal/index";
import { useRouter } from "next/router";
import { newPassword } from "@/api/api";

const ResetPassword = () => {
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
    onModalDisplay: {
      background: "rgba(0, 0, 0, 0.7)",
    },
  };

  type data = {
    email: string;
    newPassword: string;
    confirmPassword: string;
  };

  const [displayModal, setDisplayModal] = useState(false);
  const [alertValue, setAlertValue] = useState("");
  const router = useRouter();

  const [resetPassword, setResetPassword] = useState<data>({
    email: router.query.email as string,
    newPassword: "",
    confirmPassword: "",
  });

  const handleResetPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setResetPassword((prevResetPassword) => {
      const { name, value } = event.target;
      return {
        ...prevResetPassword,
        [name]: value,
      };
    });
  };
  const handlePasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (resetPassword.newPassword === resetPassword.confirmPassword) {
      const { data, status, message } = await newPassword(resetPassword);
      if (status === "Success") {
        setResetPassword({
          email: router.query.email as string,
          newPassword: "",
          confirmPassword: "",
        });
        setDisplayModal(true);
      }
    }
  };

  return (
    <div>
      <div className="font-poppins px-[10px] md:px-[0px]">
        {displayModal ? <ResetPasswordModal /> : null}
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
            onSubmit={handlePasswordSubmit}
            className="mx-auto sm:w-[70%] lg:px-[50px] lg:mx-0 lg:py-[150px] lg:w-[100%] xl:px-[150px]"
          >
            <div className="flex flex-col justify-center text-[#1E1E1E] mb-[30px] ">
              <h1 className="text-[32px] font-[600] text-center mb-[5px]">
                Reset Password
              </h1>
              <p className="text-[18px] text-center">
                Please reset your password
              </p>
            </div>
            <div className="flex flex-col mb-[30px]">
              <label
                htmlFor="newPassword"
                className="mb-[10px] text-[18px] font-[500]"
              >
                New Password
              </label>
              <input
                id="newPassword"
                type="password"
                name="newPassword"
                value={resetPassword.newPassword}
                onChange={handleResetPasswordChange}
                placeholder="Enter New Password"
                className="rounded-[8px] border-[#D9D9D9] border-[2px] px-[20px] py-[10px] focus:outline-[#0A089A] md:h-[60px]"
              />
            </div>
            <div className="flex flex-col mb-[30px]">
              <label
                htmlFor="confirmPassword"
                className="mb-[10px] text-[18px] font-[500]"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={resetPassword.confirmPassword}
                onChange={handleResetPasswordChange}
                placeholder="Confirm New Password"
                className="rounded-[8px] text-[16px] border-[#D9D9D9] border-[2px] px-[20px] py-[10px] mb-[3px] focus:outline-[#0A089A] md:h-[60px]"
              />
              <p className="text-[12px] text-[#AC0108] font-[700]">
                {alertValue}
              </p>
            </div>

            <button className="p-[20px] w-[100%] text-[#FAFAFA] mt-[15px] text-center bg-[#0A089A] rounded-[8px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
