import { TrackContext, TrackContextType } from "@/context/TrackWrapper";
import React, { useContext } from "react";
import axios from "axios";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface track {
  id: number;
  trackingId: string;
  shipment: string;
  type: string;
  status: string;
  ETA: {};
  departure: string;
  arrival: string;
  client: string;
  reciever: string;
}
export function TrackLand() {
  const { track, setTrack, trackPage, setTrackPage } = useContext(TrackContext);

  function handleClick() {
    e.prevent.default
    setTrackPage(1);
  }

  return (
    <main
      className="relative"
      style={{ display: trackPage === 0 ? "block" : "none" }}
    >
      <Navbar />
      <div className="w-[100vw] h-[100vh] ">
        <img
          src="/img/track-back.svg"
          alt="Track Item"
          className="w-[100%] h-[100%] object-cover block lg:hidden"
        />
        <img
          src="/img/track-back1.svg"
          alt="Track Item"
          className="w-[100%] h-[100%] object-cover hidden lg:block"
        />
      </div>
      <div className="absolute top-[100px] lg:top-[105px] lg:flex lg:items-center lg:justify-around lg:left-[5%] ">
        <div className="w-[90%] mt-[46px] m-auto bg-[#FEFEFE]/[.68] py-[28px] px-[19px] md:py-[48px] md:px-[39px] mb-[28px] md:mb-[48px] lg:w-[40%] lg:mt-[0px] ">
          <h1 className="font-[600] text-[20px] text-[#AC0108] mb-[10px] ">
            TRACK PARCEL
          </h1>
          <p className="font-[700] text-[32px] text-[#1E1E1E] ">
            To track your item, input the tracking number in the field provided
          </p>
        </div>
        <form className="md:relative md:w-[627px] w-fit grid place-items-center lg:mr-[100px]  ">
          <input
            type="text"
            name=""
            id=""
            className=" w-fit  py-[18px] px-[50px] ml-[15%] text-[16px] text-center outline-none bg-[#FEFEFE] border-2 border-[#E3E3E3] text-[#1E1E1E] placeholder:text-[#989898] placeholder:text-[16px] rounded-[10px] md:mb-[20px] mb-[20px] md:py-[12px] md:text-[24px] md:px-[74px] md:ml-[30%] md:placeholder:text-[18px] lg:py-[25px] md:px-[94px]  "
            placeholder="Input Tracking number"
            // value={track}
            // onChange={(e) => {
            //   setTrack(e.currentTarget.value);
            // }}
          />
          <button
            className="bg-[#AC0108] text-[16px] text-[#FEFEFE] rounded-[10px] py-[15px] px-[33px] ml-[15%] hover:bg-[#0A089A]  md:text-[18px]  md:ml-[30%] lg:top-[10%] lg:py-[20px] lg:px-[32px]  "
            onClick={handleClick}
          >
            Track Now
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
