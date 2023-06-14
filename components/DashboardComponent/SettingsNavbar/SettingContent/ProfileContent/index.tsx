import { useState, useContext, useEffect } from 'react';
import { SettingContext } from '@/context/UserDashboardSettings';
import { getSingleUser } from '@/api/api';
import { updateUserProfile } from '@/api/api';
import { initialUserDataType } from '@/pages/dashboard/settings';
import { DeleteModalContext } from '@/context/UserDashboardLayout';

export interface profileDataType {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
}

interface ProfileContentDataType {
    initialUserValue: initialUserDataType;
}

export function ProfileContent(props: ProfileContentDataType){
    const {initialUserValue} = props;
    const {activeSettingNav, setActiveSettingNav} = useContext(SettingContext);
    const { setShowFirstModal } = useContext(DeleteModalContext)
    const [isReadOnly, setIsReadOnly] = useState(true);
    const [profileData, setProfileData] = useState<profileDataType>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    })

    useEffect(() => {
        setProfileData({
            firstName: initialUserValue.firstName,
            lastName: initialUserValue.lastName,
            email: initialUserValue.email,
            phoneNumber: initialUserValue.phoneNumber,
        });
    }, [initialUserValue]);
    
    function handleProfileChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setProfileData(prevData => {
            return{
                ...prevData,
                [name]: value
            }
        })
    }
    const handleProfileSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        try {
            const {data} = await updateUserProfile(profileData);
            setProfileData({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phoneNumber: data.phoneNumber,
            });
        } catch (error) {
            
        }
    }
    function changeReadOnly(){
        setIsReadOnly(false)
    }

    return(
        <section className={activeSettingNav === 0 ? `border-[2px] border-[#F3F3F3] rounded-[10px] lg:p-[20px]` : 'hidden'}>
            <div className="flex gap-x-[20px] justify-between items-center mb-[20px] ">
                <h1 className="text-[18px] font-[600] text-[#1E1E1E] lg:text-[24px] ">Personal Information</h1>
                <button onClick={changeReadOnly} className="text-[#0A089A] text-[14px] font-[500] p-[20px] bg-[#F3F3F3] rounded-[10px] lg:text-[16px] ">Edit Information</button>
            </div>

            <form onSubmit={handleProfileSubmit}>
                <div className="flex flex-col lg:flex-row lg:gap-x-[30px] lg:justify-between mb-[30px] ">
                    <div className="flex flex-col mb-[20px] lg:w-[100%] ">
                        <label htmlFor="firstName" className="text-[#9C9C9C] text-[16px] font-[500] mb-[8px] ">First Name</label>
                        <input 
                            id="firstName" 
                            type="text" 
                            name='firstName'
                            value={profileData?.firstName} 
                            onChange={handleProfileChange}
                            readOnly={isReadOnly}
                            className="p-[20px] bg-none border-[2px] border-[#F3F3F3] rounded-[10px] " 
                        />
                    </div>

                    <div className="flex flex-col lg:w-[100%]">
                        <label htmlFor="lastName" className="text-[#9C9C9C] text-[16px] font-[500] mb-[8px] ">Last Name</label>
                        <input 
                            id="lastName" 
                            type="text" 
                            name='lastName'
                            value={profileData?.lastName}
                            onChange={handleProfileChange}
                            readOnly={isReadOnly}
                            className="p-[20px] bg-none border-[2px] border-[#F3F3F3] rounded-[10px] " 
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-x-[30px] lg:justify-between mb-[30px]">
                    <div className="flex flex-col mb-[20px] lg:w-[100%] ">
                        <label htmlFor="email" className="text-[#9C9C9C] text-[16px] font-[500] mb-[8px] ">Email Address</label>
                        <input 
                            id="email" 
                            type="email"
                            name='email' 
                            value={profileData?.email} 
                            onChange={handleProfileChange}
                            readOnly={isReadOnly} 
                            className="p-[20px] bg-none border-[2px] border-[#F3F3F3] rounded-[10px] " 
                        />
                    </div>

                    <div className="flex flex-col lg:w-[100%]">
                        <label htmlFor="phoneNumber" className="text-[#9C9C9C] text-[16px] font-[500] mb-[8px] ">Phone</label>
                        <input 
                            id="phoneNumber" 
                            placeholder="Add Phone Number" 
                            type="number"
                            name='phoneNumber'
                            value={profileData?.phoneNumber}
                            onChange={handleProfileChange}
                            readOnly={isReadOnly}
                            className="p-[20px] bg-none border-[2px] border-[#F3F3F3] rounded-[10px] " 
                        />
                    </div>
                </div>
                <button type="submit" className="p-[20px] bg-[#0A089A] rounded-[15px] text-[#FEFEFE] text-[16px] font-[500] w-[100%] lg:text-[20px] ">Save Changes</button>
            </form>

            <button onClick={()=> setShowFirstModal(true)} className="p-[20px] bg-[#AC0108] mt-[20px] rounded-[15px] text-[#FEFEFE] text-[16px] font-[500] w-[100%] lg:text-[20px] lg:hidden ">Delete</button>
        </section>
    )
}