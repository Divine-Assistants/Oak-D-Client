import { SideNavbar, TopNavbar, TransactionNavbar } from "@/components";
import { NavContext, LayoutContext } from "@/context/UserDashboardLayout";
import { useState } from "react";

function Transaction(){
    const [showNav, setShowNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0);

    return(
        <NavContext.Provider value={{activeNav, setActiveNav}}>
        <LayoutContext.Provider value={{showNav, setShowNav}}>
        <div className="relative lg:grid lg:grid-cols-12 lg:grid-rows-6">
             <SideNavbar />
             <TopNavbar />
             <TransactionNavbar />
        </div>
        </LayoutContext.Provider> 
        </NavContext.Provider>
    )
}

export default Transaction