import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className='bg-[#0A089A] pl-[26px] pt-[50px] font-[500] '>
         <div className='lg:flex lg:pt-[117px] lg:pb-[170px] lg:pl-[100px]    '>
            <div className='text-[#FEFEFE] w-[80%] mb-[60px] lg:w-[20%] lg:mr-[194px] ' >
            <div className='mb-[20px]'><img src="/img/footer-logo.svg" alt="Logo" /></div>
            <p className='text-[16px] mb-[20px] '>OAK & D is a reputable cargo and freight company that specializes in shipping goods from Nigeria to Canada.</p>
            <div className='flex items-center gap-[25px] text-[30px] '>
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
            <FaLinkedin/>
            </div>
          </div>
        <div className='flex flex-wrap text-[#FEFEFE] text-[24px]  lg:text-[18px] font-[500] gap-[66px] mb-[60px] md:w-[70%] md:m-auto lg:flex-nowrap  '>
                <div className='w-[45%] flex flex-col gap-[10px]  '>
                    <h2 className='font-semibold text-[30px] lg:text-[20px] '>Our Company</h2>
                    <Link href={''}>About</Link>
                    <Link href={''}>Pricing</Link>
                </div>

                <div className='w-[40%]  flex flex-col gap-[10px] '>
                    <h2 className='font-semibold text-[30px]  lg:text-[20px] '>Help</h2>
                    <Link href={''}>Contact Us</Link>
                    <Link href={''}>FAQ</Link>
                    <Link href={''}>Term of Service</Link>
                </div>
                <div className='w-[40%]  flex flex-col gap-[10px] '>
                    <h2 className='font-semibold text-[30px]  lg:text-[20px] '>Services</h2>
                    <Link href={''}>Air Freight</Link>
                    <Link href={''}>Ocean Freight</Link>
                    <Link href={''}>Parcel Delivery</Link>
                    <Link href={''}>Warehousing & Administration</Link>
                </div>
                <div className='w-[40%] flex flex-col gap-[10px] '>
                    <h2 className='font-semibold text-[30px]  lg:text-[20px] '>Legal</h2>
                    <Link href={''}>Privacy Policy</Link>
                    <Link href={''}>Refund Policy</Link>
                    <Link href={''}>Terms and Conditions</Link>
                </div>
        </div>
            </div>
        <div className='w-[95%] border-2 border-[#FEFEFE] m-auto mb-[20px]  '></div>
        <Flex className='text-[13px] lg:text-[18px] text-[#FEFEFE] px-[30px] py-[20px] '>
                <div >    2023 OAK & D LTD . All Rights Reserved</div>
            <Spacer/>
            <div className='flex items-center gap-[7px] '><FaGlobe /> <p>English</p> <ChevronDownIcon className='w-[6px] h-[11px] '/> </div>
        </Flex>
    </footer>
  )
}
