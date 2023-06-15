import React from 'react';
import Image from 'next/image';


export function GetStarted() {
  return (
    <section>
        <div className='relative text-[#FEFEFE] '>
                <div className='w-[100vw]'>
                <Image 
                  src="/img/get-started-background.svg" 
                  alt='OAk & D Logistics' 
                  width={300} 
                  height={300} 
                  layout='responsive'
                  className='w-[100%] h-[100%] md:hidden block '
                />
                <Image 
                  src="/img/get-started-background1.svg" 
                  alt='' 
                  width={300} 
                  height={300} 
                  layout='responsive'
                  className='w-[100%] h-[100%] hidden md:block '
                />
                {/* <img src="/img/get-started-background.svg" alt="" className='w-[100%] h-[100%] md:hidden block ' />
                <img src="/img/get-started-background1.svg" alt="" className='w-[100%] h-[100%] hidden md:block  ' /> */}
                </div>
            <div className='absolute top-[0px] w-[55%] left-[7.5%] lg:left-[25%] text-center ' >
                    <h2 className='font-semibold text-[36px] lg:text-[40px] mt-[149px] mb-[48px] md:mt-[7%] md:mb-[2%] '>Ready to get started with OAK & D?</h2>
                     <p className='text-[16px] lg:text-[20px] font-[500] mb-[48px] md:mb-[2%] '>Get started to track your package efficiently, view your order history, gain access to a lot more and get 40% off on our freight services</p>
                     <button className='bg-[#0A089A] rounded-[10px] py-[16px] lg:py-[23px] lg:px-[54px] px-[34px] m-auto hover:bg-[#AC0108] text-[16px] lg:text-[18px] '>Get Started</button>
            </div>
        </div>
    </section>
  )
}
