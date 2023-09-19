import Image from "next/image";
import {
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { senderInfoContext } from "@/context/PackageInfo";
import {
  WarehouseSenderInfoContext,
  WarehouseParcelInfoContext,
  WarehouseBreadcrumbContext,
} from "@/context/Warehouse";
import { WarehouseBreadcrumb } from "../WarehouseBreadcrumb";

export type userInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  region: string;
  country: string;
  address: string;
  postalCode: string;
};

interface SenderInformationProps {
  setData: Dispatch<SetStateAction<any>>;
}

export function WarehouseSenderInfo({ setData }: SenderInformationProps) {
  const { setSenderInfo } = useContext(senderInfoContext);
  const { setShowWarehoueParcelInfo } = useContext(WarehouseParcelInfoContext);
  const { showWarehouseSenderInfo, setShowWarehouseSenderInfo } = useContext(
    WarehouseSenderInfoContext
  );
  const { setWarehouseBreadcrumb } = useContext(WarehouseBreadcrumbContext);
  const [senderData, setSenderData] = useState<userInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    region: "",
    country: "",
    address: "",
    postalCode: "",
  });
  const [formError, setFormError] = useState<Partial<userInfo>>({});

  function handleSenderDataChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSenderData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  useEffect(() => {
    setSenderInfo(senderData);
  }, [senderData]);

  function handleFormSubmit() {
    // Check for empty fields and update formErrors
    const errors: Partial<userInfo> = {};
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

    // Proceed with form submission
    setData((prevData: any) => {
      return { ...prevData, sender: senderData };
    });
    setShowWarehouseSenderInfo(false);
    setWarehouseBreadcrumb(2);
    setShowWarehoueParcelInfo(true);

    window.scrollTo(0, 0);
  }

  return (
    <section
      style={{ display: showWarehouseSenderInfo ? "block" : "none" }}
      className=" p-[20px]"
    >
      <WarehouseBreadcrumb />
      <div className="flex flex-col lg:flex-row lg:gap-x-[20px] ">
        <div className="text-[24px] text-[#1E1E1E] font-[600] mb-[20px] lg:mb-0 lg:w-[500px] lg:text-[36px] ">
          <h1>
            Please enter the{" "}
            <span className="text-[#A1A1A1] "> your information</span> to
            proceed
          </h1>
        </div>

        <form className="w-[100%] ">
          <div className="flex flex-col lg:flex-row lg:gap-x-[20px] ">
            <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] w-[100%] ">
              <label htmlFor="firstName" className="mb-[8px] font-[600] ">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={senderData.firstName}
                onChange={handleSenderDataChange}
                className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A]  "
                required
              />
              {formError.firstName && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.firstName}</p>
              )}
            </div>

            <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] w-[100%] ">
              <label htmlFor="lastName" className="mb-[8px] font-[600] ">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={senderData.lastName}
                onChange={handleSenderDataChange}
                className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
                required
              />
              {formError.lastName && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="email" className="mb-[8px] font-[600] ">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={senderData.email}
              onChange={handleSenderDataChange}
              className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              required
            />
            {formError.email && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.email}</p>
              )}
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="phone" className="mb-[8px] font-[600] ">
              Phone
            </label>
            <input
              id="phone"
              type="number"
              placeholder="Phone"
              name="phoneNumber"
              value={senderData.phoneNumber}
              onChange={handleSenderDataChange}
              className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              required
            />
            {formError.phoneNumber && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.phoneNumber}</p>
              )}
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="region" className="mb-[8px] font-[600] ">
              Region
            </label>
            <input
              id="region"
              type="text"
              placeholder="Region"
              name="region"
              value={senderData.region}
              onChange={handleSenderDataChange}
              className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              required
            />
            {formError.region && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.region}</p>
              )}
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="country" className="mb-[8px] font-[600] ">
              Country
            </label>
            <input
              id="country"
              type="text"
              placeholder="Country"
              name="country"
              value={senderData.country}
              onChange={handleSenderDataChange}
              className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              required
            />
            {formError.country && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.country}</p>
              )}
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="address" className="mb-[8px] font-[600] ">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Address"
              name="address"
              value={senderData.address}
              onChange={handleSenderDataChange}
              className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              required
            />
            {formError.address && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.address}</p>
              )}
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="postalCode" className="mb-[8px] font-[600] ">
              Postal Code
            </label>
            <input
              id="postalCode"
              type="number"
              placeholder="Postal Code"
              name="postalCode"
              value={senderData.postalCode}
              onChange={handleSenderDataChange}
              className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              required
            />
            {formError.postalCode && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.postalCode}</p>
              )}
          </div>

          <button
            type="button"
            className="bg-[#0A089A] p-[20px] flex gap-x-[10px] items-center justify-center w-[100%] text-[#FEFEFE] text-[16px] rounded-[8px] lg:text-[18px]"
            onClick={handleFormSubmit}
          >
            Proceed to Parcel Information
            <Image
              src="../img/next-arrow-white-icon.svg"
              alt="Next Icon"
              width={20}
              height={20}
            />
          </button>
        </form>
      </div>
    </section>
  );
}
