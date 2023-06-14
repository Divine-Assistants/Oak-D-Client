import { useContext } from "react";
import Image from "next/image";
import { QuoteModalContext} from "@/context/UserDashboardGenerateQuote";
import { GlobalSummaryContext, GlobalParcelInfoContext, GlobalCrumbContext } from "@/context/GlobalShipping";
import { DataType } from "../..";
import { GlobalBreadcrumb } from "../GlobalBreadcrumb";

interface ShippingSummaryType {
    registerPackage: (arg: DataType)=> void;
    data: DataType
}

export function GlobalUserSummary({data, registerPackage}: ShippingSummaryType){
    const { setShowQuoteModal } = useContext(QuoteModalContext);
    const {globalSummary, setGlobalSummary} = useContext(GlobalSummaryContext);
    const {globalParcelInfo, setGlobalParcelInfo} = useContext(GlobalParcelInfoContext);

    // Breadcrumbs Context
    // const {setGlobalCrumb} = useContext(GlobalCrumbContext);

    function handleSubmit(){
        registerPackage(data);
        setGlobalSummary(false);
        setShowQuoteModal(true);
        window.scrollTo(0,0);
    }


    return(
        <section style={{display: globalSummary ? 'block' : 'none'}} className="p-[20px] ">
            <GlobalBreadcrumb />
            <div className='flex flex-col lg:flex-row lg:gap-x-[20px] '>

                <div className='mb-[20px] lg:mb-0 lg:w-[400px] '>
                    <h1 className="text-[24px] text-[#1E1E1E] font-[600] lg:text-[36px] ">Summary/invoice of the <span className='text-[#A1A1A1] '>cargo details</span> provided</h1>
                </div>

                <div className='lg:bg-[#FFFFFF] lg:p-[20px] w-[100%] lg:w-[70%] rounded-[8px] '>
                    <h1 className="hidden text-[#1E1E1E] text-[24px] font-[600] text-center mb-[15px] lg:block ">Shipping Summary</h1>

                    <div className="text-[16px] font-[600] lg:text-[20px] ">
                        <div className="flex justify-between border-b-[2px] border-dashed border-[#E7E7E7] py-[20px]">
                            <p>Sender's Name</p>
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
                            <p className="text-[#AC0108] ">{data?.newPackage?.packageWeight}kg</p>
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
                        <button onClick={handleSubmit} className='bg-[#0A089A] p-[15px] flex gap-x-[10px] items-center justify-center w-[100%] text-[#FEFEFE] text-[16px] rounded-[8px] lg:text-[18px] '>
                            Proceed
                            <Image 
                                src="../img/next-arrow-white-icon.svg" 
                                alt='Next Icon' 
                                width={20} 
                                height={20} 
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}