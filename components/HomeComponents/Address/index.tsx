import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const bgImage = {
  background: "url(/img/address-background.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export function Address() {
  return (
    <section className="pb-[50px] px-[20px] lg:px-[50px] lg:pb-[50px]">
      <div className="lg:flex mb-[50px] lg-items-center lg:gap-[51px] lg:w-[100%] lg:mb-[100px]">
        <div className="w-[100%] flex flex-col gap-[20px] ">
          <h2 className="text-[20px] font-semibold md:text-[24px] ">CANADA</h2>
          <div className="lg:flex-col lg:items-center lg:gap-[50px] w-[100%]  ">
            <div className="grid sm:grid-cols-2 mb-[50px] gap-[40px]">
              <div className="grid grid-cols-10">
                <div className="col-span-2 flex justify-center">
                  <img
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    className="w-[20px] h-[30px]"
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] col-span-8">
                  NORTH YORK
                  <br />
                  Unit 16 3625 Weston Road North York ON M9L 1V8, Canada
                </p>
              </div>
              <div className="grid grid-cols-10">
                <div className="col-span-2 flex justify-center">
                  <img
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    className="w-[20px] h-[30px]"
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] col-span-8">
                  BRAMPTON
                  <br /> 5 Stanfford Drive, Brampton
                  <br /> ON L6W 1L3, Canada
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 mb-[50px] gap-[40px]">
              <div className="grid grid-cols-10">
                <div className="col-span-2 flex justify-center">
                  <img
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    className="w-[20px] h-[30px]"
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] col-span-8">
                  OSHAWA
                  <br /> 1160 Simcoe St S, Oshawa,
                  <br />
                  ON L1H 5L8, Canada
                </p>
              </div>
              <div className="grid grid-cols-10">
                <div className="col-span-2 flex justify-center">
                  <img
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    className="w-[20px] h-[30px]"
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] col-span-8">
                  AJAX
                  <br /> 98 Harwood Ave S,
                  <br /> Ajax, ON L1S 2H6, Canada
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 mb-[50px] gap-[40px]">
              <div className="grid grid-cols-10">
                <div className="col-span-2 flex justify-center">
                  <img
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    className="w-[20px] h-[30px]"
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] col-span-8">
                  BRANTFORD
                  <br /> 196 Dalhousie St unit 4, <br /> Brantford, ON N3S 3T7,
                  Canada
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-2 border-[#1E1E1E]  "></div>

        <div className="w-[100%] m-auto flex flex-col gap-[20px] mt-0  ">
          <h2 className="text-[20px] font-semibold md:text-[24px] ">Nigeria</h2>

          <div className="grid sm:grid-cols-2 mb-[50px] gap-[40px]">
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex justify-center">
                <img
                  src="/img/location-pin.svg"
                  alt="Ikeja Lagos State location"
                  className="w-[20px] h-[30px]"
                />
              </div>
              <p className="text-[16px] font-[500] md:text-[18px] col-span-8">
                5/7 Alhaji Rafiu Street, Off Airport Road, Apakun Mafoluku,
                Oshodi, <br /> Lagos. Nigeria.
              </p>
            </div>
            <div className="grid grid-cols-10">
              <div className="col-span-2 flex justify-center">
                <img
                  src="/img/location-pin.svg"
                  alt="Ikeja Lagos State location"
                  className="w-[20px] h-[30px]"
                />
              </div>
              <p className="text-[16px] font-[500] md:text-[18px] col-span-8">
                10, Ugo Nnebufe Street, Off Baale Sekoni Street, <br /> Ajao
                Estate. Lagos
              </p>
            </div>
            <div className="col-span-2">
              <div className="w-fit flex items-center gap-x-[25px] text-[16px] font-[500] md:text-[24px] justify-center">
                <Link
                  href={"https://wa.me/qr/JU7M5GDPZ7LYO1"}
                  className="flex gap-[25px]"
                >
                  <FaWhatsapp size="32px" />
                  09075015945
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[400px] mb-[15px] ">
        <Image
          src="/img/world-map.svg"
          alt="Locations Worldwide"
          width={300}
          height={300}
          className="w-[100%] h-[100%] "
        />
      </div>

      <div
        style={bgImage}
        className="w-[100%] xl:w-[80%] 2xl:w-[60%] mx-auto h-[600px] mb-[15px] "
      >
        <img
          src="/img/oak-container.png"
          alt="OAk & D Logistics"
          className="w-[100%] h-[100%] "
        />
      </div>
    </section>
  );
}
