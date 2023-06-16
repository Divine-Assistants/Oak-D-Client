import React from 'react';
import Image from 'next/image';

export function Address() {
  return (
    <section className='pb-[50px] lg:pb-[50px]'>
        <div className='lg:flex lg-items-center lg:gap-[51px] lg:w-[100%] lg:mb-[100px]   ' >
            <div className='w-[100%] ml-[40px] flex flex-col gap-[20px] mb-[40px]  '>
                <h2 className='text-[20px] font-semibold md:text-[24px] '>CANADA</h2>
                <div className='lg:flex-col  lg:items-center lg:gap-[50px] w-[100%]  '>
                        <div className='flex mb-[50px] gap-[40px]'>
                                <div className='flex gap-[20px] w-[45%] '>
                                <div>
                                <Image 
                                    src="/img/location-pin.svg" 
                                    alt='Ikeja Lagos State location' 
                                    width={30} 
                                    height={30} 
                                />
                                </div>
                                <p className='text-[16px] font-[500] md:text-[18px] '>NORTH YORK<br />Unit 16 3625 Weston Road North York ON M9LIV8<br />Canada</p>
                        </div>
                        <div className='flex gap-[20px] w-[45%] '>
                                <div>
                                    <Image 
                                        src="/img/location-pin.svg" 
                                        alt='Ikeja Lagos State location' 
                                        width={30} 
                                        height={30} 
                                    />
                                </div>
                                <p className='text-[16px] font-[500] md:text-[18px] '>BRAMPTON<br /> 5 Stanford Drive Brampton<br /> ON L6WIL3<br /> Canada</p>
                        </div>                                   
                    </div>
                    <div className='flex gap-[40px]'>
                        <div className='flex gap-[20px] w-[45%] '>
                                    <div>
                                        <Image 
                                            src="/img/location-pin.svg" 
                                            alt='Ikeja Lagos State location' 
                                            width={30} 
                                            height={30} 
                                        />
                                    </div>
                                    <p className='text-[16px] font-[500] md:text-[18px] '>OSHAWA<br /> 1160 Sincoe Street <br /> South LIH5L8<br /> Canada</p>
                            </div>
                            <div className='flex gap-[20px] w-[45%] '>
                                    <div>
                                        <Image 
                                            src="/img/location-pin.svg" 
                                            alt='Ikeja Lagos State location' 
                                            width={30} 
                                            height={30} 
                                        />
                                    </div>
                                    <p className='text-[16px] font-[500] md:text-[18px] '>AJAX<br /> 7 Shapland Crescent<br /> Ajax LIZ0K2<br /> Canada</p>
                            </div>
                    </div>
                </div>
                
            </div>

            <div className='hidden lg:block border-2 border-[#1E1E1E]  '></div>

            <div className='w-[90%] m-auto flex flex-col gap-[20px] mt-0  '>
                <h2 className='text-[20px] font-semibold md:text-[24px] '>Nigeria</h2>
                <div className='lg:flex lg:items-center lg:gap-[50px] '>
                 <div className='flex gap-[20px] w-[60%] mb-[40px] lg:mb-[0px] '>
                        <div>
                            <Image 
                                src="/img/location-pin.svg" 
                                alt='Ikeja Lagos State location' 
                                width={30} 
                                height={30} 
                            />
                        </div>
                        <p className='text-[16px] font-[500] md:text-[18px] '>No. 56, Oladipo Street,<br />Off Awolowo Way,<br />Ikeja, Lagos State,Nigeria.</p>
                </div>
                <div className='flex gap-[20px] w-[60%] '>
                        <div>
                            <Image 
                                src="/img/location-pin.svg" 
                                alt='Ikeja Lagos State location' 
                                width={30} 
                                height={30} 
                            />
                        </div>
                        <p className='text-[16px] font-[500] md:text-[18px] '>Flat 2B, Block 12,<br /> Victoria Garden City,<br /> Lekki, Lagos State,<br /> Nigeria</p>
                </div>
                </div>
                
            </div>
        </div>

            <div className='w-[80%] h-[200px] m-auto md:h-[400px] lg:h-[600px] mb-[50px] '>
                <Image 
                src="/img/world-map.svg" 
                alt='Locations Worldwide' 
                width={300} 
                height={300} 
                layout='responsive' 
                />
            </div> 

            <div className='bg-[url("/img/address-background.svg")] bg-center lg:h-[600px] md:mb-[300px] ' >
                <div className='w-[70%] h-[300px] md:h-[300px] m-auto lg:h-[600px] '>
                    <Image 
                        src="/img/oak-container.svg" 
                        alt='OAk & D Logistics' 
                        width={300} 
                        height={300} 
                        layout='responsive' 
                    />
                </div>
            </div>
    </section>
  )
}
