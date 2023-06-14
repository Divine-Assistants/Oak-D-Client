import Image from "next/image";
import { useContext } from 'react';

import { SelectOptionContext, SenderInformationContext, ReceiverInformationContext, ShippingSummaryContext, ContactPageContext, IsDomesticContex, ShowPaymentPageContext, DomesticBreadcrumbContext, ParcelInformationContext } from "@/context/UserDashboardGenerateQuote";

import { WarehouseSenderInfoContext, WarehouseParcelInfoContext, WarehouseSummaryContext, IsWarehouseContext, WarehouseBreadcrumbContext } from "@/context/Warehouse";

import { IsGlobalContext, GlobalSenderInfoContext, GlobalReceiverInfoContext, GlobalParcelInfoContext, GlobalSummaryContext, GlobalCrumbContext } from "@/context/GlobalShipping";

export function TypeOfService(){
    const {selectOption, setSelectOption} = useContext(SelectOptionContext);
    const {showSenderInfo, setShowSenderInfo} = useContext(SenderInformationContext);
    const {showReceiverInfo} = useContext(ReceiverInformationContext);
    const {showShippingSummary} = useContext(ShippingSummaryContext);
    const {showContactPage} = useContext(ContactPageContext);
    const {setIsDomestic} = useContext(IsDomesticContex);
    const {showPaymentPage} = useContext(ShowPaymentPageContext);
    const {showParcelInfo} = useContext(ParcelInformationContext);

    // Breadcrumbs
    const {setGlobalCrumb} = useContext(GlobalCrumbContext);
    const {setDomesticBreadcrumb} = useContext(DomesticBreadcrumbContext);
    const {setWarehouseBreadcrumb} = useContext(WarehouseBreadcrumbContext);


    // Warehouse Shipping Context
    const {isWarehouse, setIsWarehouse} = useContext(IsWarehouseContext);
    const {showWarehouseSenderInfo, setShowWarehouseSenderInfo} = useContext(WarehouseSenderInfoContext);
    const {showWarehoueParcelInfo} = useContext(WarehouseParcelInfoContext);
    const {showWarehoueSummary} = useContext(WarehouseSummaryContext);

    // Global Shipping Context
    const {isGlobal, setIsGlobal} = useContext(IsGlobalContext);
    const {globalSenderInfo, setGlobalSenderInfo} = useContext(GlobalSenderInfoContext);
    const {globalReceiverInfo} = useContext(GlobalReceiverInfoContext);
    const {globalParcelInfo} = useContext(GlobalParcelInfoContext);
    const {globalSummary} = useContext(GlobalSummaryContext)

    // Onchange Function
    function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>){
        const selectedElement = event.target.value
        console.log(selectedElement)

        if(selectedElement === 'global' || selectedElement === 'domestic' || selectedElement === 'warehousing') {
            setSelectOption(true)
        }
        if(selectedElement === 'global'){
            setIsDomestic(false);
            setIsWarehouse(false);
            setIsGlobal(true);
        }
        if(selectedElement === 'warehousing'){
            setIsDomestic(false);
            setIsGlobal(false);
            setIsWarehouse(true);
        }
        if(selectedElement === 'domestic'){
            setIsDomestic(true);
        }
    } 

    // Show Sender Info Function
    function handleSenderInfo(){
        if(selectOption){
            setShowSenderInfo(true);
            setDomesticBreadcrumb(1);
            window.scrollTo(0,0);
        }
        if(isGlobal){
            setShowSenderInfo(false);
            setShowWarehouseSenderInfo(false);
            setGlobalSenderInfo(true);
            setGlobalCrumb(1);
            window.scrollTo(0,0);
        }
        if(isWarehouse){
            setShowSenderInfo(false);
            setGlobalSenderInfo(false);
            setShowWarehouseSenderInfo(true);
            setWarehouseBreadcrumb(1);
            window.scrollTo(0,0);
        }
    }

    return(
        <section style={{display: !globalSenderInfo && !globalReceiverInfo && !globalParcelInfo && !globalSummary && !showSenderInfo && !showParcelInfo && !showWarehouseSenderInfo && !showWarehoueParcelInfo && !showWarehoueSummary && !showReceiverInfo && !showShippingSummary && !showContactPage && !showPaymentPage  ? 'block' : 'none'}} className="px-[10px] py-[80px] text-[#1E1E1E] lg:max-w-[600px] lg:mx-auto ">
            <h1 className="text-[24px] text-center font-[600] lg:text-[36px] mb-[30px] ">Please enter the type of service you will be needing</h1>
            
            <p className="text-[16px] font-[500] mb-[10px] ">Type of Service</p>

            <div className="w-full bg-[#FEFEFE] p-[15px] rounded-[8px] mb-[20px] ">
            <select onChange={handleSelectChange} className="w-full outline-none cursor-pointer ">
                
                <option value="" selected disabled className="">Select</option>
                <option value="global">Global Shipping</option>
                <option value="domestic">Domestic Shipping</option>
                <option value="warehousing">Warehousing Services</option>
            </select>
            </div>

            <div onClick={handleSenderInfo} className={
                selectOption ? `flex gap-x-[10px] bg-[#0A089A] text-[#FEFEFE] p-[15px] justify-center items-center w-[100%] rounded-[8px] cursor-pointer` 
                : 
                `flex gap-x-[10px] bg-[#B8B8B8] p-[15px] justify-center items-center w-[100%] rounded-[8px] text-[#1E1E1E] cursor-pointer`
            }>

                <p className="text-[16px] font-[500] ">Next</p>

                <Image src={selectOption ? `../img/next-arrow-white-icon.svg` : `../img/next-arrow-icon.svg`} alt="Next Arrow" width={20} height={20} />
            </div>
        </section>
    )
}