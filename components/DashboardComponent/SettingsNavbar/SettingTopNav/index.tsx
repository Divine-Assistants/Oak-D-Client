import { Avatar } from "@chakra-ui/react";
import { initialUserDataType } from "@/pages/dashboard/settings";

interface SettingTopNavType {
  initialUserValue: initialUserDataType;
}

export function SettingTopNav(props: SettingTopNavType) {
  const { firstName, lastName, email } = props.initialUserValue;

  return (
    <section className=" ">
      <h1 className="hidden lg:block text-[24px] text-[#1E1E1E] font-[600] mb-[30px] ">
        My Profile
      </h1>

      <div className="flex items-center border-[2px] border-[#F3F3F3] rounded-[10px] p-[20px] ">
        {/* <Avatar
          name={`${firstName} ${lastName}`}
          className="text-[24px] text-[#0A089A] lg:text-[40px] font-[600] bg-[#F3F3F3] p-[15px] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] mr-[15px] "
        /> */}

        <div>
          <h1 className="text-[#1E1E1E] text-[20px] font-[600] lg:text-[24px] ">{`${firstName} ${lastName}`}</h1>
          <p className="text-[16px] text-[#9C9C9C] font-[600] lg:text-[20px] ">
            {email}
          </p>
        </div>
      </div>
    </section>
  );
}
