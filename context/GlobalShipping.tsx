import { createContext } from "react";

type GlobalSenderInfoType = {
    globalSenderInfo: boolean;
    setGlobalSenderInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type GlobalReceiverInfoType = {
    globalReceiverInfo: boolean;
    setGlobalReceiverInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type GlobalParcelInfoType = {
    globalParcelInfo: boolean;
    setGlobalParcelInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type GlobalSummaryType = {
    globalSummary: boolean;
    setGlobalSummary: React.Dispatch<React.SetStateAction<boolean>>
}
type IsGlobalContextType = {
    isGlobal: boolean;
    setIsGlobal: React.Dispatch<React.SetStateAction<boolean>>
}

type globalCrumbContextType = {
    globalCrumb: number;
    setGlobalCrumb: React.Dispatch<React.SetStateAction<number>>;
};


export const GlobalSenderInfoContext = createContext<GlobalSenderInfoType>({
    globalSenderInfo: false,
    setGlobalSenderInfo: ()=> { },
});
export const GlobalReceiverInfoContext = createContext<GlobalReceiverInfoType>({
    globalReceiverInfo: false,
    setGlobalReceiverInfo: ()=> { },
});
export const GlobalParcelInfoContext = createContext<GlobalParcelInfoType>({
    globalParcelInfo: false,
    setGlobalParcelInfo: ()=> { },
});
export const GlobalSummaryContext = createContext<GlobalSummaryType>({
    globalSummary: false,
    setGlobalSummary: ()=> { },
});
export const IsGlobalContext = createContext<IsGlobalContextType>({
    isGlobal: false,
    setIsGlobal: ()=> { },
});
export const GlobalCrumbContext = createContext<globalCrumbContextType>({
    globalCrumb: 0,
    setGlobalCrumb: ()=> { },
});