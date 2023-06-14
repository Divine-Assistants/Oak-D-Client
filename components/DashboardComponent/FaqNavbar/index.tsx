import { FaqSection } from "./FaqSection";
import { SendQuestion } from "./SendQuestion";
import { initialUserDataType } from "@/pages/dashboard/settings";

interface FaqNavbarDataType {
    userInfo: initialUserDataType
}

export function FaqNavbar({userInfo}: FaqNavbarDataType){
    return(
        <div className="p-[20px] md:px-[150px] lg:col-span-10 lg:row-span-5 bg-[#F5F5F5]">
            <FaqSection />
            <SendQuestion userInfo={userInfo} />
        </div>
    )
}