import { DashboardNavbar, SideNavbar, TopNavbar } from "@/components"
import { NavContext, LayoutContext } from "@/context/UserDashboardLayout";
import { useState, useEffect, use } from "react";
import { TransactionType } from "@/components";
import { getSingleUser, getUserPackage } from "@/api/api";
import axios from "axios";
import { parse } from 'cookie';

function DashboardNav(){
    const [showNav, setShowNav] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [packages, setPackages] = useState<string[]>([]);
    const [packageInfo, setPackageInfo] = useState<TransactionType[]>([]);

    // GETTING USER INFORMATION
    useEffect(()=>{
        const getUser = async ()=>{
            try {
                const response = await getSingleUser();
                if(response.status === 'Success') {
                    setPackages(response.data.transactions);
                }
            } catch (error) {
               console.log(error); 
            }
        }
        getUser();
    }, []);
 
    // SEND USER PACKAGE
    useEffect(()=>{
        const handleUserPackage = async ()=> {
            const response = await getUserPackage(packages);
            setPackageInfo(response.data);
        }
        handleUserPackage();
    }, [packages]);

    return(
        <NavContext.Provider value={{activeNav, setActiveNav}}>
        <LayoutContext.Provider value={{showNav, setShowNav}}>
        <div className="relative lg:grid lg:grid-cols-12 lg:grid-rows-6">
             <SideNavbar />
             <TopNavbar />
             <DashboardNavbar packageInfo={packageInfo} />
        </div>
        </LayoutContext.Provider>
        </NavContext.Provider>
    )
}

export default DashboardNav

export const getServerSideProps = async (context: any) => {
    const { req } = context;
    const cookies = req.headers.cookie;
    const myCookies = parse(cookies || "");
    if (!myCookies.userData) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const response = await axios.post(
      "https://oakandd-api.onrender.com/auth/user/verify-token",
      { token: myCookies.userData }
    );
    const isAuthenticated = response.data.data.email && response.data.data.role;
  
    if (!isAuthenticated) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
  
    // Proceed to render the protected page
    return {
      props: {},
    };
};