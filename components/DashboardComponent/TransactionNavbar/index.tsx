import { NavContext } from "@/context/UserDashboardLayout";
import { useContext, useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { TransactionTable } from "./TransactionTable";
import { getUserPackage } from "@/api/api";
import { getSingleUser } from "@/api/api";
import { userData } from "@/pages/get-started";

export interface TransactionType {
    _id: string;
    arrival: string;
    checked: boolean;
    createdAt: string;
    departure: string;
    sender: userData;
    receiver: userData;
    price: string;
    packageType: string;
    isVerified: boolean;
}

export function TransactionNavbar(){
    const {activeNav, setActiveNav} = useContext(NavContext);
    const [packages, setPackages] = useState<string[]>([]);
    const [packageInfo, setPackageInfo] = useState<TransactionType[]>([]);
    
    // GETTING USER INFORMATION
    useEffect(()=>{
        const getUser = async ()=> {
            try {
                const { data } = await getSingleUser();
                setPackages(data.transactions)
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    },[]);

    // SENDING PACKAGES
    useEffect(()=>{
        const handleUserPackage = async ()=> {
            try {
                const { data } = await getUserPackage(packages);
                
                const sortData = data.sort((a:any, b:any)=>{
                    const dateA = new Date(a.createdAt).getTime();
                    const dateB = new Date(b.createdAt).getTime();
                    return dateB - dateA;
                })
                setPackageInfo(sortData);
            } catch (error) {
                console.log(error)
            }
        }
        handleUserPackage();
    }, [packages]);

    // console.log(packageInfo)

    return(
        <div style={{display: activeNav === 1 ? 'block' : 'none'}} className=" lg:col-span-10 lg:row-span-5 bg-[#F5F5F5]">
            <SearchBar />
            <TransactionTable packageInfo={packageInfo} />
        </div>
    )
}