import { DomesticContext } from "@/context/DomesticWrapper";
import React, {
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { FaArrowRight } from "react-icons/fa";
import { VidModal, scrollToTop } from "@/components";
import Image from "next/image";

export type clientParcelInfo = {
  packageName: string;
  packageWeight: string;
  packageType: string;
  price: number;
  dimension: {
    length: string;
    breadth: string;
    height: string;
  };
  pickupAddress?: string;
  pickupCode?: string;
  departure?: string;
  arrival?: string;
  packageDescription: string;
};
const initialDomesticParcelInfo = {
  packageName: "",
  packageWeight: "",
  packageType: "Domestic",
  price: 0,
  dimension: {
    length: "",
    breadth: "",
    height: "",
  },
  departure: "",
  arrival: "",
  packageDescription: "",
};

interface DomesticParcelType {
  setData: Dispatch<SetStateAction<any>>;
}

export function DomesticParcel({ setData }: DomesticParcelType) {
  const {
    trail,
    setTrail,
    selectedDepartureProvince,
    setSelectedDepartureProvince,
    selectedArrivalProvince,
    setSelectedArrivalProvince,
    setShowVideo,
  } = useContext(DomesticContext);

  const [parcelData, setParcelData] = useState<clientParcelInfo>(
    initialDomesticParcelInfo
  );

  const [formError, setFormError] = useState<Partial<clientParcelInfo>>({});

  const handleParcelDataChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [nestedField, subField] = name.split(".");
      setParcelData((prevParcelData: any) => ({
        ...prevParcelData,
        [nestedField]: {
          ...prevParcelData[nestedField],
          [subField]: value,
        },
      }));
    }
    setParcelData((prevParcelData) => ({
      ...prevParcelData,
      [name]: value,
    }));
  };
  
  useEffect(() => {
    setParcelData((prevData) => {
      return {
        ...prevData,
        price:
          Number(parcelData.packageWeight) <= 10
            ? 20
            : Number(parcelData.packageWeight) >= 11 &&
              Number(parcelData.packageWeight) <= 15
            ? 30
            : Number(parcelData.packageWeight) >= 16 &&
              Number(parcelData.packageWeight) <= 30
            ? 50
            : Number(parcelData.packageWeight) >= 31 &&
              Number(parcelData.packageWeight) <= 50
            ? 60
            : Number(parcelData.packageWeight) >= 51 &&
              Number(parcelData.packageWeight) <= 60
            ? 70
            : Number(parcelData.packageWeight) >= 61 &&
              Number(parcelData.packageWeight) <= 70
            ? 80
            : Number(parcelData.packageWeight) >= 71 &&
              Number(parcelData.packageWeight) <= 90
            ? 90
            : Number(parcelData.packageWeight) * 1,
      };
    });
  }, [parcelData.packageWeight]);

  function handleFormSubmit() {
    // Check for empty fields and update formErrors
    const errors: Partial<clientParcelInfo> = {};
    for (const key in parcelData) {
      if (!parcelData[key]) {
        errors[key] = "This field is required";
      }
    }
    setFormError(errors);

    // If there are errors, do not submit the form
    if (Object.keys(errors).length > 0) {
      return;
    }

    setData((prevData: any) => {
      return {
        ...prevData,
        newPackage: parcelData,
      };
    });
    setParcelData(initialDomesticParcelInfo);
    setTrail(3);
    window.scrollTo(0, 0);
  }

  return (
    <section style={{ display: trail === 2 ? "block" : "none" }}>
      <div className="w-[100%] lg:flex lg:justify-between lg:gap-[20px] mt-[30px] px-[20px] ">
        <div className="mb-[40px] lg:mb-0 w-[100%] lg:w-[40%] ">
          <h1 className="text-[16px] font-[600] text-[#AC0108] mb-[15px] block md:hidden ">
            Parcel Information
          </h1>
          <p className=" text-[40px] font-[600] ">
            Fill the form to get a{" "}
            <span className="text-[#A1A1A1]">Shipping summary</span> estimate
          </p>
        </div>
        <div className="text-[18px] text-[#1E1E1E] font-[600] w-[100%] mb-[75px] lg:w-[50%] ">
          <form className=" ">
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="packageName" className="font-[600] ">
                Name Of Cargo
              </label>
              <input
                type="text"
                name="packageName"
                value={parcelData.packageName}
                onChange={handleParcelDataChange}
                id="packageName"
                className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
                placeholder="Name"
                required
              />
              {formError.packageName && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.packageName}</p>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="packageWeight" className="font-[600] ">
                Weight
              </label>
              <div className="relative w-[100%] flex items-center ">
                <input
                  type="number"
                  name="packageWeight"
                  value={parcelData.packageWeight}
                  onChange={handleParcelDataChange}
                  id="packageWeight"
                  className="rounded-[8px] p-[15px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] w-[100%] "
                  placeholder="0"
                  required
                />
                <p className="absolute font-[600] text-[18px] right-[5%] ">
                  lbs
                </p>
              </div>
              {formError.packageWeight && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.packageWeight}</p>
              )}
            </div>

            <div className="flex flex-col gap-[10px]">
              <label htmlFor="" className="font-[600] ">
                Dimension (in)
              </label>
              <div className="flex flex-col gap-[10px] mb-[25px] lg:flex-row">
                <div className="relative w-[100%] ">
                  <input
                    type="number"
                    name="dimension.length"
                    value={parcelData.dimension.length}
                    onChange={handleParcelDataChange} 
                    id="length"
                    className="rounded-[8px] p-[15px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] w-[100%] "
                    placeholder="Length"
                    required
                  />
                  {formError.dimension?.length && (
                    <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.dimension?.length}</p>
                  )}
                </div>

                <div className="relative w-[100%] ">
                  <input
                    type="number"
                    name="dimension.breadth"
                    value={parcelData.dimension.breadth}
                    onChange={handleParcelDataChange}
                    id="breadth"
                    className="rounded-[8px] p-[15px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] w-[100%] "
                    placeholder="Breadth"
                    required
                  />
                  {formError.dimension?.breadth && (
                    <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.dimension?.breadth}</p>
                  )}
                </div>

                <div className="relative w-[100%] ">
                  <input
                    type="number"
                    name="dimension.height"
                    value={parcelData.dimension.height}
                    onChange={handleParcelDataChange}
                    id="height"
                    className="rounded-[8px] p-[15px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] w-[100%] "
                    placeholder="Height"
                    required
                  />
                  {formError.dimension?.height && (
                    <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.dimension?.height}</p>
                  )}
                </div>
              </div>
            </div>

            <p
              className="text-[15px] text-[#AC0108] font-[600] cursor-pointer mb-[25px] "
              onClick={() => setShowVideo(true)}
            >
              Need help measuring the dimension?
            </p>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Departure
              </label>
              <select
                name="departure"
                value={parcelData.departure}
                onChange={handleParcelDataChange}
                required
                className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              >
                <option value="">--Select a departure location--</option>
                <option value="Ontario">Ontario</option>
                <option value="Alberta">Alberta</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="British Colombia">British Colombia</option>
                <option value="New Foundland Island">
                  New Foundland Island
                </option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">Quebec</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon ">Yukon</option>
              </select>
              {formError.departure && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.departure}</p>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Arrival
              </label>
              <select
                name="arrival"
                value={parcelData.arrival}
                onChange={handleParcelDataChange}
                required
                className="rounded-[8px] p-[20px] w-[100%] border border-[#A1A1A1] h-[65px] outline-[#0A089A] "
              >
                <option value="">--Select an arrival location--</option>
                <option value="Ontario">Ontario</option>
                <option value="Alberta">Alberta</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="British Colombia">British Colombia</option>
                <option value="New Foundland Island">
                  New Foundland Island
                </option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">Quebec</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon ">Yukon</option>
              </select>

              {formError.arrival && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.arrival}</p>
              )}
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <p className="text-[#1E1E1E] text-[16px] font-[600] mb-[8px] ">
                Upload Image
              </p>
              <label 
                htmlFor="uploadFile"
                className="mb-[8px] flex flex-col items-center justify-center py-[50px] overflow-hidden relative rounded-[8px] bg-[#DEDEDE] text-[12px] lg:text-[18px] font-[500] "
              >
                <Image
                  src="../img/upload-image-icon.svg"
                  alt="Upload Image Icon"
                  width={30}
                  height={30}
                />

                <p className="text-[#1E1E1E] ">
                  Drag and drop image here or{" "}
                  <span className="text-[#0A089A] ">browse</span>
                </p>

                <input
                  id="uploadFile"
                  type="file"
                  name="image"
                  onChange={(e) => {
                    setData((prevData: any) => {
                      if (e.target.files) {
                        return { ...prevData, image: e.target.files[0] };
                      }
                    });
                  }}
                  className="absolute cursor-pointer top-0 left-0 w-[100%] h-[100%] opacity-0"
                />
              </label>
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="packageDescription" className="font-[600] ">
                Parcel Description
              </label>
              <input
                type="text"
                name="packageDescription"
                value={parcelData.packageDescription}
                onChange={handleParcelDataChange}
                id="packageDescription"
                className="rounded-[8px] p-[15px] border border-[#A1A1A1] h-[165px] outline-[#0A089A] "
                placeholder=""
                required
              />

              {formError.packageDescription && (
                <p className="text-[#AC0108] text-[12px] font-[700] ">{formError.packageDescription}</p>
              )}
            </div>
            
            <button
              type="button"
              onClick={handleFormSubmit}
              className="flex justify-center items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[30px] py-[21px] bg-[#0A089A] rounded-[8px] w-[100%] mb-[60px] md:px-[40px] md:py-[27px] hover:bg-[#1E1E1E]  "
            >
              <p>Proceed to shipping summary</p>
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      <VidModal />
    </section>
  );
}
