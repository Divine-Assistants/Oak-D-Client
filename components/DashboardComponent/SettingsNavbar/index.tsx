import { NavContext } from "@/context/UserDashboardLayout";
import { useContext } from "react";
import { SettingSideNav } from "./SettingSideNav";
import { SettingTopNav } from "./SettingTopNav";
import { SettingContent } from "./SettingContent";
import { SettingContext } from "@/context/UserDashboardSettings";
import { useState, useEffect } from "react";
import { getSingleUser } from "@/api/api";
import { deleteUser } from "@/api/api";
import { initialUserDataType } from "@/pages/dashboard/settings";

export interface SettingsNavbarDataType {
    initialUserData: initialUserDataType
}

export function SettingsNavbar({initialUserData}: SettingsNavbarDataType ){
    const {activeNav, setActiveNav} = useContext(NavContext)
    const [activeSettingNav, setActiveSettingNav] = useState(0)
    // const [initialUserData, setInitialUserData] = useState<>({
    //     _id: '',
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phoneNumber: '',
    //     role: '',
    // })
    // useEffect(()=>{
    //     const getUserData = async ()=> {
    //         const {data} = await getSingleUser();
    //         setInitialUserData(data)
    //     }
    //     getUserData();
    // }, []);

    const handleDeleteUser = async ()=> {
        // console.log('hello')
        // await deleteUser(initialUserData._id);
    }
    
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