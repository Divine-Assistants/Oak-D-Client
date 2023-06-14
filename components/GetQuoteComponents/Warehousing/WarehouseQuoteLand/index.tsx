import { DomesticContext } from '@/context/DomesticWrapper'
import { GlobalContext } from '@/context/GlobalWrapper'
import React, { useContext, useState, Dispatch, SetStateAction } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { clientInfo, initialClientInfo } from '../../Domestic';


interface WarehouseSenderType {
    setData: Dispatch<SetStateAction<any>>
}

export function WarehouseQuoteLand({setData}: WarehouseSenderType) {
    const [senderData, setSenderData] = useState<clientInfo>(initialClientInfo);

    const { trail, setTrail } = useContext(DomesticContext);
    const { glotrail, setGlotrail } = useContext(GlobalContext);
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
    function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({top: 20, behavior: 'smooth'});
    }

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
    <div className='mb-[102px]' style={{display: glotrail !== 0? 'none' : 'initial'}}>
    <div className='relative'>
       <div className='w-[100vw] h-[835px] lg:h-[945px] '>
            <div className='hidden md:block h-[100%] w-[100%]'><img src="/img/global-quote-back.svg" alt="global shipping" className='w-[100%] h-[100%] object-cover ' /></div>
            <div className='block md:hidden h-[100%] w-[100%]'><img src="/img/global-quote-back-1.svg" alt="global shipping" className='w-[100%] h-[100%] object-cover ' /></div>
       </div>
   <div className='absolute top-0'>
       <div className='bg-[#FEFEFE]/[.68] w-[90%] lg:w-[55%] lg:ml-[5%] m-auto mt-[240px] md:mt-[153px] lg:mt-[15px] py-[81px] md:py-[34px] lg:py-[64px]  '>
         <div className='w-[80%] m-auto '>
          <h1 className='font-semibold text-[#AC0108] text-[20px] md:text-[24px] '>Get Quote</h1>
          <p className='font-[700] text-[32px] text-[#1E1E1E] md:text-[36px] '>Ready to ship your package?, follow the procedures below</p>
         </div>
     </div>
 </div>
</div>

{/* form */}

<div className='w-[90%] m-auto lg:flex mt-[100px] '>
            <div className='mb-[40px] lg:w-[40%] '>
                 <h1 className='text-[16px] font-[600] text-[#AC0108] mb-[15px] '>Warehousing</h1>
                 <p className=' text-[40px] font-[600] '>Please enter<span className='text-[#A1A1A1]'>your information</span> to proceed</p>
            </div>

{/* Main form */}

            <form id='' className='text-[18px] text-[#1E1E1E] font-[600] w-[90%] m-auto lg:w-[50%]   '>
                <div className='lg:flex lg:items-center lg:justify-between '>

                <div className='flex flex-col gap-[10px] mb-[25px]'>
                    <label htmlFor="first name">First Name</label>
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
                     <label htmlFor="">Last Name</label>
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
            <label htmlFor="">Email</label>
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
            <label htmlFor="">Phone</label>
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
            <label htmlFor="">Region</label>
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
            <label htmlFor="">Country</label>
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
            <label htmlFor="">Address</label>
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
            <label htmlFor="">Postal Code</label>
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

        <button type='button' onClick={handleFormSubmit} className='flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[55px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[60px] md:px-[165px] md:py-[27px] md:ml-[46%] hover:bg-[#1E1E1E]  '>
            <p>Proceed to Parcel Information</p> 
            <FaArrowRight />
        </button>

    </form>
    </div>
   
                

</div>
  )
}
