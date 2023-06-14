import React from 'react'

export function QuoteFoot() {
  return (
    <>
    <div className='border border-[#EFEFEF] w-[90%] m-auto text-[#5A5A5A] text-[12px] md:text-[16px] font-[500] mb-[32px] '></div>
        <div className='flex items-center gap-[15px] md:gap-[55px] w-[90%] m-auto mb-[14px] md:mb-[30px] md:w-fit  '>
             <p>Refund Policy</p>
             <div className='w-[5px] md:w-[7px] h-[5px] md:h-[7px] rounded-full bg-[#1E1E1E] '></div>
             <p>Privacy Policy</p>
            <div className='w-[5px] md:w-[7px] h-[5px] md:h-[7px] rounded-full bg-[#1E1E1E] '></div>
            <p>Terms and Condition</p>
        </div>
    </>
  )
}
