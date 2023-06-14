import { createContext } from "react";

type WarehouseSenderInfoType = {
    showWarehouseSenderInfo: boolean;
    setShowWarehouseSenderInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type ShowWarehouseParcelInfoType = {
    showWarehoueParcelInfo: boolean;
    setShowWarehoueParcelInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type WarehouseSummaryType = {
    showWarehoueSummary: boolean;
    setShowWarehoueSummary: React.Dispatch<React.SetStateAction<boolean>>
}
type IsWarehouseContextType = {
    isWarehouse: boolean;
    setIsWarehouse: React.Dispatch<React.SetStateAction<boolean>>
}
type WarehouseBreadcrumbContextType = {
    warehouseBreadcrumb: number;
    setWarehouseBreadcrumb: React.Dispatch<React.SetStateAction<number>>
}


export const WarehouseSenderInfoContext = createContext<WarehouseSenderInfoType>({
    showWarehouseSenderInfo: false,
    setShowWarehouseSenderInfo: ()=> { },
});
export const WarehouseParcelInfoContext = createContext<ShowWarehouseParcelInfoType>({
    showWarehoueParcelInfo: false,
    setShowWarehoueParcelInfo: ()=> { },
});
export const WarehouseSummaryContext = createContext<WarehouseSummaryType>({
    showWarehoueSummary: false,
    setShowWarehoueSummary: ()=> { },
});
export const IsWarehouseContext = createContext<IsWarehouseContextType>({
    isWarehouse: false,
    setIsWarehouse: ()=> { },
});
export const WarehouseBreadcrumbContext = createContext<WarehouseBreadcrumbContextType>({
    warehouseBreadcrumb: 0,
    setWarehouseBreadcrumb: ()=> { },
})