import { NavContext } from "@/context/UserDashboardLayout";
import { useContext, useState, useEffect } from "react";
import { TrackPacel } from "./TrackPacel";
import { Transactions } from "./Transactions";
import { getSingleUser } from "@/api/api";
import { getUserPackage } from "@/api/api";
import { TransactionType } from "../TransactionNavbar";

interface DashboardNavType {
    packageInfo: TransactionType[];
}

export function DashboardNavbar({packageInfo}: DashboardNavType){
    const {activeNav, setActiveNav} = useContext(NavContext);
    // const [packages, setPackages] = useState<string[]>([]);
    // const [packageInfo, setPackageInfo] = useState<TransactionType[]>([]);


    // GETTING USER INFORMATION
    // useEffect(()=>{
    //     const getUser = async ()=>{
    //         try {
    //             const { data } = await getSingleUser();
    //             setPackages(data.transactions);
    //         } catch (error) {
    //            console.log(error); 
    //         }
    //     }
    //     getUser();
    // }, []);

    
    // SEND USER PACKAGE
    // useEffect(()=>{
    //     const handleUserPackage = async ()=> {
    //         const { data } = await getUserPackage(packages);
    //         setPackageInfo(data);
    //     }
    //     handleUserPackage();
    // }, [packages]);


    return (
        <div style={{display: activeNav === 0 ? 'block' : 'none'}} className=" lg:col-span-10 lg:row-span-5 bg-[#F5F5F5] p-[20px]">
            <div>
                <TrackPacel />
                <Transactions packageInfo={packageInfo} />
            </div>
        </div>
    )
}