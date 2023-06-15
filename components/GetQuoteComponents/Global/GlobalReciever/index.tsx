import { GlobalContext } from "@/context/GlobalWrapper";
import React, { useContext, useState, Dispatch, SetStateAction } from "react";
import { Reciever } from "../../Form/Reciever";
import { scrollToTop } from "@/components";
import { FaArrowRight } from "react-icons/fa";
import { clientInfo, initialClientInfo } from "@/components";

interface GlobalReceiverType {
  setData: Dispatch<SetStateAction<any>>;
}

export function GlobalReciever({ setData }: GlobalReceiverType) {
  const { glotrail, setGlotrail } = useContext(GlobalContext);
  const [receiverData, setReceiverData] =
    useState<clientInfo>(initialClientInfo);
    const [isFormValid, setIsFormValid] = useState(false);
    const [emptyFields, setEmptyFields] = useState<string[]>([]);

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
    if (isFormValid) {
      setData((prevData: any) => ({ ...prevData, receiver: receiverData }));
      setReceiverData(initialClientInfo);
      setGlotrail(2);
      window.scrollTo(0, 0);
    } else {
      const emptyFields = Object.entries(receiverData)
        .filter(([key, value]) => value.trim() === "")
        .map(([key]) => key);
      setEmptyFields(emptyFields);
    }
  }

  function validateForm() {
    const formValues = Object.values(receiverData);
    const isValid = formValues.every((value) => value.trim() !== "");
    setIsFormValid(isValid);
  }

  React.useEffect(() => {
    validateForm();
  }, [receiverData]);

  return (
    <div style={{ display: glotrail !== 1 ? "none" : "initial" }}>
      <div className="w-[90%] m-auto lg:flex ">
        <div className="mb-[40px] lg:w-[40%]">
          <p className=" text-[40px] font-[600] ">
            Please enter the{" "}
            <span className="text-[#A1A1A1]">reciever&apos;s information</span>{" "}
            to proceed
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
                value={receiverData.firstName}
                onChange={handleReceiverDataChange}
                id="firstName"
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  "
                placeholder="Enter First Name"
              />
              {emptyFields.includes("firstName") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your first name</p>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={receiverData.lastName}
                onChange={handleReceiverDataChange}
                id="lastName"
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  "
                placeholder="Enter Last Name"
              />
              {emptyFields.includes("lastName") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your last name</p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="xyz@mail.com"
            />
            {emptyFields.includes("email") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your email</p>
              )}
          </div>

          <div className="flex flex-col gap-[10px] mb-[25px]">
            <label htmlFor="phoneNumber">Phone</label>
            <input
              type="number"
              name="phoneNumber"
              value={receiverData.phoneNumber}
              onChange={handleReceiverDataChange}
              id="phoneNumber"
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Phone"
            />
            {emptyFields.includes("phoneNumber") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your phone number</p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Region"
            />
            {emptyFields.includes("region") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your region</p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Country"
            />
            {emptyFields.includes("country") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your country</p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Address"
            />
            {emptyFields.includes("address") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your address</p>
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
              className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              placeholder="Postal Code"
            />
            {emptyFields.includes("postalCode") && (
                <p className="text-[16px] font-[600] text-[#AC0108]">Please enter your postal</p>
              )}
          </div>
        </form>
      </div>
      <button
        className="flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[50px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] lg:px-[160px] lg:py-[27px] lg:mr-[10%] hover:bg-[#1E1E1E] "
        onClick={handleFormSubmit}
      >
        <p>Proceed to Parcel Information</p>
        <FaArrowRight />
      </button>
    </div>
  );
}
