import React from 'react'

export function Sender() {
  return (
    <form id='' className='text-[18px] text-[#1E1E1E] font-[600] w-[90%] m-auto mb-[75px] lg:w-[50%]  '>
        <div className='lg:flex lg:items-center lg:justify-between lg:gap-x-[20px] '>

        <div className='flex flex-col mb-[25px] lg:w-[100%]'>
            <label htmlFor="first name">First Name</label>
            <input type="text" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='Enter First Name' />
        </div>

        <div  className='flex flex-col mb-[25px] lg:w-[100%]'>
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='Enter Last Name' />
        </div>

        </div>

        <div  className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='xyz@mail.com'  />
        </div>

        <div  className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="">Phone</label>
            <input type="number" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='Phone' />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="">Region</label>
            <input type="text" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='Region'  />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="">Country</label>
            <input type="text" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='Country'  />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='Address'  />
        </div>

        <div className='flex flex-col gap-[10px] mb-[25px]'>
            <label htmlFor="">Postal Code</label>
            <input type="text" name="" id="" className='rounded-[10px] border border-[#A1A1A1] h-[65px] outline-[#0A089A] placeholder-[] pl-[24px]  ' placeholder='Postal Code'  />
        </div>

    </form>
  )
}
