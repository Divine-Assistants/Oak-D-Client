import { useState, useContext } from 'react';
import { SettingContext } from '@/context/UserDashboardSettings';
import { DeleteModalContext } from '@/context/UserDashboardLayout';
import { SecondDeleteModal } from '../../DeleteAccountModal';
import { FirstDeleteModal } from '../../DeleteAccountModal';

export function SettingSideNav(){

    const {activeSettingNav, setActiveSettingNav} = useContext(SettingContext);
    const {setShowFirstModal} = useContext(DeleteModalContext);


    return (
        <section className=" lg:border-r-[2px] lg:border-r-[#E6E6E6] lg:pr-[20px] ">

            <h1 className="hidden lg:block text-[24px] text-[#1E1E1E] font-[600] ">Settings</h1>

            <div className="flex items-center gap-x-[20px] text-[18px] font-[500] mb-[20px] lg:flex-col lg:items-start lg:mt-[50px] lg:mb-[100px] gap-y-[80px] ">
                <div onClick={()=>setActiveSettingNav(0)} className={activeSettingNav === 0 ? `cursor-pointer bg-[#0A089A]/[.1] p-[10px] rounded-[8px] text-[#0A089A]` : `cursor-pointer `}>
                    <p>My Profile</p>
                </div>

                <div onClick={()=>setActiveSettingNav(1)} className={activeSettingNav === 1 ? `cursor-pointer bg-[#0A089A]/[.1] p-[10px] rounded-[8px] text-[#0A089A]` : `cursor-pointer`}>
                    <p>Security</p>
                </div>

                <div onClick={()=>setActiveSettingNav(2)} className={activeSettingNav === 2 ? `cursor-pointer bg-[#0A089A]/[.1] p-[10px] rounded-[8px] text-[#0A089A]` : `cursor-pointer `}>
                    <p>Notifications</p>
                </div>
            </div>

            <div onClick={()=> setShowFirstModal(true)} className="hidden cursor-pointer text-[20px] text-[#AC0108] font-[500] lg:block ">
                <p>Delete Account</p>
            </div>
        </section>
    )
}