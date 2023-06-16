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
      <div className="flex gap-x-[10px]">
        {warehouseBreadcrumb >= 1 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={senderInfo}>
              <p className={showWarehouseSenderInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Generate Quote</p>
              <ChevronRightIcon color='gray.500'  />
          </div>
        )}

        {warehouseBreadcrumb >= 2 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={parcelInfo}>
              <p className={showWarehoueParcelInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Parcel Information</p>
              <ChevronRightIcon color='gray.500' />
          </div>
        )}

        {warehouseBreadcrumb >= 3 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={summaryInfo}>
              <p className={showWarehoueSummary ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Shipping Summary</p>
          </div>
        )}

      </div>
    </div>
  );
}
