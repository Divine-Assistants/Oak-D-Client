import React from 'react'

export function Address() {
  return (
    <section className='pb-[200px] lg:pb-[375px]'>
        <div className='lg:flex lg-items-center lg:gap-[91px] lg:w-[90%] lg:m-auto lg:mb-[100px]  ' >
            <div className='w-[90%] m-auto flex flex-col gap-[20px] mb-[40px]  '>
                <h2 className='text-[20px] font-semibold md:text-[24px] '>LAGOS, NIGERIA</h2>
                <div className='lg:flex lg:items-center lg:gap-[50px] '>
                 <div className='flex gap-[20px] w-[60%] '>
                        <div><img src="/img/location-pin.svg" alt="Ikeja Lagos State location" /></div>
                        <p className='text-[16px] font-[500] md:text-[18px] '>No. 56, Oladipo Street,<br />Off Awolowo Way,<br />Ikeja, Lagos State,Nigeria.</p>
                </div>
                <div className='flex gap-[20px] w-[60%] '>
                        <div><img src="/img/location-pin.svg" alt="Ikeja Lagos State location" /></div>
                        <p className='text-[16px] font-[500] md:text-[18px] '>Flat 2B, Block 12,<br /> Victoria Garden City,<br /> Lekki, Lagos State,<br /> Nigeria</p>
                </div>
                </div>
                
            </div>

            <div className='hidden lg:block border-2 border-[#1E1E1E]  '></div>

            <div className='w-[90%] m-auto flex flex-col gap-[20px] mb-[40px]  '>
                <h2 className='text-[20px] font-semibold md:text-[24px] '>LAGOS, NIGERIA</h2>
                <div className='lg:flex lg:items-center lg:gap-[50px] '>
                 <div className='flex gap-[20px] w-[60%] '>
                        <div><img src="/img/location-pin.svg" alt="Ikeja Lagos State location" /></div>
                        <p className='text-[16px] font-[500] md:text-[18px] '>No. 56, Oladipo Street,<br />Off Awolowo Way,<br />Ikeja, Lagos State,Nigeria.</p>
                </div>
                <div className='flex gap-[20px] w-[60%] '>
                        <div><img src="/img/location-pin.svg" alt="Ikeja Lagos State location" /></div>
                        <p className='text-[16px] font-[500] md:text-[18px] '>Flat 2B, Block 12,<br /> Victoria Garden City,<br /> Lekki, Lagos State,<br /> Nigeria</p>
                </div>
                </div>
                
            </div>
        </div>

            <div className='w-[100vw] h-[234px] md:h-[434px] lg:h-[735px] mb-[200px] lg:mb-[375px] '><img src="/img/world-map.svg" alt="Locations Worldwide" className='w-[100%] h-[100%] ' /></div> 
            <div className='bg-[url("/img/address-background.svg")] bg-center lg:h-[917px] ' >
                <div className='w-[90%] h-[377px] md:h-[450px] m-auto lg:h-[715px] '><img src="/img/oak-container.svg" alt="OAk & D Logistics" className='w-[100%] h-[100%] ' /></div>
            </div>
    </section>
  )
}
