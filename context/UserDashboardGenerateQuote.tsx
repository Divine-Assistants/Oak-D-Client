import { createContext } from "react"

type SelectOptionContextType = {
    selectOption: boolean;
    setSelectOption: React.Dispatch<React.SetStateAction<boolean>>
}
type SenderInformationContextType = {
    showSenderInfo: boolean;
    setShowSenderInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type ReceiverInformationContextType = {
    showReceiverInfo: boolean;
    setShowReceiverInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type ParcelInformationContextType = {
    showParcelInfo: boolean;
    setShowParcelInfo: React.Dispatch<React.SetStateAction<boolean>>
}
type ShippingSummaryContextType = {
    showShippingSummary: boolean;
    setShowShippingSummary: React.Dispatch<React.SetStateAction<boolean>>
}
type QuoteModalContextType = {
    showQuoteModal: boolean;
    setShowQuoteModal: React.Dispatch<React.SetStateAction<boolean>>
}
type ContactPageContextType = {
    showContactPage: boolean;
    setShowContactPage: React.Dispatch<React.SetStateAction<boolean>>
}
type IsDomesticContexType = {
    isDomestic: boolean;
    setIsDomestic: React.Dispatch<React.SetStateAction<boolean>>
}
type ShowPaymentPageContextType = {
    showPaymentPage: boolean;
    setShowPaymentPage: React.Dispatch<React.SetStateAction<boolean>>
}
type DomesticBreadcrumbContextType = {
    domesticBreadcrumb: number;
    setDomesticBreadcrumb: React.Dispatch<React.SetStateAction<number>>
}





export const SelectOptionContext = createContext<SelectOptionContextType>({
    selectOption: false,
    setSelectOption: ()=> { },
});
export const SenderInformationContext = createContext<SenderInformationContextType>({
    showSenderInfo: false,
    setShowSenderInfo: ()=> {},
});
export const ReceiverInformationContext = createContext<ReceiverInformationContextType>({
    showReceiverInfo: false,
    setShowReceiverInfo: ()=> {},
});
export const ParcelInformationContext = createContext<ParcelInformationContextType>({
    showParcelInfo: false,
    setShowParcelInfo: ()=> {},
});
export const ShippingSummaryContext = createContext<ShippingSummaryContextType>({
    showShippingSummary: false,
    setShowShippingSummary: ()=> {},
});
export const QuoteModalContext = createContext<QuoteModalContextType>({
    showQuoteModal: false,
    setShowQuoteModal: ()=> {},
});
export const ContactPageContext = createContext<ContactPageContextType>({
    showContactPage: false,
    setShowContactPage: ()=> {},
});
export const ShowPaymentPageContext = createContext<ShowPaymentPageContextType>({
    showPaymentPage: false,
    setShowPaymentPage: ()=> { },
});
export const IsDomesticContex = createContext<IsDomesticContexType>({
    isDomestic: false,
    setIsDomestic: ()=> { },
});
export const DomesticBreadcrumbContext = createContext<DomesticBreadcrumbContextType>({
    domesticBreadcrumb: 0,
    setDomesticBreadcrumb: ()=> { },
})

