import { NavContext } from "@/context/UserDashboardLayout";
import { useContext } from "react";
import { SettingSideNav } from "./SettingSideNav";
import { SettingTopNav } from "./SettingTopNav";
import { SettingContent } from "./SettingContent";
import { SettingContext } from "@/context/UserDashboardSettings";
import { useState } from "react";
import { initialUserDataType } from "@/pages/dashboard/settings";

export interface SettingsNavbarDataType {
    initialUserData: initialUserDataType
}

export function SettingsNavbar({initialUserData}: SettingsNavbarDataType ){
    const {activeNav, setActiveNav} = useContext(NavContext)
    const [activeSettingNav, setActiveSettingNav] = useState(0)
    
    
    return(
        <SettingContext.Provider value={{activeSettingNav, setActiveSettingNav}}>
        <div style={{display: activeNav === 5 ? 'block' : 'none'}} className="p-[20px] lg:col-span-10 lg:row-span-5 bg-[#F5F5F5]">
            
            <div className="flex flex-col lg:flex-row lg:bg-[#FEFEFE] h-[100%] lg:p-[20px] lg:gap-x-[20px]">
                <SettingSideNav />
                <div className="w-[100%] flex flex-col gap-y-[20px]">
                    {activeSettingNav === 0 ? <SettingTopNav initialUserValue={initialUserData} /> : null}
                    <SettingContent initialUserValue={initialUserData} />
                </div>
            </div>
        </div>
        </SettingContext.Provider>
    )
}