import React, { useContext } from "react";
import Image from "next/image";
import { QuoteModalContext } from "@/context/UserDashboardGenerateQuote";
import { DataType } from "../..";
import { PackageDataType } from "../..";
import { GlobalBreadcrumb } from "../GlobalBreadcrumb";
import emailjs from 'emailjs-com';
import { Spinner } from "@chakra-ui/react";
import { ContactPageContext } from "@/context/UserDashboardGenerateQuote";
import {
  GlobalSummaryContext,
  GlobalParcelInfoContext,
  GlobalCrumbContext,
} from "@/context/GlobalShipping";


interface ShippingSummaryType {
  warehouseGlobalPackage: (arg: DataType) => void;
  data: DataType;
  packageData: PackageDataType;
  successfulGlobalPackage: boolean;
  globalSpinner: boolean;
  showGlobalModal: boolean;
  setShowGlobalModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GlobalUserSummary({
  data,
  packageData,
  successfulGlobalPackage,
  warehouseGlobalPackage,
  globalSpinner,
  showGlobalModal,
  setShowGlobalModal,
}: ShippingSummaryType) {
  const { globalSummary, setGlobalSummary } = useContext(GlobalSummaryContext);
  const { globalParcelInfo, setGlobalParcelInfo } = useContext(
    GlobalParcelInfoContext
  );
  const {setShowContactPage} = useContext(ContactPageContext);

  async function handleSubmit() {
    warehouseGlobalPackage(data);
    
    if(successfulGlobalPackage === true){
      const package_date = new Date(packageData.createdAt)
      const year = package_date.getFullYear();
      const month = package_date.toLocaleDateString('default', {month: 'long'});
      const day = package_date.toLocaleDateString('default', { day: 'numeric' });
      const formattedDate = `${day} ${month}, ${year}`

      try {
        // CONFIGURE EMAILJS
        const emailParams = {
            from_name: packageData.sender,
            package_name: packageData.packageName,
            date: formattedDate,
        };

        await emailjs.send('service_j32sykj', 'template_vjifvfc', emailParams, 'SLaJAJfG-62Jj7HZX');
        // setGlobalSummary(false);
        // setShowQuoteModal(true);
        window.scrollTo(0, 0);

    } catch (error) {
        console.log(error);
    }
    }
  }

  return (
    <section
      style={{ display: globalSummary ? "block" : "none" }}
      className="p-[20px] "
    >
      <GlobalBreadcrumb />
      <div className="flex flex-col lg:flex-row lg:gap-x-[20px] ">
        <div className="mb-[20px] lg:mb-0 lg:w-[400px] ">
          <h1 className="text-[24px] text-[#1E1E1E] font-[600] lg:text-[36px] ">
            Summary/invoice of the{" "}
            <span className="text-[#A1A1A1] ">cargo details</span> provided
          </h1>
        </div>

        <div className="lg:bg-[#FFFFFF] lg:p-[20px] w-[100%] lg:w-[70%] rounded-[8px] ">
          <h1 className="hidden text-[#1E1E1E] text-[24px] font-[600] text-center mb-[15px] lg:block ">
            Shipping Summary
          </h1>

          <div className="text-[16px] font-[600] lg:text-[20px] ">
            <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
              <p>Sender&apos;s Name</p>
              <p className="text-[#AC0108] ">{`${data?.sender.firstName} ${data?.sender.lastName}`}</p>
            </div>
            <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
              <p>Name of Parcel</p>
              <p className="text-[#AC0108] ">{data?.newPackage?.packageName}</p>
            </div>
            <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
              <p>Type of Service</p>
              <p className="text-[#AC0108] ">{data?.newPackage?.packageType}</p>
            </div>
            <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
              <p>Weight:</p>
              <p className="text-[#AC0108] ">
                {data?.newPackage?.packageWeight}kg
              </p>
            </div>
            <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
              <p>Dimension</p>
              <div className="text-[#AC0108] flex gap-x-[5px] ">
                <p>{data?.newPackage?.dimension.length}in</p>
                <p>x</p>
                <p>{data?.newPackage?.dimension.breadth}in</p>
                <p>x</p>
                <p>{data?.newPackage?.dimension.height}in</p>
              </div>
            </div>
            <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
              <p>Departure:</p>
              <p className="text-[#AC0108] ">{data?.newPackage?.departure}</p>
            </div>
            <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
              <p>Arrival:</p>
              <p className="text-[#AC0108] ">{data?.newPackage?.arrival}</p>
            </div>
            <div className="flex justify-between py-[20px]">
              <p>Price:</p>
              <p className="text-[#AC0108] ">${data?.newPackage?.price}</p>
            </div>

            {
              globalSpinner ?

              <button
                onClick={handleSubmit}
                className="bg-[#0A089A] p-[15px] flex gap-x-[10px] items-center justify-center w-[100%] text-[#FEFEFE] text-[16px] rounded-[8px] lg:text-[18px] "
              >
                <Spinner className="w-[40px] h-[40px] " />
              </button>
            :
              <button
                onClick={handleSubmit}
                className="bg-[#0A089A] p-[15px] flex gap-x-[10px] items-center justify-center w-[100%] text-[#FEFEFE] text-[16px] rounded-[8px] lg:text-[18px] "
              >
                Submit Request
                <Image
                  src="../img/next-arrow-white-icon.svg"
                  alt="Next Icon"
                  width={20}
                  height={20}
                />
              </button>
            }
          </div>
        </div>
      </div>

      <div style={{display: showGlobalModal ? 'block' : 'none'}} className="fixed z-50 inset-0 bg-[rgba(0,0,0,0.7)]">
            <div className="bg-[#FEFEFE] absolute rounded-[10px] w-[90%] md:w-[400px] lg:w-[500px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-[30px] font-poppins ">

                <p className="text-center text-[18px] lg:text-[24px] mb-[20px]">Your request has been submitted, our team will contact you shortly. For immediate help, proceed to contact us</p>

                <div className="flex gap-x-[20px] ">
                    <button onClick={()=> {
                      setShowGlobalModal(false);
                      setGlobalSummary(false);
                    }}  className="bg-[#9C9C9C] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%] ">Continue</button>

                    <button onClick={()=> {
                      setShowGlobalModal(false);
                      setGlobalSummary(false);
                      setShowContactPage(true);
                    }} className="bg-[#0A089A] p-[15px] text-[16px] lg:text-[18px] text-[#FEFEFE] rounded-[10px] w-[100%]">Contact Us</button>
                </div>
            </div>
      </div>
    </section>
  );
}
