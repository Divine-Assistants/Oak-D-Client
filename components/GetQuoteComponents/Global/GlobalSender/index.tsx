import { GlobalContext } from '@/context/GlobalWrapper'
import React, {useContext, useState, Dispatch, SetStateAction} from 'react'
import { scrollToTop } from '@/components'
import { FaArrowRight } from 'react-icons/fa';
import { clientInfo, initialClientInfo } from '@/components';

interface GlobalSenderType {
    setData: Dispatch<SetStateAction<any>>
}

export function GlobalSender({setData}: GlobalSenderType) {
  const {glotrail, setGlotrail}= useContext(GlobalContext);
  const [senderData, setSenderData] = useState<clientInfo>(initialClientInfo);

    function handleSenderDataChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setSenderData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleFormSubmit(){
        setData(prevData => {
            return {...prevData, sender: senderData}
        });
        setSenderData(initialClientInfo);
        setGlotrail(1);
        window.scrollTo(0,0);
    }

  return (
    <div  style={{display: glotrail !== 0? 'none' : 'initial'}}>
    <div className='w-[90%] m-auto lg:flex mt-[30px] '>
            <div className='mb-[40px] lg:w-[40%] '>
                 <h1 className='text-[16px] font-[600] text-[#AC0108] mb-[15px] '>Global Shipping</h1>
                 <p className=' text-[40px] font-[600] '>Please enter the <span className='text-[#A1A1A1]'>sender's information</span> to proceed</p>
            </div>
            <form id='' className='text-[18px] text-[#1E1E1E] font-[600] w-[90%] m-auto mb-[75px] lg:w-[50%]  '>
        <div className='lg:flex lg:items-center lg:justify-between '>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name="firstName"
                value={senderData.firstName}
                onChange={handleSenderDataChange}
                id="firstName" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' 
                placeholder='Enter First Name'  
            />
        </div>

        <div  className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                name="lastName" 
                value={senderData.lastName}
                onChange={handleSenderDataChange}
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
                value={senderData.email}
                onChange={handleSenderDataChange}
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
                value={senderData.phoneNumber}
                onChange={handleSenderDataChange} 
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
                value={senderData.region}
                onChange={handleSenderDataChange}
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
                value={senderData.country}
                onChange={handleSenderDataChange}
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
                value={senderData.address}
                onChange={handleSenderDataChange}
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
                value={senderData.postalCode}
                onChange={handleSenderDataChange}
                id="postalCode" 
                className='rounded-full border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' 
                placeholder='Postal Code'  
            />
        </div>

    </form>
    </div>
    <button 
        className='flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[50px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] lg:px-[160px] lg:py-[27px] lg:mr-[10%] hover:bg-[#1E1E1E] '
        onClick={handleFormSubmit}
        >
            <p>Proceed to Reciever Information</p> 
            <FaArrowRight />
        </button>
    </div>
  )
}
