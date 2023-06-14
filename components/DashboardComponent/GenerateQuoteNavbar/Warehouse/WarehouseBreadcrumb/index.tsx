import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { WarehouseSenderInfoContext, WarehouseParcelInfoContext, WarehouseSummaryContext, WarehouseBreadcrumbContext } from '@/context/Warehouse';

export function WarehouseBreadcrumb() {
    const {showWarehouseSenderInfo, setShowWarehouseSenderInfo} = useContext(WarehouseSenderInfoContext);
    const {showWarehoueParcelInfo, setShowWarehoueParcelInfo} = useContext(WarehouseParcelInfoContext);
    const {showWarehoueSummary, setShowWarehoueSummary} = useContext(WarehouseSummaryContext)
    const {warehouseBreadcrumb} = useContext(WarehouseBreadcrumbContext);


  function senderInfo(){
    setShowWarehouseSenderInfo(true);
    setShowWarehoueParcelInfo(false);
    setShowWarehoueSummary(false);
  }

  function parcelInfo(){
    setShowWarehouseSenderInfo(false);
    setShowWarehoueParcelInfo(true);
    setShowWarehoueSummary(false);
  }

  function summaryInfo(){
    setShowWarehouseSenderInfo(false);
    setShowWarehoueParcelInfo(false);
    setShowWarehoueSummary(true);
  }

  return (
    <div className='mb-[15px] hidden md:block '>
      <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>

        { warehouseBreadcrumb >= 1 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={senderInfo} className={showWarehouseSenderInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Generate Quote</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { warehouseBreadcrumb >= 2 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={parcelInfo} className={showWarehoueParcelInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Parcel Information</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { warehouseBreadcrumb >= 3 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={summaryInfo} className={showWarehoueSummary ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Shipping Summary</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </div>
  );
}
