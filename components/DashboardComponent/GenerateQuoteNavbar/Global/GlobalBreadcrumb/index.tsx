import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import {
  GlobalCrumbContext,
  GlobalSenderInfoContext,
  GlobalReceiverInfoContext,
  GlobalParcelInfoContext,
  GlobalSummaryContext,
} from "@/context/GlobalShipping";

export function GlobalBreadcrumb() {
  const { globalSenderInfo, setGlobalSenderInfo } = useContext(
    GlobalSenderInfoContext
  );
  const { globalReceiverInfo, setGlobalReceiverInfo } = useContext(
    GlobalReceiverInfoContext
  );
  const { globalParcelInfo, setGlobalParcelInfo } = useContext(
    GlobalParcelInfoContext
  );
  const { globalSummary, setGlobalSummary } = useContext(GlobalSummaryContext);
  const { globalCrumb } = useContext(GlobalCrumbContext);

  function showSenderInfo() {
    setGlobalSenderInfo(true);
    setGlobalReceiverInfo(false);
    setGlobalParcelInfo(false);
    setGlobalSummary(false);
  }
  function showReceiverInfo() {
    setGlobalSenderInfo(false);
    setGlobalReceiverInfo(true);
    setGlobalParcelInfo(false);
    setGlobalSummary(false);
  }
  function showParcelInfo() {
    setGlobalSenderInfo(false);
    setGlobalReceiverInfo(false);
    setGlobalParcelInfo(true);
    setGlobalSummary(false);
  }
  function showSummaryInfo() {
    setGlobalSenderInfo(false);
    setGlobalReceiverInfo(false);
    setGlobalParcelInfo(false);
    setGlobalSummary(true);
  }

  return (
    <div className="mb-[15px] hidden md:block ">
      <div className="flex gap-x-[10px]">
        {globalCrumb >= 1 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={showSenderInfo}>
              <p className={globalSenderInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Generate Quote</p>
              <ChevronRightIcon color='gray.500'  />
          </div>
        )}

        {globalCrumb >= 2 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={showReceiverInfo}>
              <p className={globalReceiverInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Receiver Information</p>
              <ChevronRightIcon color='gray.500' />
          </div>
        )}

        {globalCrumb >= 3 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={showParcelInfo}>
              <p className={globalParcelInfo ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Parcel Information</p>
              <ChevronRightIcon color='gray.500' />
          </div>
        )}

        {globalCrumb >= 4 && (
          <div className="cursor-pointer flex gap-x-[5px] items-center text-[18px] font-[600] " onClick={showSummaryInfo}>
              <p className={globalSummary ? ` text-[#AC0108]` : ` text-[#9C9C9C]`}>Shipping Summary</p>
          </div>
        )}

      </div>
    </div>
  );
}
