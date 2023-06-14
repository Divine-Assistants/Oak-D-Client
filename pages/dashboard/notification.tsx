import { SideNavbar, TopNavbar, NotificationNavbar } from "@/components";
import { NavContext, LayoutContext, NotificationContext } from "@/context/UserDashboardLayout";
import { useState } from "react";

function Notification(){
    const [showNav, setShowNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [showNotification, setShowNotification] = useState(false)

    return(
        <NavContext.Provider value={{activeNav, setActiveNav}}>
        <LayoutContext.Provider value={{showNav, setShowNav}}>
        <NotificationContext.Provider value={{showNotification, setShowNotification}}>
            <div className="relative lg:grid lg:grid-cols-12 lg:grid-rows-6">
                <SideNavbar />
                <TopNavbar />
                <NotificationNavbar />
            </div>
        </NotificationContext.Provider>
        </LayoutContext.Provider>
        </NavContext.Provider>
    )
}

export default Notification