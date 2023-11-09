import { TrackContext } from "@/context/TrackWrapper";
import Image from "next/image";
import React, { useContext } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

export function ParcelTrack() {
  const {
    track,
    setTrack,
    trackPage,
    setTrackPage,
    userDetail,
    setUserDetail,
    tracId,
    setTrackId,
  } = useContext(TrackContext);
  const returnBtn = () => {
    setTrackPage(0);
    setUserDetail({
      ETA: "",
      arrival: "",
      departure: "",
      packageType: "",
      sender: "",
      shipmentStatus: "",
    });
  };
  return (
    <section
      className="relative"
      style={{ display: trackPage === 1 ? "block" : "none" }}
    >
      <div>
        <Image
          src={"/img/Map.svg"}
          alt={"map"}
          height={100}
          width={100}
          className="object-cover w-[100%] h-[100vh] hidden lg:block"
        />
      </div>
      <div>
        <Image
          src={"/img/Map1.svg"}
          alt={"map"}
          height={100}
          width={100}
          className="object-cover w-[100%] h-[100vh] lg:hidden block"
        />
      </div>

      <div className=" bg-[#1E1E1E]/[.6] h-[100%] lg:h-[100%] absolute top-0 w-[100%]  ">
        <FaArrowCircleLeft
          className=" text-[18px] cursor-pointer lg:text-[30px] ml-[10%] mt-[2%] text-[#AC0108] hover:text-[#0A089A] "
          onClick={returnBtn}
        />
        <div className="text-[#1E1E1E] text-[24px] md:text-[28px] mb-[10%] mt-[10%] lg:mb-[3%] lg:mt-[1%] w-[50%] text-center m-auto bg-[#FEFEFE]/[.85] rounded-[10px] ">
          OAK <span className="text-[#0A089A] "> TRAC</span>
          <span className="text-[#AC0108]">KER</span>
        </div>
        <div className="bg-[#FEFEFE]/[.85] lg:w-[60%] w-[80%] lg:py-[29px] py-[15px] text-[#1E1E1E] rounded-[10px] h-[70%]  m-auto mb-[15px] ">
          <div className="lg:mb-[13px] mb-[5px] flex items-center justify-between lg:px-[20px] md:text-[18px] text-[14px] font-[500] px-[8px] ">
            <p>Tracking Number</p>
            <p>{tracId.trackingID}</p>
          </div>
          <div className="border border-[#515151] w-[100%] lg:mb-[15px]"></div>
          <div className="w-fit m-auto text-center lg:mb-[15px] mb-[30px] ">
            <p className="text-[#0A089A] lg:text-[20px] font-semibold ">
              Status
            </p>
            <p className="text-[#1E1E1E] lg:text-[28px] font-semibold ">
              Package:{" "}
              <span className="text-[#0A089A] ">
                {userDetail.shipmentStatus}
              </span>
            </p>
          </div>
          <div className="lg:w-[90%] m-auto font-[500] lg:text-[18px] text-[14px] px-[5px]  ">
            <div className="flex items-center justify-between lg:mb-[10px] mb-[20px]">
              <p>Client Name:</p>
              <p>{userDetail.sender}</p>
            </div>
            <div className="flex items-center justify-between lg:mb-[10px] mb-[20px]">
              <p>Type Of Shipping:</p>
              <p>{userDetail.packageType}</p>
            </div>
            <div className="flex items-center justify-between lg:mb-[10px] mb-[20px]">
              <p>Departure:</p>
              <p>{userDetail.departure}</p>
            </div>
            <div className="flex items-center justify-between lg:mb-[10px] mb-[20px]">
              <p>Arrival:</p>
              <p>{userDetail.arrival}</p>
            </div>
            <div className="flex items-center justify-between lg:mb-[10px] mb-[20px]">
              <p>Estimated Time Of Arrival:</p>
              <p>
                <span>userDetail.ETA</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-[#FFFFFF] text-[18px] mb-[10%] w-[100%] text-center m-auto rounded-[10px] flex items-center gap-[8px] w-fit m-auto">
          <p>We are bringing it to you</p>{" "}
          <span role="img" aria-label="Perfect">
            👌
          </span>{" "}
        </div>
      </div>
    </section>
  );
}
