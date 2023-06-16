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
      <div className="flex gap-x-[10px]">
        {domesticBreadcrumb >= 1 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={senderInfo}>
              <p className={showSenderInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Generate Quote</p>
              <ChevronRightIcon color='gray.500'  />
          </div>
        )}

        {domesticBreadcrumb >= 2 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={receiverInfo}>
              <p className={showReceiverInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Receiver Information</p>
              <ChevronRightIcon color='gray.500' />
          </div>
        )}

        {domesticBreadcrumb >= 3 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={parcelInfo}>
              <p className={showParcelInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Parcel Information</p>
              <ChevronRightIcon color='gray.500' />
          </div>
        )}

        {domesticBreadcrumb >= 4 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={summaryInfo}>
              <p className={showShippingSummary ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Shipping Summary</p>
              <ChevronRightIcon color='gray.500' />
          </div>
        )}

        {domesticBreadcrumb >= 5 && (
          <div className="cursor-pointer flex items-center text-[18px] font-[600] " onClick={paymentInfo}>
              <p className={showPaymentPage ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Checkout</p>
          </div>
        )}

      </div>
    </div>
  );
}
