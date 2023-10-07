import { DomesticContext } from "@/context/DomesticWrapper";
import React, { useContext, useState, Dispatch, SetStateAction } from "react";
import { FaArrowRight } from "react-icons/fa";

export type clientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  region: string;
  country: string;
  address: string;
  postalCode: string;
};

export const initialClientInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  region: "",
  country: "",
  address: "",
  postalCode: "",
};

interface DomesticSenderType {
  setData: Dispatch<SetStateAction<any>>;
}

export function DomesticSender({ setData }: DomesticSenderType) {
  const { trail, setTrail } = useContext(DomesticContext);
  const [senderData, setSenderData] = useState<clientInfo>(initialClientInfo);
  const [formError, setFormError] = useState<Partial<clientInfo>>({});


  console.log(senderData);

  const handleSenderDataChange = (event: {
    target: { name: any; value: any };
  }) => {
    const { name, value } = event.target;

    // Update the senderData state
    setSenderData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

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
    setTrail(1);
    window.scrollTo(0, 0);

  }

  return (
    <div style={{ display: trail !== 0 ? "none" : "initial" }}>
      <div className="w-[100%] lg:flex lg:justify-between lg:gap-[20px] mt-[30px] px-[20px] ">
        <div className="mb-[40px] lg:mb-0 w-[100%] lg:w-[40%] ">
          <h1 className="text-[16px] font-[600] text-[#AC0108] mb-[15px] ">
            Domestic Shipping
          </h1>
          <p className=" text-[40px] font-[600] ">
            Please enter the{" "}
            <span className="text-[#A1A1A1]">sender&apos;s information</span> to
            proceed
          </p>
        </div>
        
        <form
          id=""
          className="text-[18px] text-[#1E1E1E] font-[600] w-[100%] mb-[75px] lg:w-[50%] "
        >
          <div className="lg:flex lg:items-center lg:gap-[10px] lg:justify-between ">
            <div className="flex flex-col gap-[10px] mb-[25px] w-[100%] ">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={senderData.firstName}
                onChange={handleSenderDataChange}
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
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={senderData.lastName}
                onChange={handleSenderDataChange}
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
              value={senderData.email}
              onChange={handleSenderDataChange}
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
              value={senderData.phoneNumber}
              onChange={handleSenderDataChange}
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
              value={senderData.region}
              onChange={handleSenderDataChange}
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
              value={senderData.country}
              onChange={handleSenderDataChange}
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
              value={senderData.address}
              onChange={handleSenderDataChange}
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
              value={senderData.postalCode}
              onChange={handleSenderDataChange}
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
            <p>Proceed to Receiver Information</p>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}
