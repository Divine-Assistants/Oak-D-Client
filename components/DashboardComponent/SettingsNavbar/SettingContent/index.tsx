import { ProfileContent } from "./ProfileContent";
import { SecurityContent } from "./SecurityContent";
import { NotificationContent } from "./NotificationContent";
import { initialUserDataType } from "@/pages/dashboard/settings";

interface SettingContentDataType {
    initialUserValue: initialUserDataType 
}

export function SettingContent({initialUserValue}: SettingContentDataType){

    return(
        <section>
            <ProfileContent initialUserValue={initialUserValue} />
            <SecurityContent initialUserValue={initialUserValue} />
            <NotificationContent />
        </section>
    )
}