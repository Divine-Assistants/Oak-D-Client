import { SideNavbar, TopNavbar, GenerateQuoteNavbar } from "@/components";
import { NavContext, LayoutContext } from "@/context/UserDashboardLayout";
import { SelectOptionContext, SenderInformationContext, ReceiverInformationContext, ParcelInformationContext, ShippingSummaryContext, QuoteModalContext, ContactPageContext, ShowPaymentPageContext, IsDomesticContex, DomesticBreadcrumbContext } from "@/context/UserDashboardGenerateQuote";
import { WarehouseSenderInfoContext, WarehouseParcelInfoContext, WarehouseSummaryContext, IsWarehouseContext, WarehouseBreadcrumbContext } from "@/context/Warehouse";
import { IsGlobalContext, GlobalSenderInfoContext, GlobalParcelInfoContext, GlobalSummaryContext, GlobalReceiverInfoContext, GlobalCrumbContext } from "@/context/GlobalShipping";
import { useState } from "react";
import axios from "axios";
import { parse } from 'cookie';

function GenerateQuote(){
    const [showNav, setShowNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [selectOption, setSelectOption] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [showSenderInfo, setShowSenderInfo] = useState(false);
    const [showParcelInfo, setShowParcelInfo] = useState(false);
    const [showContactPage, setShowContactPage] = useState(false);
    const [showReceiverInfo, setShowReceiverInfo] = useState(false);
    const [showShippingSummary, setShowShippingSummary] = useState(false);
    const [showPaymentPage, setShowPaymentPage] = useState(false);
    const [isDomestic, setIsDomestic] = useState(false);

    // Breadcrumbs
    const [globalCrumb, setGlobalCrumb] = useState(0);
    const [domesticBreadcrumb, setDomesticBreadcrumb] = useState(0);
    const [warehouseBreadcrumb, setWarehouseBreadcrumb] = useState(0);

    // Warehouse Shipment
    const [isWarehouse, setIsWarehouse] = useState(false);
    const [showWarehoueParcelInfo, setShowWarehoueParcelInfo] = useState(false);
    const [showWarehouseSenderInfo, setShowWarehouseSenderInfo] = useState(false);
    const [showWarehoueSummary, setShowWarehoueSummary] = useState(false);

    // Global Shipment
    const [isGlobal, setIsGlobal] = useState(false);
    const [globalSenderInfo, setGlobalSenderInfo] = useState(false);
    const [globalReceiverInfo, setGlobalReceiverInfo] = useState(false);
    const [globalParcelInfo, setGlobalParcelInfo] = useState(false);
    const [globalSummary, setGlobalSummary] = useState(false);

    return(
        <WarehouseBreadcrumbContext.Provider value={{warehouseBreadcrumb, setWarehouseBreadcrumb}}>
        <DomesticBreadcrumbContext.Provider value={{domesticBreadcrumb, setDomesticBreadcrumb}}>
        <GlobalCrumbContext.Provider value={{globalCrumb, setGlobalCrumb}}>
        <GlobalSummaryContext.Provider value={{globalSummary, setGlobalSummary}}>
        <GlobalParcelInfoContext.Provider value={{globalParcelInfo, setGlobalParcelInfo}}>
        <GlobalReceiverInfoContext.Provider value={{globalReceiverInfo, setGlobalReceiverInfo}}>
        <GlobalSenderInfoContext.Provider value={{globalSenderInfo, setGlobalSenderInfo}}>
        <IsGlobalContext.Provider value={{isGlobal, setIsGlobal}}>
        <WarehouseSummaryContext.Provider value={{showWarehoueSummary, setShowWarehoueSummary}}>
        <WarehouseSenderInfoContext.Provider value={{showWarehouseSenderInfo, setShowWarehouseSenderInfo}}>
        <WarehouseParcelInfoContext.Provider value={{showWarehoueParcelInfo, setShowWarehoueParcelInfo}}>
        <IsWarehouseContext.Provider value={{isWarehouse, setIsWarehouse}}>
        <ShowPaymentPageContext.Provider value={{showPaymentPage, setShowPaymentPage}}>
        <IsDomesticContex.Provider value={{isDomestic, setIsDomestic}}>
        <ContactPageContext.Provider value={{showContactPage, setShowContactPage}}>
        <QuoteModalContext.Provider value={{showQuoteModal, setShowQuoteModal}}>
        <ShippingSummaryContext.Provider value={{showShippingSummary, setShowShippingSummary}}>
        <ParcelInformationContext.Provider value={{showParcelInfo, setShowParcelInfo}}>
        <ReceiverInformationContext.Provider value={{showReceiverInfo, setShowReceiverInfo}}>
        <SenderInformationContext.Provider value={{showSenderInfo, setShowSenderInfo}}>
        <SelectOptionContext.Provider value={{selectOption, setSelectOption}}>
        <NavContext.Provider value={{activeNav, setActiveNav}}>
        <LayoutContext.Provider value={{showNav, setShowNav}}>
            <div className="relative lg:grid lg:grid-cols-12 lg:grid-rows-6">
                <SideNavbar />
                <TopNavbar />
                <GenerateQuoteNavbar /> 
            </div>
        </LayoutContext.Provider>
        </NavContext.Provider>
        </SelectOptionContext.Provider>
        </SenderInformationContext.Provider>
        </ReceiverInformationContext.Provider>
        </ParcelInformationContext.Provider>
        </ShippingSummaryContext.Provider>
        </QuoteModalContext.Provider>
        </ContactPageContext.Provider>
        </IsDomesticContex.Provider>
        </ShowPaymentPageContext.Provider>
        </IsWarehouseContext.Provider>
        </WarehouseParcelInfoContext.Provider>
        </WarehouseSenderInfoContext.Provider>
        </WarehouseSummaryContext.Provider>
        </IsGlobalContext.Provider>
        </GlobalSenderInfoContext.Provider>
        </GlobalReceiverInfoContext.Provider>
        </GlobalParcelInfoContext.Provider>
        </GlobalSummaryContext.Provider>
        </GlobalCrumbContext.Provider>
        </DomesticBreadcrumbContext.Provider>
        </WarehouseBreadcrumbContext.Provider>
    )
}

export default GenerateQuote

export const getServerSideProps = async (context: any) => {
    console.log('hey')
    const { req } = context;
    console.log(req);
    const cookies = req.headers.cookie;
    const myCookies = parse(cookies || "");
    if (!myCookies.token) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const response = await axios.post(
      "https://oakandd-api.onrender.com/auth/user/verify-token",
      { token: myCookies.token }
    );
    const isAuthenticated = response.data.data.email && response.data.data.role;
  
    if (!isAuthenticated) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    // Proceed to render the protected page
    return {
      props: {},
    };
};