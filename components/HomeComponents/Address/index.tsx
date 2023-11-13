import React from "react";
import Image from "next/image";

const bgImage = {
  background: "url(/img/address-background.svg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export function Address() {
  return (
    <section className="pb-[50px] px-[20px] lg:px-[50px] lg:pb-[50px]">
      <div className="lg:flex mb-[50px] lg-items-center lg:gap-[51px] lg:w-[100%] lg:mb-[100px]   ">
        <div className="w-[100%] flex flex-col gap-[20px] mb-[40px]  ">
          <h2 className="text-[20px] font-semibold md:text-[24px] ">CANADA</h2>
          <div className="lg:flex-col  lg:items-center lg:gap-[50px] w-[100%]  ">
            <div className="flex mb-[50px] gap-[40px]">
              <div className="flex gap-[20px] w-[60%] ">
                <div>
                  <Image
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] ">
                  NORTH YORK
                  <br />
                  Unit 16 3625 Weston Road North York ON M9LIV8
                  <br />
                  Canada
                </p>
              </div>
              <div className="flex gap-[20px] w-[45%] ">
                <div>
                  <Image
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] ">
                  BRAMPTON
                  <br /> 5 Stanford Drive Brampton
                  <br /> ON L6WIL3
                  <br /> Canada
                </p>
              </div>
            </div>
            <div className="flex gap-[40px]">
              <div className="flex gap-[20px] w-[45%] ">
                <div>
                  <Image
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] ">
                  OSHAWA
                  <br /> 1160 Sincoe Street <br /> South LIH5L8
                  <br /> Canada
                </p>
              </div>
              <div className="flex gap-[20px] w-[45%] ">
                <div>
                  <Image
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] ">
                  AJAX
                  <br /> 98 Harwood Ave S,
                  <br /> Ajax, ON L1S 2H6
                  <br /> Canada
                </p>
              </div>
            </div>
            <div className="flex gap-[40px] mt-[50px]">
              <div className="flex gap-[20px] w-[45%] ">
                <div>
                  <Image
                    src="/img/location-pin.svg"
                    alt="Ikeja Lagos State location"
                    width={30}
                    height={30}
                  />
                </div>
                <p className="text-[16px] font-[500] md:text-[18px] ">
                  BRANTFORD
                  <br /> 196 Dalhousie St unit 4, <br /> Brantford, ON N3S 3T7
                  <br /> Canada
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-2 border-[#1E1E1E]  "></div>

        <div className="w-[100%] m-auto flex flex-col gap-[20px] mt-0  ">
          <h2 className="text-[20px] font-semibold md:text-[24px] ">Nigeria</h2>

          <div className="lg:flex lg:items-center lg:gap-[50px] ">
            <div className="flex gap-[20px] w-[60%] mb-[40px] lg:mb-[0px] ">
              <div>
                <Image
                  src="/img/location-pin.svg"
                  alt="Ikeja Lagos State location"
                  width={30}
                  height={30}
                />
              </div>
              <p className="text-[16px] font-[500] md:text-[18px] ">
                5/7 Alhaji Rafiu Street, Off Airport Road, Apakun Mafoluku,
                Oshodi, <br /> Lagos. Nigeria.
              </p>
            </div>
            <div className="flex gap-[20px] w-[60%] ">
              <div>
                <Image
                  src="/img/location-pin.svg"
                  alt="Ikeja Lagos State location"
                  width={30}
                  height={30}
                />
              </div>
              <p className="text-[16px] font-[500] md:text-[18px] ">
                10, UGO NNEBUFE STREET, OFF BAALE SEKONI STREET, <br /> AJAO
                ESTATE. LAGOS
              </p>
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
