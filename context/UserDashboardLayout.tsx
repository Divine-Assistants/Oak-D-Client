import { createContext } from "react"

export type LayoutContextType = {
    showNav: boolean;
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}
export type NavContextType = {
    activeNav: number;
    setActiveNav: React.Dispatch<React.SetStateAction<number>>;
}
export type NotificationContextType = {
    showNotification: boolean;
    setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}
export type DeleteModalContextType = {
    showFirstModal: boolean;
    setShowFirstModal: React.Dispatch<React.SetStateAction<boolean>>
}
export type SecondMoalContextType = {
    showSecondModal: boolean;
    setShowSecondModal: React.Dispatch<React.SetStateAction<boolean>>
}
export type SecurityModalContextType = {
    showSecurtyModal: boolean;
    setShowSecurityModal: React.Dispatch<React.SetStateAction<boolean>>
}


export const LayoutContext = createContext<LayoutContextType>({
    showNav: false,
    setShowNav: ()=> { }, 
});
export const NavContext = createContext<NavContextType>({
    activeNav: 0,
    setActiveNav: ()=> { },
});
export const NotificationContext = createContext<NotificationContextType>({
    showNotification: false,
    setShowNotification: ()=> { },
});
export const DeleteModalContext = createContext<DeleteModalContextType>({
    showFirstModal: false,
    setShowFirstModal: ()=> { },
});
export const SecondModalContext = createContext<SecondMoalContextType>({
    showSecondModal: false,
    setShowSecondModal: ()=> { },
});
export const SecurityModalContext = createContext<SecurityModalContextType>({
    showSecurtyModal: false,
    setShowSecurityModal: ()=> {}
})
