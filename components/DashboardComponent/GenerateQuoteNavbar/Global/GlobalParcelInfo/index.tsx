import Image from "next/image";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { useEffect } from "react";
import {
  GlobalParcelInfoContext,
  GlobalSummaryContext,
  GlobalCrumbContext,
} from "@/context/GlobalShipping";
import { GlobalBreadcrumb } from "../GlobalBreadcrumb";

export type ParcelInformationDataType = {
  packageName: string;
  packageWeight: string;
  packageType: string;
  price: number;
  dimension: {
    length: string;
    breadth: string;
    height: string;
  };
  departure: string;
  arrival: string;
  packageDescription: string;
};
interface ParcelInformationType {
  setData: Dispatch<SetStateAction<any>>;
}
const initialParcelInfo = {
  packageName: "",
  packageWeight: "",
  packageType: "Global",
  price: 0,
  dimension: {
    length: "",
    breadth: "",
    height: "",
  },
  departure: "",
  arrival: "",
  // postalCode: '',
  packageDescription: "",
};

export function GlobalUserParcelInfo({ setData }: ParcelInformationType) {
  const { globalParcelInfo, setGlobalParcelInfo } = useContext(
    GlobalParcelInfoContext
  );
  const { globalSummary, setGlobalSummary } = useContext(GlobalSummaryContext);

  // Breadcrumbs Context
  const { setGlobalCrumb } = useContext(GlobalCrumbContext);

  const [parcelData, setParcelData] =
    useState<ParcelInformationDataType>(initialParcelInfo);

  const handleParcelDataChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
    setData((prevData: any) => {
      return {
        ...prevData,
        newPackage: parcelData,
      };
    });
    setGlobalParcelInfo(false);
    setGlobalCrumb(4);
    setGlobalSummary(true);

    window.scrollTo(0, 0);
  }

  return (
    <section
      style={{ display: globalParcelInfo && !globalSummary ? "block" : "none" }}
      className="p-[20px] "
    >
      <GlobalBreadcrumb />
      <div className="flex flex-col lg:flex-row lg:gap-x-[20px] ">
        <div className="text-[24px] text-[#1E1E1E] font-[600] mb-[20px] lg:mb-0 lg:w-[500px] lg:text-[36px] ">
          <h1>
            Fill the form to get a Global{" "}
            <span className="text-[#A1A1A1] ">shipping summary</span> estimate
          </h1>
        </div>

        <form className="w-[100%] lg:w-[70%] ">
          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="nameOfCargo" className="mb-[8px] font-[600] ">
              Name of Cargo
            </label>
            <input
              id="nameOfCargo"
              type="text"
              name="packageName"
              value={parcelData.packageName}
              onChange={handleParcelDataChange}
              placeholder="Name"
              className="p-[15px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
            />
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="weight" className="mb-[8px] font-[600] ">
              Weight (kg)
            </label>
            <input
              id="weight"
              type="text"
              name="packageWeight"
              value={parcelData.packageWeight}
              onChange={handleParcelDataChange}
              placeholder="0"
              className="p-[15px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
            />
          </div>

          <p className="text-[#1E1E1E] text-[16px] mb-[8px] font-[600]">
            Dimension (in)
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-[10px] lg:items-center mb-[15px] ">
            <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] lg:w-[30%] lg:mb-0 ">
              <input
                id="length"
                type="number"
                name="dimension.length"
                value={parcelData.dimension.length}
                onChange={handleParcelDataChange}
                placeholder="Length"
                className="p-[15px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A]  "
              />
            </div>

            <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] lg:w-[30%] lg:mb-0 ">
              <input
                id="breath"
                type="number"
                name="dimension.breadth"
                value={parcelData.dimension.breadth}
                onChange={handleParcelDataChange}
                placeholder="Breath"
                className="p-[15px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              />
            </div>

            <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] lg:w-[30%] lg:mb-0 ">
              <input
                id="height"
                type="number"
                name="dimension.height"
                value={parcelData.dimension.height}
                onChange={handleParcelDataChange}
                placeholder="Height"
                className="p-[15px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-x-[20px] items-center ">
            <div className="mb-[15px] flex flex-col text-[#1E1E1E] text-[16px] w-[100%] ">
              <label htmlFor="departure" className="mb-[8px] font-[600] ">
                Departure
              </label>
              <select
                name="departure"
                value={parcelData.departure}
                onChange={handleParcelDataChange}
                id="departure"
                className="p-[15px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] w-[100%] "
              >
                <option value="">--Select a departure location--</option>
                <option value="Port-Harcourt, Nigeria">
                  North-York, Canada
                </option>
                <option value="Oshawa, Canada">Oshawa, Canada</option>
                <option value="Brampton, Canada">Brampton, Canada</option>
                <option value="Ajax, Canada">Ajax, Canada</option>
                <option value="Ikeja, Nigeria">Ikeja, Nigeria</option>
                <option value="Lekki, Nigeria">Lekki, Nigeria</option>
              </select>
            </div>

            <div className="mb-[15px] flex flex-col text-[#1E1E1E] text-[16px] w-[100%] ">
              <label htmlFor="arrival" className="mb-[8px] font-[600] ">
                Arrival
              </label>
              <select
                name="arrival"
                value={parcelData.arrival}
                onChange={handleParcelDataChange}
                id="arrival"
                className="p-[15px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] w-[100%] "
              >
                <option value="">--Select an arrival location--</option>
                <option value="Port-Harcourt, Nigeria">
                  North-York, Canada
                </option>
                <option value="Oshawa, Canada">Oshawa, Canada</option>
                <option value="Brampton, Canada">Brampton, Canada</option>
                <option value="Ajax, Canada">Ajax, Canada</option>
                <option value="Ikeja, Nigeria">Ikeja, Nigeria</option>
                <option value="Lekki, Nigeria">Lekki, Nigeria</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-[15px]">
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
                className="absolute top-0 left-0 w-[100%] h-[100%] opacity-0"
              />
            </label>
          </div>

          <div className="flex flex-col mb-[15px] text-[#1E1E1E] text-[16px] ">
            <label htmlFor="address" className="mb-[8px] font-[600] ">
              Package Description
            </label>
            <textarea
              id="address"
              name="packageDescription"
              value={parcelData.packageDescription}
              onChange={handleParcelDataChange}
              className="p-[20px] border-[2px] border-[#CBCBCB] rounded-[8px] bg-[#F5F5F5] focus:outline-[#0A089A] "
            />
          </div>

          <button
            type="button"
            className="bg-[#0A089A] p-[15px] flex gap-x-[10px] items-center justify-center w-[100%] text-[#FEFEFE] text-[16px] rounded-[8px] lg:text-[18px] "
            onClick={handleFormSubmit}
          >
            Proceed to Shipping Summary
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
