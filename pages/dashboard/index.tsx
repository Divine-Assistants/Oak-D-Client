import { DashboardNavbar, SideNavbar, TopNavbar } from "@/components"
import { NavContext, LayoutContext } from "@/context/UserDashboardLayout";
import { useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from 'cookies-next';

function DashboardNav(){
    const [showNav, setShowNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const router = useRouter();
    const userToken = getCookie('userData');

    return(
        <NavContext.Provider value={{activeNav, setActiveNav}}>
        <LayoutContext.Provider value={{showNav, setShowNav}}>
        <div className="relative lg:grid lg:grid-cols-12 lg:grid-rows-6">
             <SideNavbar />
             <TopNavbar />
             <DashboardNavbar />
        </div>
        </LayoutContext.Provider>
        </NavContext.Provider>
    )
}

export default DashboardNav