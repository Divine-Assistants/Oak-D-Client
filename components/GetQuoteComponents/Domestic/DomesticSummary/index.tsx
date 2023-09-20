import {
  DomesticContext,
  DomesticContextType,
} from "@/context/DomesticWrapper";
import { GlobalContext } from "@/context/GlobalWrapper";
import React, { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ClientDataType } from "@/pages/quote/domestic";
import { userPackageDataType } from "@/pages/quote/warehousing";
import emailjs from 'emailjs-com';

interface DomesticSummaryType {
  data: ClientDataType;
  userPackageData: userPackageDataType;
  successfulDomesticPackage: boolean;
  registerPackage: (arg: ClientDataType) => void;
}

export function DomesticSummary({ 
  data,
  successfulDomesticPackage,
  userPackageData,
  registerPackage 
}: DomesticSummaryType) {
  const { trail, setTrail } = useContext(DomesticContext);
  const [showModal, setShowModal] = useState(false);
  const { glotrail, setGlotrail } = useContext(GlobalContext);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 20, behavior: "smooth" });
  }

  async function handleSubmit() {
    registerPackage(data);

    if(successfulDomesticPackage === true){
      const package_date = new Date(userPackageData.createdAt)
      const year = package_date.getFullYear();
      const month = package_date.toLocaleDateString('default', {month: 'long'});
      const day = package_date.toLocaleDateString('default', { day: 'numeric' });
      const formattedDate = `${day} ${month}, ${year}`

      try {
        // CONFIGURE EMAILJS
        const emailParams = {
          from_name: userPackageData.sender,
          package_name: userPackageData.packageName,
          date: formattedDate,
        };
        await emailjs.send('service_j32sykj', 'template_vjifvfc', emailParams, 'SLaJAJfG-62Jj7HZX');

        setShowModal(true);

      } catch (error) {
        console.log(error)
      }

    }

    
    // window.scrollTo(0, 0);
  }

  return (
    <section style={{ display: trail === 3 && glotrail !== 4 ? "block" : "none" }}>
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
              onClick={handleSubmit}
              style={{ display: trail === 3 ? "flex" : "none" }}
            >
              <p>Proceed to checkout</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      
      {/* MODAL PAGE */}
      <div style={{display: showModal ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] md:w-[400px] lg:w-[500px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-[30px] font-poppins ">

                <p className="text-center text-[18px] lg:text-[24px] mb-[20px]">Your request has been submitted, our team will contact you shortly. For immediate help, proceed to contact us</p>

                <div className="flex gap-x-[20px] ">
                    <button 
                    onClick={() => {
                      setGlotrail(0);
                      setTrail(0);
                    }}  
                    className="bg-[#9C9C9C] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%] ">Continue</button>

                    <button 
                      onClick={()=> setGlotrail(4)}
                      className="bg-[#0A089A] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Contact Us</button>
                </div>
            </div>
      </div>
    </section>
  );
}
