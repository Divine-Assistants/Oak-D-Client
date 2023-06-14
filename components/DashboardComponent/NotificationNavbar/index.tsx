import { NotificationContext } from "@/context/UserDashboardLayout";
import { useContext } from 'react';

export function NotificationNavbar(){
    const {showNotification, setShowNotification} = useContext(NotificationContext);
    return(
        <section style={{display: showNotification ? 'block' : 'none'}} className="lg:col-span-10 lg:row-span-5 bg-[#F5F5F5] p-[20px] " >
            <div className="bg-[#FEFEFE] p-[10px] text-[#1E1E1E] mb-[20px] rounded-[8px] ">
                <div className="flex flex-col mb-[10px] lg:flex-row lg:gap-x-[30px] lg:justify-between lg:items-center ">
                    <h1 className="text-[16px] font-[600] lg:text-[20px] ">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className="text-[14px] font-[500] lg:text-[16px] ">Sunday, January 6th  2022. 07:35am</p>
                </div>
                <div className="text-[14px] font-[400] lg:text-[18px] ">
                    <p>Lorem ipsum dolor sit amet consectetur. Odio ultricies cum nec facilisis sodales sit pulvinar. Dolor mattis egestas mi donec egestas proin ultrices sagittis. Fermentum lacinia sit bibendum mattis sed dui curabitur. Euismod vitae nunc nunc iaculis habitant morbi. Vel feugiat in pellentesque cursus. Etiam ut turpis aenean cursus in.</p>
                </div>
            </div>

            <div className="bg-[#FEFEFE] p-[10px] text-[#1E1E1E] mb-[20px] rounded-[8px] ">
                <div className="flex flex-col mb-[10px] lg:flex-row lg:gap-x-[30px] lg:justify-between lg:items-center ">
                    <h1 className="text-[16px] font-[600] lg:text-[20px] ">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className="text-[14px] font-[500] lg:text-[16px] ">Sunday, January 6th  2022. 07:35am</p>
                </div>
                <div className="text-[14px] font-[400] lg:text-[18px] ">
                    <p>Lorem ipsum dolor sit amet consectetur. Odio ultricies cum nec facilisis sodales sit pulvinar. Dolor mattis egestas mi donec egestas proin ultrices sagittis. Fermentum lacinia sit bibendum mattis sed dui curabitur. Euismod vitae nunc nunc iaculis habitant morbi. Vel feugiat in pellentesque cursus. Etiam ut turpis aenean cursus in.</p>
                </div>
            </div>
        </section>
    )
}