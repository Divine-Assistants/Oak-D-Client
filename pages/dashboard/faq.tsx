import { SideNavbar, TopNavbar, FaqNavbar } from "@/components";
import { NavContext, LayoutContext } from "@/context/UserDashboardLayout";
import { useState, useEffect } from "react";
import { getSingleUser } from "@/api/api";
import { initialUserDataType } from "./settings";

const initialUserInfo: initialUserDataType = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
}

function Support(){
    const [showNav, setShowNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [userInfo, setUserInfo] = useState<initialUserDataType>(initialUserInfo);

    useEffect(()=>{
        const getUser = async ()=> {
            try {
                const { data } = await getSingleUser();
                setUserInfo(data); 
            } catch (error) {
               console.log(error); 
            }
        };
        getUser();
    }, [])


    return(
        <NavContext.Provider value={{activeNav, setActiveNav}}>
        <LayoutContext.Provider value={{showNav, setShowNav}}>
        <div className="relative lg:grid lg:grid-cols-12 lg:grid-rows-6">
             <SideNavbar />
             <TopNavbar />
             <FaqNavbar userInfo={userInfo} />
        </div>
        </LayoutContext.Provider>
        </NavContext.Provider>
    )
}

export default Support