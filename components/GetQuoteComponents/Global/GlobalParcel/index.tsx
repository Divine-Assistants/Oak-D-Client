import { GlobalContext } from "@/context/GlobalWrapper";
import React, {
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { VidModal01, scrollToTop } from "@/components";
import { FaArrowRight } from "react-icons/fa";
import { clientParcelInfo } from "@/components";

interface GlobalParcelType {
  setData: Dispatch<SetStateAction<any>>;
}

export const initialGlobalParcelInfo = {
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
  packageDescription: "",
};

export function GlobalParcel({ setData }: GlobalParcelType) {
  const { glotrail, setGlotrail, setShowVideo } = useContext(GlobalContext);
  const [parcelData, setParcelData] = useState<clientParcelInfo>(
    initialGlobalParcelInfo
  );

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
    setData((prevData: any) => {
      return {
        ...prevData,
        newPackage: parcelData,
      };
    });
    setParcelData(initialGlobalParcelInfo);
    setGlotrail(3);
    window.scrollTo(0, 0);
  }

  return (
    <section style={{ display: glotrail === 2 ? "block" : "none" }}>
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
        <div
          className="md:w-[50%] "
          style={{ display: glotrail === 2 ? "block" : "none" }}
        >
          <form>
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
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] "
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Weight
              </label>
              <div className="relative w-[100%] flex items-center ">
                <input
                  type="number"
                  name="packageWeight"
                  value={parcelData.packageWeight}
                  onChange={handleParcelDataChange}
                  id="packageWeight"
                  className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                  placeholder="0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="" className="font-[600] ">
                Dimension
              </label>
              <div className="flex flex-col gap-[10px] mb-[25px] lg:flex-row">
                <div className="relative w-[100%] flex items-center ">
                  <input
                    type="number"
                    name="dimension.length"
                    value={parcelData.dimension.length}
                    onChange={handleParcelDataChange}
                    id="length"
                    className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                    placeholder="Length"
                  />
                  <p className="absolute font-[600] text-[18px] right-[5%] ">
                    In
                  </p>
                </div>
                <div className="relative w-[100%] flex items-center ">
                  <input
                    type="number"
                    name="dimension.breadth"
                    value={parcelData.dimension.breadth}
                    onChange={handleParcelDataChange}
                    id="breadth"
                    className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                    placeholder="Breadth"
                  />
                  <p className="absolute font-[600] text-[18px] right-[5%] ">
                    In
                  </p>
                </div>
                <div className="relative w-[100%] flex items-center ">
                  <input
                    type="number"
                    name="dimension.height"
                    value={parcelData.dimension.height}
                    onChange={handleParcelDataChange}
                    id="height"
                    className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
                    placeholder="Height"
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
                Departure
              </label>
              <select
                name="departure"
                value={parcelData.departure}
                onChange={handleParcelDataChange}
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
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

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Arrival
              </label>
              <select
                name="arrival"
                value={parcelData.arrival}
                onChange={handleParcelDataChange}
                className="rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] "
              >
                <option value="">--Select an Arrival location--</option>
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

            <div className="flex flex-col gap-[10px] mb-[25px]">
              <label htmlFor="" className="font-[600] ">
                Upload Image
              </label>
              <input
                type="file"
                src=""
                alt=""
                className="  "
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
                Parcel Description
              </label>
              <input
                type="text"
                id=""
                className="rounded-[15px] border border-[#A1A1A1] h-[165px] outline-[#0A089A] placeholder-[]  pl-[24px] pt-[0px] "
                placeholder=""
              />
            </div>
          </form>
          <div className="">
            <button
              className="flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[55px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] md:px-[140px] md:py-[27px] md:mr-[5%] hover:bg-[#1E1E1E] "
              onClick={handleFormSubmit}
            >
              <p>Proceed to shipping summary</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <VidModal01 />
    </section>
  );
}
