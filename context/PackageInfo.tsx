import { createContext } from "react";

interface SenderInfoContextType {
    senderInfo: object;
    setSenderInfo: React.Dispatch<React.SetStateAction<object>>
}
interface ReceiverInfoContextType {
    receiverInfo: object;
    setReceiverInfo: React.Dispatch<React.SetStateAction<object>>;
}
interface PackageInfoContextType {
    packageInfo: object;
    setPackageInfo: React.Dispatch<React.SetStateAction<object>>;
}



export const senderInfoContext = createContext<SenderInfoContextType>({
    senderInfo: { },
    setSenderInfo: ()=> {},
});
export const receiverInfoContext = createContext<ReceiverInfoContextType>({
    receiverInfo: { },
    setReceiverInfo: ()=> { },
});
export const packageInfoContext = createContext<PackageInfoContextType>({
    packageInfo: { },
    setPackageInfo: ()=> { },
})

