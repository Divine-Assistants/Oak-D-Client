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
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

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

    // Perform validation for each field
    // Example validation: Check if all fields are filled
    const isEmpty = Object.values(senderData).some((field) => field === "");
    setIsFormValid(!isEmpty);
  };

  function handleFormSubmit() {
    const emptyFields = Object.entries(senderData)
      .filter(([key, value]) => value.trim() === "")
      .map(([key]) => key);

    if (emptyFields.length === 0) {
      setData((prevData: any) => ({ ...prevData, sender: senderData }));
      setSenderData(initialClientInfo);
      setTrail(1);
      window.scrollTo(0, 0);
    } else {
      setEmptyFields(emptyFields);
    }
  }

  return (
    <div style={{ display: trail !== 0 ? "none" : "initial" }}>
      <div className="w-[90%] m-auto lg:flex  ">
        <div className="mb-[40px] lg:w-[40%] ">
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
          className="text-[18px] text-[#1E1E1E] font-[600] w-[90%] m-auto lg:w-[50%]  "
        >
          <div className="lg:flex lg:items-center lg:justify-between ">
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={senderData.firstName}
                onChange={handleSenderDataChange}
                id="firstName"
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  "
                placeholder="Enter First Name"
                required
              />
              {emptyFields.includes("firstName") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">
                  Please enter your first name
                </p>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={senderData.lastName}
                onChange={handleSenderDataChange}
                id="lastName"
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  "
                placeholder="Enter Last Name"
                required
              />
              {emptyFields.includes("lastName") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">
                  Please enter your last name
                </p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="xyz@mail.com"
              required
            />
            {emptyFields.includes("email") && (
              <p className="text-[16px] font-[600] text-[#AC0108]">
                Please enter your email
              </p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Phone"
              required
            />
            {emptyFields.includes("phoneNumber") && (
              <p className="text-[16px] font-[600] text-[#AC0108]">
                Please enter your Phone Number
              </p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Region"
              required
            />
            {emptyFields.includes("region") && (
              <p className="text-[16px] font-[600] text-[#AC0108]">
                Please enter your Region
              </p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Country"
              required
            />
            {emptyFields.includes("country") && (
              <p className="text-[16px] font-[600] text-[#AC0108]">
                Please enter your Country
              </p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Address"
              required
            />
            {emptyFields.includes("address") && (
              <p className="text-[16px] font-[600] text-[#AC0108]">
                Please enter your Address
              </p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Postal Code"
              required
            />
            {emptyFields.includes("postalCode") && (
              <p className="text-[16px] font-[600] text-[#AC0108]">
                Please enter your postal code
              </p>
            )}
          </div>

          <button
            type="button"
            className="flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[50px] py-[10px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] lg:px-[160px] lg:py-[27px] lg:mr-[10%] hover:bg-[#1E1E1E] "
            onClick={handleFormSubmit}
            disabled={!isFormValid}
          >
            <p>Proceed to Receiver Information</p>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
}
