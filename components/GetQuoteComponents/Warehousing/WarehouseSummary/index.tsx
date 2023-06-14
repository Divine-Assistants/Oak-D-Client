import { DomesticContext } from "@/context/DomesticWrapper";
import { GlobalContext } from "@/context/GlobalWrapper";
import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ClientDataType } from "@/pages/quote/domestic";

interface WarehouseSummaryType {
  data: ClientDataType;
  registerPackage: (arg: ClientDataType) => void;
}

export function WarehouseSummary({
  data,
  registerPackage,
}: WarehouseSummaryType) {
  const { trail, setTrail } = useContext(DomesticContext);
  const { glotrail, setGlotrail } = useContext(GlobalContext);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 20, behavior: "smooth" });
  }

  function handleSubmit() {
    registerPackage(data);
    setTrail(2.5);
    scrollToTop();
  }
  return (
    <section style={{ display: glotrail === 2 ? "block" : "none" }}>
      <div className=" w-[90%] m-auto md:flex md:justify-between mb-[100px] mt-[100px] ">
        <div className="mb-[60px] md:w-[40%] mt-[49px] ">
          <h1 className="text-[16px] font-[600] text-[#AC0108] mb-[15px] block md:hidden ">
            Storage Summary
          </h1>
          <p className=" text-[40px] font-[600] ">
            Summary/Invoice of the{" "}
            <span className="text-[#A1A1A1]">Cargo details</span> provided
          </p>
        </div>
        <div className="flex-col gap-[47px] text-[16px] font-[600] text-[#1E1E1E] md:w-[50%] border-2 border-[#E7E7E7] px-[25px] rounded-[15px] pt-[30px] ">
          <h2 className="text-[18px] md:text-[24px] font-[600] text-center ">
            Storage Summary
          </h2>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Sender&apos;s Name:</p>
            <p className="text-[#AC0108] ">{`${data?.sender.firstName} ${data?.sender.lastName}`}</p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Name of Parcel:</p>
            <p className="text-[#AC0108] ">{data?.newPackage?.packageName}</p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Type of Service:</p>
            <p className="text-[#AC0108] ">{data?.newPackage?.packageType}</p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Weight:</p>
            <p className="text-[#AC0108] ">
              {data?.newPackage?.packageWeight}kg
            </p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Dimension:</p>
            <p className="text-[#AC0108] ">
              <span>{data?.newPackage?.dimension.length}in</span>x
              <span>{data?.newPackage?.dimension.breadth}in</span>x
              <span>{data?.newPackage?.dimension.height}in</span>
            </p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Pickup Address:</p>
            <p className="text-[#AC0108] ">{data?.newPackage?.pickupAddress}</p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>postal Code:</p>
            <p className="text-[#AC0108] ">{data?.newPackage?.pickupCode}</p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Price:</p>
            <p className="text-[#AC0108] ">${data?.newPackage?.price}</p>
          </div>
          <div className=" mt-[60px]">
            <button
              onClick={handleSubmit}
              className="flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[55px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[60px] md:px-[155px] md:py-[27px] hover:bg-[#1E1E1E] "
            >
              <p>Continue</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal page */}
      <div
        className="bg-[#1E1E1E]/[.4] absolute top-0 w-[100vw] h-[190%] md:h-[160%] "
        style={{ display: trail === 2.5 ? "block" : "none" }}
      >
        <div className="fixed bg-[#FEFEFE] w-[80%] md:w-[60%] m-auto rounded-[15px] top-[10%] left-[10%] md:left-[20%] py-[40px] md:py-[61px] ">
          <div className="w-[80%] m-auto text-center ">
            <p className="font-[500] text-[18px] md:text-[28px] text-[#1E1E1E] mb-[31px] md:mb-[60px] ">
              Your request has been submitted, our team will contact you
              shortly. For immediate help, kindly proceed to contact us
              Immediately
            </p>
            <div className="flex items-center gap-[10px] md:gap-[24px] md:text-[26px] text-[16px] font-[500] text-[#FEFEFE] justify-center ">
              <button
                onClick={() => {
                  setGlotrail(0);
                  setTrail(0);
                }}
                className="bg-[#9C9C9C] py-[16px] md:py-[20px] px-[20px] md:px-[29px] rounded-[10px] "
              >
                Continue
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#0A089A] py-[16px] md:py-[20px] px-[13px] md:px-[22px] rounded-[10px] "
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
