import { GlobalContext } from '@/context/GlobalWrapper'
import Link from 'next/link'
import React, {useContext} from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export function PickDrop() {
  const { glotrail, setGlotrail } = useContext(GlobalContext);

  return (
    <section className='' style={{display: glotrail === 4 ? 'block' : 'none'}}>
      <div className='mb-[102px]'>
           <div className='relative'>
              <div className='w-[100vw] h-[835px] lg:h-[945px] '>
                   <div className='h-[100%] w-[100%]'><img src="/img/pick-drop.svg" alt="global shipping" className='w-[100%] h-[100%] object-cover ' /></div>
              </div>
          <div className='absolute top-[5%] '>
              <div className='bg-[#FEFEFE]/[.68] w-[90%] lg:w-[55%] lg:ml-[5%] m-auto mt-[240px] md:mt-[153px] lg:mt-[15px] py-[81px] md:py-[34px] lg:py-[64px]  '>
                <div className='w-[80%] m-auto '>
                 <h1 className='font-semibold text-[#AC0108] text-[20px] md:text-[24px] '>Pick Up And Drop Off</h1>
                 <p className='font-[700] text-[32px] text-[#1E1E1E] md:text-[36px] '>To send a cargo from any country to Canada, Please locate any OAK & D office in your region or contact our team for guidance</p>
                </div>
            </div>
        </div>
       </div>
      </div>

      {/* contact */}
      <div className='w-[90%] m-auto'>
      <div className='mb-[200px]'>
        <div className='w-fit mb-[40px] '>
            <h2 className='text-[28px] lg:text-[32px] font-[600] text-[#AC0108] pb-[10px] '>CONTACT US</h2>
            <div className=' border-b-2 border-[#AC0108] w-[70%] '></div>
        </div>
      <div className=' lg:flex lg:items-center '>  
        <div className='mb-[50px] lg:border-r-4 lg:border-[#1E1E1E]/[.4] lg:pr-[88px] lg:py-[48px] '>
              <p className='text-[#1E1E1E] text-[20px] lg:text-[22px] font-[600] '>Contact Email</p>
              <Link href={''} className='text-[#0A089A] text-[18px] font-[500] '>Support@oak&dcanada.com</Link>
        </div>
        <div className='mb-[50px] lg:border-r-4 lg:border-[#1E1E1E]/[.4] lg:px-[88px] lg:py-[48px] '>
              <p className='text-[#1E1E1E] text-[20px] lg:text-[22px] font-[600] '>Contact Number</p>
              <Link href={''} className='text-[#0A089A] text-[18px] font-[500] '>+(289) 923-3548</Link>
              
        </div>
        <div className='w-fit lg:px-[88px] lg:py-[48px]'>
              <p className='text-[#1E1E1E] text-[20px] lg:text-[22px] font-[600] '>WhatsApp Message</p>
              <Link href={''} className='text-[#0A089A] text-[18px] font-[500] grid place-items-center '><FaWhatsapp size='50px' /></Link>
        </div>
       </div> 
      </div>

      {/* location */}
      <div className='lg:mb-[100px] '>
        <h2 className='text-[28px] lg:text-[32px] font-[600] text-[#AC0108] m-auto mb-[40px] lg:text-center '>OUR DROP OFF LOCATION</h2>
        <div className='lg:flex lg:items-center'>
              <div className='lg:w-[50%] border-r-4 border-[#1E1E1E]/[.4] '>
                  <p className='text-[20px] font-[600] text-[#1E1E1E] mb-[20px] '>ONTARIO,CANADA</p>
                    <div className='lg:flex lg:items-center lg:gap-[50px] '>
                      <div className='flex gap-[20px] text-[18px] font-[500] mb-[20px] lg:mb-[0px]'>
                          <img src="/img/location-pin.svg" alt="location pin" />
                          <p>Unit 456, Building 789, Block C<br/>1234 Elm Avenue<br/>Yorkton, Saskatchewan S3N 5M7<br/>Canada</p>
                      </div>
                      <div className='flex gap-[20px] text-[18px] font-[500] mb-[20px] lg:mb-[0px] '>
                          <img src="/img/location-pin.svg" alt="location pin" />
                          <p>Unit 456, Building 789, Block C<br/>21 Sunflower Street<br/>Halifax, NS B3M 1W8<br/>Canada</p>
                      </div>
                    </div>
                </div>

              <div className='lg:w-[50%] lg:ml-[5%] '>
              <p className='text-[20px] font-[600] text-[#1E1E1E] mb-[20px] '>LAGOS, NIGERIA</p>
                  <div className='lg:flex lg:items-center lg:gap-[50px] '>
                    <div className='flex gap-[20px] text-[18px] font-[500] mb-[20px] lg:mb-[0px] '>
                     <img src="/img/location-pin.svg" alt="location pin" />
                      <p>No. 56, Oladipo Street,<br/>Off Awolowo Way,<br/>Ikeja, Lagos State,<br/>Nigeria.</p>
                  </div>
                  <div className='flex gap-[20px] text-[18px] font-[500] mb-[20px] lg:mb-[0px] '>
                      <img src="/img/location-pin.svg" alt="location pin" />
                      <p>Flat 2B, Block 12,<br/>Victoria Garden City,<br/>Lekki, Lagos State,<br/>Nigeria</p>
                  </div>
                </div>
              </div>
        </div> 
      </div>

      {/* map */}
      <div className='mb-[141px] w-[100vw] h-[234px] md:h-[434px] lg:h-[735px]'>
          <img src="/img/world-map.svg" alt="Locations" className='w-[100%] h-[100%] ' />
      </div>
      </div>
    </section>
  )
}
