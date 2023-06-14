import React, { useContext } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { GlobalContext } from '@/context/GlobalWrapper';

export function GlobalParcelForm() {
        const {glotrail, setGlotrail} = useContext(GlobalContext);
        const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
        function scrollToTop() {
            if (!isBrowser()) return;
             window.scrollTo({top: 20, behavior: 'smooth'});
            }
  return (
    <div className='md:w-[50%] ' style={{display: glotrail === 1? 'block' : 'none'}}>
    <form>
    <div  className='flex flex-col gap-[10px] mb-[25px]'>
        <label htmlFor="" className='font-[600] '>Name Of Cargo</label>
        <input type="text" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[]  pl-[24px] ' placeholder='Name' />
    </div>
    <div  className='flex flex-col gap-[10px] mb-[25px]'>
        <label htmlFor="" className='font-[600] '>Weight</label>
        <div className='relative w-[100%] flex items-center '>
                <input type="number" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] ' placeholder='0' />
                <p className='absolute font-[600] text-[18px] right-[5%] '>lbs</p>
        </div>
    </div>
    <div  className='flex flex-col gap-[10px]'>
      <label htmlFor="" className='font-[600] '>Dimension</label>
      <div className='flex flex-col gap-[10px] mb-[25px] lg:flex-row'>
          <div className='relative w-[100%] flex items-center '>
                <input type="number" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] ' placeholder='Length' />
                <p className='absolute font-[600] text-[18px] right-[5%] '>In</p>
          </div>
          <div className='relative w-[100%] flex items-center '>
                <input type="number" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] ' placeholder='Breadth' />
                <p className='absolute font-[600] text-[18px] right-[5%] '>In</p>
          </div>
          <div className='relative w-[100%] flex items-center '>
                <input type="number" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] ' placeholder='Height' />
                <p className='absolute font-[600] text-[18px] right-[5%] '>In</p>
          </div>
      </div>
    </div>
    <p className='text-[15px] text-[#AC0108] font-[600] cursor-pointer mb-[25px] '>Need help measuring the dimension?</p>

    <div  className='flex flex-col gap-[10px] mb-[25px]'>
        <label htmlFor="" className='font-[600] '>Departure</label>
        <select  className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] ' >

                
</select>
    </div>

    <div  className='flex flex-col gap-[10px] mb-[25px]'>
        <label htmlFor="" className='font-[600] '>Arrival</label>
        <select className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px] w-[100%] ' >
          
</select>
    </div>

    <div  className='flex flex-col gap-[10px] mb-[25px]'>
        <label htmlFor="" className='font-[600] '>Upload Image</label>
        <input type="file" src="" alt="" className='  ' />
    </div>
    
    <div  className='flex flex-col gap-[10px] mb-[25px]'>
        <label htmlFor="" className='font-[600] '>Parcel Description</label>
        <input type='text' id="" className='rounded-[10px] border border-[#A1A1A1] h-[165px] outline-[#0A089A] placeholder-[]  pl-[24px] pt-[0px] ' placeholder='' />
    </div>
</form>
    <div className=''>
    <button className='flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[55px] py-[21px] bg-[#0A089A] rounded-[10px] m-auto mb-[120px] md:px-[140px] md:py-[27px] md:mr-[5%] '
    onClick={()=>{
     setGlotrail(2)
     scrollToTop()
    }}
    >
       <p>Proceed to shipping summary</p> 
       <FaArrowRight />
    </button>
  </div>
  </div>
  )
}
