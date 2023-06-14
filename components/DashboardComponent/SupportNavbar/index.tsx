import { ContactInformation } from "./ContactInformation";
import { OurLocation } from "./OurLocation";
import { CustomerFeedback } from "./CustomerFeedback";
import { getSingleUser } from "@/api/api";
import { initialUserDataType } from "@/pages/dashboard/settings";
import { useEffect, useState } from "react";

const initialUserInfo: initialUserDataType = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    role: '',
}

export function SupportNavbar(){
    const [userInfo, setUserInfo] = useState<initialUserDataType>(initialUserInfo);

    useEffect(()=> {
        const getUser = async ()=> {
            const { data } = await getSingleUser();
            setUserInfo(data);
        }
        getUser();
    }, []);
    
    return (
        <div className="p-[20px] lg:col-span-10 lg:row-span-5 bg-[#F5F5F5]">
            <ContactInformation />
            <OurLocation />
            <CustomerFeedback userInfo={userInfo} />
        </div>
    )
}