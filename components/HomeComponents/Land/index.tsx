import React, { useContext } from "react";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import { TrackContext } from "@/context/TrackWrapper";
import router, { Router } from "next/router";

export function Land() {
  const {
    track,
    setTrack,
    trackPage,
    setTrackPage,
    userDetail,
    setUserDetail,
    tracId,
    setTrackId,
    processing,
    setProcessing,
    exist,
    setExist,
  } = useContext(TrackContext);

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTrackId((prevLoginData: any) => {
      return {
        ...prevLoginData,
        [name]: value,
      };
    });
  };

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);
    try {
      const { msg, data, token, status } = await trackParcel(tracId);
      if (data) {
        setUserDetail(data);
        router.push("/track");
        setProcessing(false);
        setExist(status);
        console.log(status);
        setTrackPage(1);
        const inputElement = document.getElementById(
          "trackingID"
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.value = "";
        }
      } else {
        setProcessing(false);
        setExist(status);
      }
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  return (
    <div className="100vh mt-[40px] 100vw relative lg:mb-[100px]">
      <div>
        <div className="block md:hidden">
          <Image
            src="/img/land-image.svg"
            alt="OAK Image"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="hidden md:block">
          <img
            src="/img/land-image1.svg"
            alt="OAK Image"
            className="w-[100%] h-[100%] md:h-[100%] "
          />
        </div>
      </div>
      <div className="absolute top-[40px] text-[#FEFEFE] ">
        <div className="w-[95%] text-center m-auto mt-[92px] md:mt-[19px] font-[500] mb-[47px] md:mb-[0px] lg:mb-[50px] lg:w-[80%] lg:mt-[50px] lg:m-auto ">
          <h2 className="font-[700] text-[30px] mb-[20px] md:w-[50%] lg:w-[70%] lg:text-[50px] leading-[50px] md:text-left  ">
            Fast and Reliable Cargo & Freight Shipping
          </h2>
          <p className="mb-[20px] md:mb-[5px] lg:mb-[20px] text-[16px] md:w-[50%] lg:text-[18px] lg:w-[50%] md:text-left ">
            Choose OAK & D for streamlined freight services and enjoy
            hassle-free shipping that meets your unique business requirements.
          </p>
          <form onSubmit={handleClick} className="md:relative md:w-[627px]  ">
            <input
              type="text"
              name="trackingID"
              id="trackingID"
              onChange={handleLoginChange}
              className="py-[15px] px-[37px] w-[100%] text-[24px] text-center outline-none bg-[#FEFEFE] border-2 border-[#E3E3E3] text-[#1E1E1E] placeholder:text-[#989898] placeholder:text-[24px] rounded-[10px] mb-[25px] md:py-[15px] md:text-[24px] md:pl-[34px] md:pr-[10px] md:text-left md:placeholder:text-[18px]  "
              placeholder={
                exist === "Unsuccessful"
                  ? "Parcel dosen't exist"
                  : "Input Tracking Number"
              }
            />
            {processing && (
              <button
                className="bg-[#0A089A] text-[24px] rounded-[10px] py-[10px] px-[23px]  md:absolute md:top-[5px] md:right-[13px] md:translate-x-[2px] md:text-[18px] lg:py-[15px] lg:px-[32px]  "
                type="submit"
              >
                Tracking...
              </button>
            )}

            {!processing && (
              <button
                className="bg-[#AC0108] text-[24px] rounded-[10px] py-[10px] px-[23px] hover:bg-[#0A089A]  md:absolute md:top-[5px] md:right-[13px] md:translate-x-[2px] md:text-[18px] lg:py-[15px] lg:px-[32px]  "
                type="submit"
              >
                Track Parcel
              </button>
            )}
          </form>
        </div>
        <div className="mb-[30px] md:mb-[0px] ">
          <div className="flex items-center m-auto w-[80%] md:w-[50%] md:ml-[10%]  ">
            <p className="text-[48px] font-[600] mr-[20px] lg:text-[64px]    ">
              10+
            </p>
            <p className="text-[14px] w-[20%] lg:text-[20px] ">
              {" "}
              Years Experience{" "}
            </p>
            <div className=" border-2 border-[#FEFEFE] rotate-[90deg] w-[47px] "></div>
            <p className="text-[48px] font-[500] font-[600] mr-[20px] lg:text-[64px]  ">
              3K
            </p>
            <p className="text-[14px] font-[500] w-[20%] lg:text-[20px] ">
              {" "}
              Satisfied Customers{" "}
            </p>
          </div>
        </div>
        <div className="md:translate-y-[-90px] md:w-fit md:ml-[65%] lg:translate-y-[-100%]  ">
          <p className="text-[16px] font-[500] text-center mb-[10px] ">
            Scroll down for more
          </p>
          <div>
            <img
              src="/img/down.svg"
              alt="scroll down"
              className={styles.bounce}
              style={{ margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
