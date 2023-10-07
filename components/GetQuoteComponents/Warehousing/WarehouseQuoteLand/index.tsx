import { DomesticContext } from "@/context/DomesticWrapper";
import { GlobalContext } from "@/context/GlobalWrapper";
import React, { useContext, useState, Dispatch, SetStateAction } from "react";
import { FaArrowRight } from "react-icons/fa";
import { clientInfo, initialClientInfo } from "../../Domestic";

interface WarehouseSenderType {
  setData: Dispatch<SetStateAction<any>>;
}

export function WarehouseQuoteLand({ setData }: WarehouseSenderType) {
  const [senderData, setSenderData] = useState<clientInfo>(initialClientInfo);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [formError, setFormError] = useState<Partial<clientInfo>>({});

  const { trail, setTrail } = useContext(DomesticContext);
  const { glotrail, setGlotrail } = useContext(GlobalContext);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 20, behavior: "smooth" });
  }

  function handleSenderDataChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSenderData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleFormSubmit() {
    // Check for empty fields and update formErrors
    const errors: Partial<clientInfo> = {};
      for (const key in senderData) {
        if (!senderData[key]) {
          errors[key] = "This field is required";
        }
      }
      setFormError(errors);

      // If there are errors, do not submit the form
      if (Object.keys(errors).length > 0) {
        return;
      }

      setData((prevData: any) => ({ ...prevData, sender: senderData }));
      setSenderData(initialClientInfo);
      setGlotrail(1);
      window.scrollTo(0, 0);
  }

  function validateForm() {
    const formValues = Object.values(senderData);
    const isValid = formValues.every((value) => value.trim() !== "");
    setIsFormValid(isValid);
  }

  React.useEffect(() => {
    validateForm();
  }, [senderData]);

  return (
    <div
      className="mb-[102px]"
      style={{ display: glotrail !== 0 ? "none" : "initial" }}
    >
      <div className="relative">
        <div className="w-[100vw] h-[835px] lg:h-[945px] ">
          <div className="hidden md:block h-[100%] w-[100%]">
            <img
              src="/img/global-quote-back.svg"
              alt="global shipping"
              className="w-[100%] h-[100%] object-cover "
            />
          </div>
          <div className="block md:hidden h-[100%] w-[100%]">
            <img
              src="/img/global-quote-back-1.svg"
              alt="global shipping"
              className="w-[100%] h-[100%] object-cover "
            />
          </div>
        </div>
        <div className="absolute top-0">
          <div className="bg-[#FEFEFE]/[.68] w-[90%] lg:w-[55%] lg:ml-[5%] m-auto mt-[240px] md:mt-[153px] lg:mt-[15px] py-[81px] md:py-[34px] lg:py-[64px]  ">
            <div className="w-[80%] m-auto ">
              <h1 className="font-semibold text-[#AC0108] text-[20px] md:text-[24px] ">
                Get Quote
              </h1>
              <p className="font-[700] text-[32px] text-[#1E1E1E] md:text-[36px] ">
                Ready to ship your package?, follow the procedures below
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="w-[90%] m-auto lg:flex mt-[100px] ">
        <div className="mb-[40px] lg:w-[40%] ">
          <h1 className="text-[16px] font-[600] text-[#AC0108] mb-[15px] ">
            Warehousing
          </h1>
          <p className=" text-[40px] font-[600] ">
            Please enter<span className="text-[#A1A1A1]">your information</span>{" "}
            to proceed
          </p>
        </div>

        {/* Main form */}
        <form
          id=""
          className="text-[18px] text-[#1E1E1E] font-[600] w-[100%] m-auto lg:w-[50%]   "
        >
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-[10px] ">
            <div className="flex flex-col gap-[10px] mb-[25px] w-[100%] ">
              <label htmlFor="first name">First Name</label>
              <input
                type="text"
                name="firstName"
                value={senderData.firstName}
                onChange={handleSenderDataChange}
                id="firstName"
                className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  "
                placeholder="Enter First Name"
                required
              />
              {formError.firstName && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.firstName}</p>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px] w-[100%]">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={senderData.lastName}
                onChange={handleSenderDataChange}
                id="lastName"
                className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A]  "
                placeholder="Enter Last Name"
                required
              />
              {formError.lastName && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={senderData.email}
              onChange={handleSenderDataChange}
              id="email"
              className="rounded-[8px] p-[20px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="xyz@mail.com"
              required
            />
            {formError.email && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.email}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="">Phone</label>
            <input
              type="number"
              name="phoneNumber"
              value={senderData.phoneNumber}
              onChange={handleSenderDataChange}
              id="phoneNumber"
              className="rounded-[8px] p-[20px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Phone"
              required
            />
            {formError.phoneNumber && (
              <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.phoneNumber}</p>
            )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="">Region</label>
            <input
              type="text"
              name="region"
              value={senderData.region}
              onChange={handleSenderDataChange}
              id="region"
              className="rounded-[8px] p-[20px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Region"
              required
            />
            {formError.region && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.region}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="">Country</label>
            <input
              type="text"
              name="country"
              value={senderData.country}
              onChange={handleSenderDataChange}
              id="country"
              className="rounded-[8px] p-[20px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Country"
              required
            />
            {formError.country && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.country}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              value={senderData.address}
              onChange={handleSenderDataChange}
              id="address"
              className="rounded-[8px] p-[20px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Address"
              required
            />
            {formError.address && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.address}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={senderData.postalCode}
              onChange={handleSenderDataChange}
              id="postalCode"
              className="rounded-[8px] p-[20px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Postal Code"
              required
            />
            {formError.postalCode && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.postalCode}</p>
              )}
          </div>

          <button
            type="button"
            onClick={handleFormSubmit}
            className="flex justify-center items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[30px] py-[21px] bg-[#0A089A] rounded-[8px] w-[100%] mb-[60px] md:px-[40px] md:py-[27px] hover:bg-[#1E1E1E]  "
          >
            <p>Proceed to Parcel Information</p>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}
