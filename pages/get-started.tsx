import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { createUser } from "@/api/api";
import { Spinner } from "@chakra-ui/react";

export type userData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
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

const GetStarted = () => {
  const [inputValues, setInputValues] = useState<userData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // INPUT CHANGE FUNCTION
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => {
      return {
        ...prevInputValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues);
    try {
      if (inputValues.password === inputValues.confirmPassword) {
        setIsLoading(true);
        const { data, status } = await createUser(inputValues);
        console.log(data);
        if (status === "Success") {
          setInputValues({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          setIsLoading(false);
          router.push(`/verify-code?email=${encodeURIComponent(data.email)}`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if(isLoading){
  //   return (
  //     <div
  //     style={{
  //       position: 'fixed',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       background: 'rgba(0, 0, 0, 0.5)',
  //       zIndex: 9999,
  //     }}>
  //       <Spinner size='xl' />
  //     </div>
  //   )
  // }

  return (
    <div className="font-poppins px-[10px] md:px-[0px]">
      <div className="flex justify-between">
        <div
          className="hidden lg:block relative lg:w-[100%]"
          style={styles.bgImage}
        >
          <div
            className="w-[80%] p-[20px] absolute top-[40%] lg:left-[50%] lg:transform lg:translate-x-[-50%] "
            style={styles.square}
          >
            <img
              src="../img/get-started-vector.svg"
              alt=""
              className="mb-[10px] h-50]"
            />
            <p className="text-[16px] mb-[10px]">
              I have been using the company since its inception and its been a
              smooth ride all the way. Their customer service is topnotch. Their
              delivery time is si exceptional. Tested, trusted and Recommended.
            </p>
            <h1 className="font-[600] text-[24px]">Yetunde Temi</h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="py-[20px] lg:px-[50px] mx-auto lg:w-[100%] lg:mx-0 lg:w-[80%] xl:px-[150px] "
        >
          <div className="flex flex-col justify-center text-[#1E1E1E] mb-[30px]">
            <h1 className="text-[32px] md:text-[36px] font-[600] text-center">
              Get Started
            </h1>
            <p className="text-[18px] md:text-[20px] text-center">
              Let&apos;s get you up and running!
            </p>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mb-[20px] md:w-[100%] md:mr-[20px]">
              <label
                htmlFor="first-name"
                className="mb-[10px] [18px] font-[500]"
              >
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={inputValues.firstName}
                onChange={handleChange}
                className="rounded-[8px] border-[#D9D9D9] border-[2px] text-[16px] md:text-[20px] py-[10px] px-[20px] md:py-[20] focus:outline-[#0A089A] md:h-[60px]"
                required
              />
            </div>

            <div className="flex flex-col mb-[20px] md:w-[100%]">
              <label
                htmlFor="last-name"
                className="mb-[10px] [18px] font-[500]"
              >
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={inputValues.lastName}
                onChange={handleChange}
                className="rounded-[8px] border-[#D9D9D9] border-[2px] text-[16px] md:text-[20px] py-[10px] px-[20px] md:py-[20] focus:outline-[#0A089A] md:h-[60px]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-[20px]">
            <label htmlFor="email" className="mb-[10px] [18px] font-[500]">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={inputValues.email}
              onChange={handleChange}
              className="rounded-[8px] border-[#D9D9D9] border-[2px] text-[16px] md:text-[20px] py-[10px] px-[20px] md:py-[20] focus:outline-[#0A089A] md:h-[60px]"
              required
            />
          </div>

          <div className="flex flex-col mb-[20px]">
            <label htmlFor="password" className="mb-[10px] [18px] font-[500]">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={inputValues.password}
              onChange={handleChange}
              className="rounded-[8px] border-[#D9D9D9] border-[2px] text-[16px] md:text-[20px] py-[10px] px-[20px] md:py-[20] focus:outline-[#0A089A] md:h-[60px]"
              required
            />
          </div>

          <div className="flex flex-col mb-[30px]">
            <label
              htmlFor="confirm-password"
              className="mb-[10px] text-[18px] font-[500]"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={inputValues.confirmPassword}
              onChange={handleChange}
              className="rounded-[8px] border-[#D9D9D9] border-[2px] text-[16px] md:text-[20px] py-[10px] px-[20px] md:py-[20] focus:outline-[#0A089A] md:h-[60px]"
              required
            />
          </div>

          <p className="text-center text-[14px] md:text-[16px] font-[500]">
            By signing up, you agree to our{" "}
            <a href="#" className="text-[#0A089A]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#0A089A]">
              Privacy Policy
            </a>
          </p>

          {isLoading ?
            <button
            type="submit"
            className="p-[20px] w-[100%] text-[#FAFAFA] my-[15px] text-center bg-[#0A089A] rounded-[8px] flex items-center justify-center "
            >
              <Spinner className="h-[30px] w-[30px]" />
            </button> : 
            <button
            type="submit"
            className="p-[20px] w-[100%] text-[16px] md:text-[18px] text-[#FAFAFA] my-[15px] text-center bg-[#0A089A] rounded-[8px] "
            >
            Next
            </button>
          }

          <p className="text-center text-[14px] md:text-[16px] font-[500]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0A089A]">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
