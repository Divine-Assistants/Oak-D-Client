import { DomesticContext, DomesticContextType } from '@/context/DomesticWrapper'
import React, {useContext, useState, Dispatch, SetStateAction} from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { scrollToTop } from '@/components';
import { clientInfo, initialClientInfo } from '@/components';

interface DomesticReceiverType {
    setData: Dispatch<SetStateAction<any>>
}

export function DomesticReciever({setData}: DomesticReceiverType) {
  const { trail, setTrail } = useContext(DomesticContext);
  const [receiverData, setReceiverData] = useState<clientInfo>(initialClientInfo);

  function handleReceiverDataChange(event: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setReceiverData(prevData => {
        return {
            ...prevData,
            [name]: value
        }
    })
  };

  function handleFormSubmit(){
    setData(prevData=>{
        return {...prevData, receiver: receiverData}
    });
    setReceiverData(initialClientInfo);
    setTrail(2);
    window.scrollTo(0,0);
  }
  
  return (
    <div style={{display: trail !== 1? 'none' : 'initial'}}>
      <div className='w-[90%] m-auto lg:flex '>
        <div className='mb-[40px] lg:w-[40%]'>
         <p className=' text-[40px] font-[600] '>Please enter the <span className='text-[#A1A1A1]'>reciever's information</span> to proceed</p>
        </div>
        <form id='' className='text-[18px] text-[#1E1E1E] font-[600] w-[90%] m-auto lg:w-[50%]  '>
         <div className='lg:flex lg:items-center lg:justify-between '>

                <div className='flex flex-col gap-[10px] mb-[25px]'>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        name="firstName"
                        value={receiverData.firstName}
                        onChange={handleReceiverDataChange}
                        id="firstName" 
                        className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' 
                        placeholder='Enter First Name' 
                    />
                </div>

                <div  className='flex flex-col gap-[10px] mb-[25px]'>
                    <label htmlFor="">Last Name</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={receiverData.lastName}
                        onChange={handleReceiverDataChange}
                        id="lastName" 
                        className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' 
                        placeholder='Enter Last Name' 
                    />
               </div>
         </div>

        <div  className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                value={receiverData.email}
                onChange={handleReceiverDataChange}
                id="email" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' 
                placeholder='xyz@mail.com'  
            />
        </div>

        <div  className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="phoneNumber">Phone</label>
            <input 
                type="number" 
                name="phoneNumber" 
                value={receiverData.phoneNumber}
                onChange={handleReceiverDataChange} 
                id="phoneNumber" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' 
                placeholder='Phone' 
            />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="region">Region</label>
            <input 
                type="text" 
                name="region"
                value={receiverData.region}
                onChange={handleReceiverDataChange}
                id="region" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' 
                placeholder='Region'  
            />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="country">Country</label>
            <input 
                type="text" 
                name="country"
                value={receiverData.country}
                onChange={handleReceiverDataChange}
                id="country" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' 
                placeholder='Country'  
            />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="address">Address</label>
            <input 
                type="text" 
                name="address"
                value={receiverData.address}
                onChange={handleReceiverDataChange}
                id="address" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' 
                placeholder='Address'  
            />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="postalCode">Postal Code</label>
            <input 
                type="text" 
                name="postalCode"
                value={receiverData.postalCode}
                onChange={handleReceiverDataChange}
                id="postalCode" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' 
                placeholder='Postal Code'  
            />
        </div>

        <button type='button'
            className='flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[50px] py-[10px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] lg:px-[160px] lg:py-[27px] lg:mr-[10%] hover:bg-[#1E1E1E] '
            onClick={handleFormSubmit}
            >
                <p>Proceed to Parcel Information</p> 
                <FaArrowRight />
            </button>

    </form>
    </div>
    </div>
  )
}
