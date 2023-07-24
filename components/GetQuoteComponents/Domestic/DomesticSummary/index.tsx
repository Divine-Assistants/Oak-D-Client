import {
  DomesticContext,
  DomesticContextType,
} from "@/context/DomesticWrapper";
import { GlobalContext } from "@/context/GlobalWrapper";
import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ClientDataType } from "@/pages/quote/domestic";

interface DomesticSummaryType {
  data: ClientDataType;
}

export function DomesticSummary({ data }: DomesticSummaryType) {
  const { trail, setTrail } = useContext(DomesticContext);
  const { glotrail, setGlotrail } = useContext(GlobalContext);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 20, behavior: "smooth" });
  }

  return (
    <section style={{ display: trail === 3 ? "block" : "none" }}>
      <div className=" w-[90%] m-auto md:flex md:justify-between mb-[100px] mt-[120px]">
        <div className="mb-[60px] md:w-[40%] mt-[49px] ">
          <h1 className="text-[16px] font-[600] text-[#AC0108] mb-[15px] block md:hidden ">
            Shipping Summary
          </h1>
          <p className=" text-[40px] font-[600] ">
            Summary/Invoice of the{" "}
            <span className="text-[#A1A1A1]">Cargo details</span> provided
          </p>
        </div>
        <div className="flex-col gap-[47px] text-[16px] font-[600] text-[#1E1E1E] md:w-[55%] border-2 border-[#E7E7E7] px-[25px] rounded-[15px] pt-[30px] ">
          <h2 className="text-[18px] md:text-[24px] font-[600] text-center ">
            Shipping Summary
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
              <span>{`${data?.newPackage?.dimension.length}in`}</span>x
              <span>{`${data?.newPackage?.dimension.breadth}in`}</span>x
              <span>{`${data?.newPackage?.dimension.height}in`}</span>
            </p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Departure:</p>
            <p className="text-[#AC0108] ">{data?.newPackage?.departure}</p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Arrival:</p>
            <p className="text-[#AC0108] ">{data?.newPackage?.arrival}</p>
          </div>
          <div className="flex items-center justify-between pb-[23px] pt-[23px] border-b-2 border-dashed border-b-[#E7E7E7]  ">
            <p>Price:</p>
            <p className="text-[#AC0108] ">${data?.newPackage?.price}</p>
          </div>
          <div className=" mt-[60px]">
            <button
              className="flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[55px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[60px] md:px-[75px] md:py-[27px] md:ml-[25%] hover:bg-[#1E1E1E] "
              onClick={() => {
                setTrail(4);
                scrollToTop();
              }}
              style={{ display: trail === 3 ? "flex" : "none" }}
            >
              <p>Proceed to checkout</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
