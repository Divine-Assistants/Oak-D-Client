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
      {/* <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>

        { globalCrumb >= 1 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={showSenderInfo} className={globalSenderInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Generate Quote</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { globalCrumb >= 2 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={showReceiverInfo} className={globalReceiverInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Receiver Information</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { globalCrumb >= 3 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={showParcelInfo} className={globalParcelInfo ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Parcel Information</BreadcrumbLink>
          </BreadcrumbItem>
        )}

        { globalCrumb >= 4 && (
          <BreadcrumbItem>
            <BreadcrumbLink onClick={showSummaryInfo} className={globalSummary ? `cursor-pointer text-[18px] text-[#AC0108] font-[600]` : `cursor-pointer text-[18px] text-[#9C9C9C] font-[600]`}>Shipping Summary</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb> */}
    </div>
  );
}
