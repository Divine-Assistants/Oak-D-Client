import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { SenderInformationContext, ReceiverInformationContext, ParcelInformationContext, ShowPaymentPageContext, ShippingSummaryContext, DomesticBreadcrumbContext } from '@/context/UserDashboardGenerateQuote';

export function DomesticBreadcrumb() {
    const {showSenderInfo, setShowSenderInfo} = useContext(SenderInformationContext);
    const {showReceiverInfo, setShowReceiverInfo} = useContext(ReceiverInformationContext);
    const {showParcelInfo, setShowParcelInfo} = useContext(ParcelInformationContext);
    const {showShippingSummary, setShowShippingSummary} = useContext(ShippingSummaryContext);
    const {showPaymentPage, setShowPaymentPage} = useContext(ShowPaymentPageContext);
    const {domesticBreadcrumb} = useContext(DomesticBreadcrumbContext);


  function senderInfo(){
    setShowSenderInfo(true);
    setShowReceiverInfo(false);
    setShowParcelInfo(false);
    setShowShippingSummary(false);
  }

  function receiverInfo(){
    setShowSenderInfo(false);
    setShowReceiverInfo(true);
    setShowParcelInfo(false);
    setShowShippingSummary(false);
  }

  function parcelInfo(){
    setShowSenderInfo(false);
    setShowReceiverInfo(false);
    setShowParcelInfo(true);
    setShowShippingSummary(false);
  }

  function summaryInfo(){
    setShowSenderInfo(false);
    setShowReceiverInfo(false);
    setShowParcelInfo(false);
    setShowShippingSummary(true);
  }

  function paymentInfo(){
    setShowSenderInfo(false);
    setShowReceiverInfo(false);
    setShowParcelInfo(false);
    setShowShippingSummary(false);
    setShowPaymentPage(true);
  }

  return (
    <div className='mb-[15px] hidden md:block '>
      <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>

        { domesticBreadcrumb >= 1 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={senderInfo} className={showSenderInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Generate Quote</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { domesticBreadcrumb >= 2 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={receiverInfo} className={showReceiverInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Receiver Information</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { domesticBreadcrumb >= 3 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={parcelInfo} className={showParcelInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Parcel Information</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { domesticBreadcrumb >= 4 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={summaryInfo} className={showShippingSummary ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Shipping Summary</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { domesticBreadcrumb >= 5 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={paymentInfo} className={showPaymentPage ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Checkout</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </div>
  );
}
