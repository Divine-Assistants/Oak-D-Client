import React from 'react'

export function Why() {
  return (
    <div className='lg:w-[90%]  lg:m-auto lg:pb-[175px] '>
          <h2 className='text-[#AC0108] text-[32px] lg:text-[55px] font-[600] w-fit m-auto mb-[40px] hidden lg:block  '>Why Choose Us </h2>

          <div className='pt-[152px] pb-[200px] lg:pb-[0px] lg:pt-[100px] lg:flex lg:items-center lg:gap-[102px] '>
            <h2 className='text-[#AC0108] text-[32px] font-[600] w-fit m-auto mb-[40px] block lg:hidden  '>Why Choose Us </h2>
            <div className='w-[80%] lg:w-[25%] m-auto bg-[#F5F5F5] rounded-[10px] text-[#1E1E1E] py-[51px] lg:py-[59px]  mb-[20px]  '>
              <div className='w-[80%] m-auto flex flex-col gap-[20px]'>
               <div ><img src="/img/safe-packaging.svg" alt="Safe Packaging" /></div>
                <h3 className='font-semibold text-[20px] md:text-[24px] '>Safe Packaging</h3>
                <p className='text-[16px] font-[500] md:text-[18px]  '>We are committed to ensuring the safe delivery of all packages entrusted to our care. We understand that the timely and secure delivery of your cargo is critical to your business operations, which is why we make it our top priority.</p>
               </div>
            </div>
            <div className='w-[80%] lg:w-[25%] m-auto bg-[#F5F5F5] rounded-[10px] text-[#1E1E1E] py-[51px] lg:py-[69px] mb-[20px]  '>
              <div className='w-[80%] m-auto flex flex-col gap-[20px]'>
               <div ><img src="/img/live-tracking.svg" alt="Live Tracking" /></div>
                <h3 className='font-semibold text-[20px] md:text-[24px] '>Live Tracking</h3>
                <p className='text-[16px] font-[500] md:text-[18px] '>At OAK & D, we understand the importance of live tracking for our customers. Our advanced tracking systems allow you to monitor the progress of your shipment in real-time, from pickup to delivery</p>
               </div>
            </div>
            <div className='w-[80%] lg:w-[25%] m-auto bg-[#F5F5F5] rounded-[10px] text-[#1E1E1E] py-[51px] lg:py-[79px]  '>
              <div className='w-[80%] m-auto flex flex-col gap-[20px]'>
               <div ><img src="/img/customer-service.svg" alt="24/7 Customer Service" /></div>
                <h3 className='font-semibold text-[20px] md:text-[24px] '>24/7 Customer Service</h3>
                <p className='text-[16px] font-[500] md:text-[18px] '>Communication is key. So, our team of customer service representatives is available 24/7 to assist you with any questions or concerns you may have about your shipment. </p>
               </div>
            </div>
    </div>
    </div>
    
  )
}
