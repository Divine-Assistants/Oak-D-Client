import Image from "next/image";

export function OurLocation() {
  return (
    <section className="my-[50px]">
      <h1 className="uppercase mb-[20px] text-[#1E1E1E] text-[32px] font-[600] ">
        Our Location
      </h1>

      <h2 className="uppercase text-[#1E1E1E] text-[24px] mb-[10px] font-[600]">
        Canada
      </h2>

      <div className="mb-[20px] text-[#1E1E1E] lg:flex lg:gap-x-[50px]">
        <div className="flex items-start gap-x-[15px] mb-[20px] max-w-[300px]">
          <Image
            src="../img/location-icon.svg"
            alt="Location Icon"
            width={30}
            height={30}
            className=" "
          />
          <p className="text-[18px] font-[500]">
            <span className="uppercase">New York</span> <br /> Unit 16 3625
            Weston Road, North York ON M9L1V8 Canada
          </p>
        </div>

        <div className="flex items-start gap-x-[15px] max-w-[300px]">
          <Image
            src="../img/location-icon.svg"
            alt="Location Icon"
            width={30}
            height={30}
            className=" "
          />
          <p className="text-[18px] font-[500]">
            <span className="uppercase">Brampton</span> <br /> 5 Stafford Drive,
            Brampton, ON L6W 1L3 Canada
          </p>
        </div>
      </div>

      <div className="mb-[30px] text-[#1E1E1E] lg:flex lg:gap-x-[50px]  ">
        <div className="flex items-start gap-x-[15px] mb-[20px] max-w-[300px]">
          <Image
            src="../img/location-icon.svg"
            alt="Location Icon"
            width={30}
            height={30}
            className=" "
          />
          <p className="text-[18px] font-[500]">
            <span className="uppercase">OSHAWA</span> <br /> 1160 Simcoe Street
            South L1H5L8 Canada
          </p>
        </div>

        <div className="flex items-start gap-x-[15px] max-w-[300px]">
          <Image
            src="../img/location-icon.svg"
            alt="Location Icon"
            width={30}
            height={30}
            className=" "
          />
          <p className="text-[18px] font-[500]">
            <span className="uppercase">AJAX</span> <br />7 Shapland Crescent
            Ajax L1Z0K2 Canada
          </p>
        </div>
      </div>

      <h2 className="uppercase text-[#1E1E1E] text-[24px] mb-[10px] font-[600]">
        Nigeria
      </h2>

      <div className="mb-[20px] text-[#1E1E1E] lg:flex lg:gap-x-[50px] ">
        <div className="flex items-start gap-x-[15px] mb-[20px] max-w-[300px]">
          <Image
            src="../img/location-icon.svg"
            alt="Location Icon"
            width={30}
            height={30}
            className=" "
          />
          <p className="text-[18px] font-[500]">
            No. 56, Oladipo Street, Off Awolowo Way, Ikeja, Lagos State, Nigeria
          </p>
        </div>

        <div className="flex items-start gap-x-[15px] max-w-[300px]">
          <Image
            src="../img/location-icon.svg"
            alt="Location Icon"
            width={30}
            height={30}
            className=" "
          />
          <p className="text-[18px] font-[500]">
            Flat 2B, Block 12,Victoria Garden City, Lekki, Lagos State, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
