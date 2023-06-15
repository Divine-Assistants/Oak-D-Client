import { GlobalContext } from "@/context/GlobalWrapper";
import React, {
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { FaArrowRight } from "react-icons/fa";
import { VidModal01 } from "../../DIY";
import { clientParcelInfo } from "../../Domestic";

interface WarehouseParcelType {
  setData: Dispatch<SetStateAction<any>>;
}
const initialWarehouseParcelInfo = {
  packageName: "",
  packageWeight: "",
  packageType: "Warehousing",
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

export function WarehouseParcel({ setData }: WarehouseParcelType) {
  const [parcelData, setParcelData] = useState<clientParcelInfo>(
    initialWarehouseParcelInfo
  );
  const { glotrail, setGlotrail, setShowVideo } = useContext(GlobalContext);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 20, behavior: "smooth" });
  }

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

  //   Calculate Package Price
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
    setParcelData(initialWarehouseParcelInfo);
    setGlotrail(2);
    scrollToTop();
    // window.scrollTo(0,0);
  }
  return (
    <section
      className="mt-[100px] "
      style={{ display: glotrail === 1 ? "block" : "none" }}
    >
      <div className=" w-[90%] m-auto md:flex md:justify-between ">
        <div className="mb-[60px] md:w-[40%] mt-[49px] ">
          <h1 className="text-[16px] font-[600] text-[#AC0108] mb-[15px] block md:hidden ">
            Parcel Information
          </h1>
          <p className=" text-[40px] font-[600] ">
            Fill the form to get a{" "}
            <span className="text-[#A1A1A1]">Shipping summary</span> estimate
          </p>
        </div>
        <div className="md:w-[50%] ">
          <form>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="nameOfCargo" className="font-[600] ">
                Name Of Cargo
              </label>
              <input
                id="nameOfCargo"
                type="text"
                name="packageName"
                value={parcelData.packageName}
                onChange={handleParcelDataChange}
                placeholder="Name"
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Weight
              </label>
              <div className="relative w-[100%] flex items-center ">
                <input
                  id="weight"
                  type="text"
                  name="packageWeight"
                  value={parcelData.packageWeight}
                  onChange={handleParcelDataChange}
                  placeholder="0"
                  className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                />
                <p className="absolute font-[600] text-[18px] right-[5%] ">
                  kg
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="" className="font-[600] ">
                Dimension
              </label>
              <div className="flex flex-col gap-[10px] mb-[25px] lg:flex-row">
                <div className="relative w-[100%] flex items-center ">
                  <input
                    id="length"
                    type="number"
                    name="dimension.length"
                    value={parcelData.dimension.length}
                    onChange={handleParcelDataChange}
                    placeholder="Length"
                    className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                  />
                  <p className="absolute font-[600] text-[18px] right-[5%] ">
                    In
                  </p>
                </div>
                <div className="relative w-[100%] flex items-center ">
                  <input
                    id="breath"
                    type="number"
                    name="dimension.breadth"
                    value={parcelData.dimension.breadth}
                    onChange={handleParcelDataChange}
                    placeholder="Breath"
                    className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                  />
                  <p className="absolute font-[600] text-[18px] right-[5%] ">
                    In
                  </p>
                </div>
                <div className="relative w-[100%] flex items-center ">
                  <input
                    id="height"
                    type="number"
                    name="dimension.height"
                    value={parcelData.dimension.height}
                    onChange={handleParcelDataChange}
                    placeholder="Height"
                    className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                  />
                  <p className="absolute font-[600] text-[18px] right-[5%] ">
                    In
                  </p>
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
                Pickup Address
              </label>
              <input
                id="pickupAddress"
                type="text"
                placeholder="Pickup Address"
                name="pickupAddress"
                value={parcelData.pickupAddress}
                onChange={handleParcelDataChange}
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
              />
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Postal Code
              </label>
              <input
                id="pickupCode"
                type="number"
                placeholder="Postal Code"
                name="pickupCode"
                value={parcelData.pickupCode}
                onChange={handleParcelDataChange}
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
              />
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Upload Image
              </label>
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
              />
            </div>

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Package Description
              </label>
              <textarea
                id="address"
                name="packageDescription"
                value={parcelData.packageDescription}
                onChange={handleParcelDataChange}
                className="rounded-[15px] border border-[#A1A1A1] h-[165px] outline-[#0A089A] placeholder-[]  pl-[24px] pt-[0px] "
              />
            </div>

            <button
              type="button"
              onClick={handleFormSubmit}
              className="flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[55px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] md:px-[140px] md:py-[27px] md:mr-[5%] hover:bg-[#1E1E1E] "
            >
              <p>Proceed to shipping summary</p>
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
      <VidModal01 />
    </section>
  );
}
