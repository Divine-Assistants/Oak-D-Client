import {
  DomesticContext,
  DomesticContextType,
} from "@/context/DomesticWrapper";
import React, { useContext, useState, Dispatch, SetStateAction } from "react";
import { FaArrowRight } from "react-icons/fa";
import { scrollToTop } from "@/components";
import { clientInfo, initialClientInfo } from "@/components";

interface DomesticReceiverType {
  setData: Dispatch<SetStateAction<any>>;
}

export function DomesticReciever({ setData }: DomesticReceiverType) {
  const { trail, setTrail } = useContext(DomesticContext);
  const [receiverData, setReceiverData] = useState<clientInfo>(initialClientInfo);
  const [formError, setFormError] = useState<Partial<clientInfo>>({});

  function handleReceiverDataChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setReceiverData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleFormSubmit() {
    // Check for empty fields and update formErrors
    const errors: Partial<clientInfo> = {};
    for (const key in receiverData) {
      if (!receiverData[key]) {
        errors[key] = "This field is required";
      }
    }
    setFormError(errors);

    // If there are errors, do not submit the form
    if (Object.keys(errors).length > 0) {
      return;
    }

    setData((prevData: any) => ({ ...prevData, receiver: receiverData }));
    setReceiverData(initialClientInfo);
    setTrail(2);
    window.scrollTo(0, 0);
  }


  // React.useEffect(() => {
  //   validateForm();
  // }, [receiverData]);

  return (
    <div style={{ display: trail !== 1 ? "none" : "initial" }}>

      <div className="w-[100%] lg:flex lg:justify-between lg:gap-[20px] mt-[30px] px-[20px] ">
        <div className="mb-[40px] lg:mb-0 w-[100%] lg:w-[40%]">
          <p className=" text-[40px] font-[600] ">
            Please enter the{" "}
            <span className="text-[#A1A1A1]">receiver&apos;s information</span>{" "}
            to proceed
          </p>
        </div>

        <form
          id=""
          className="text-[18px] text-[#1E1E1E] font-[600] w-[100%] mb-[75px] lg:w-[50%]"
        >
          <div className="lg:flex lg:items-center lg:gap-[10px] lg:justify-between ">
            <div className="flex flex-col gap-[10px] mb-[25px] w-[100%] ">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={receiverData.firstName}
                onChange={handleReceiverDataChange}
                id="firstName"
                className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
                placeholder="Enter First Name"
                required
              />
              {formError.firstName && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.firstName}</p>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px] w-[100%] ">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={receiverData.lastName}
                onChange={handleReceiverDataChange}
                id="lastName"
                className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
                placeholder="Enter Last Name"
                required
              />
              {formError.lastName && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={receiverData.email}
              onChange={handleReceiverDataChange}
              id="email"
              className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="xyz@mail.com"
              required
            />
            {formError.email && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.email}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="phoneNumber">Phone</label>
            <input
              type="text"
              name="phoneNumber"
              value={receiverData.phoneNumber}
              onChange={handleReceiverDataChange}
              id="phoneNumber"
              className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Phone"
              required
            />
            {formError.phoneNumber && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.phoneNumber}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="region">Region</label>
            <input
              type="text"
              name="region"
              value={receiverData.region}
              onChange={handleReceiverDataChange}
              id="region"
              className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Region"
              required
            />
            {formError.region && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.region}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={receiverData.country}
              onChange={handleReceiverDataChange}
              id="country"
              className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Country"
              required
            />
            {formError.country && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.country}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={receiverData.address}
              onChange={handleReceiverDataChange}
              id="address"
              className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              placeholder="Address"
              required
            />
            {formError.address && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.address}</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={receiverData.postalCode}
              onChange={handleReceiverDataChange}
              id="postalCode"
              className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
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
