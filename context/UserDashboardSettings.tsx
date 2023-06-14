import { createContext } from "react";

export type SettingContextType = {
    activeSettingNav: number;
    setActiveSettingNav: React.Dispatch<React.SetStateAction<number>>
}

export const SettingContext = createContext<SettingContextType>({
    activeSettingNav: 0,
    setActiveSettingNav: () => { },
})