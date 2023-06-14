import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className='py-[50px] px-[20px] lg:px-[50px] bg-[#F8F8F8] '>
        <div className='mb-[60px] lg:flex lg:gap-x-[50px] '>
            <div className='flex flex-col gap-y-[15px] mb-[30px] lg:mb-0 lg:w-[250px] '>
                <div>
                    <Image src="/img/footer-logo.svg" alt="Logo" width={50} height={50} />
                </div>
                <p className='text-[#1E1E1E] text-[16px] lg:text-[18px] '>OAK & D is a reputable cargo and freight company that specializes in shipping goods from Nigeria to Canada.</p>
                <div className='flex gap-x-[15px] text-[25px] lg:text-[30px] '>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaFacebook/>
                    <FaLinkedin/>
                </div>
            </div>

            <div className='text-[#1E1E1E] text-[16px] lg:text-[18px] lg:flex lg:gap-x-[50px] '>
                <div className='flex justify-between gap-x-[50px] mb-[30px] lg:mb-0 lg:mr-[30px]'>
                    <div className='flex flex-col gap-y-[8px] w-[250px] lg:w-auto'>
                        <h2 className='text-[20px] lg:text-[25px] font-[700] '>Our Company</h2>
                        <Link href={'/about'}>About Us</Link>
                        <Link href={''}>Pricing</Link>
                    </div>
                    <div className='flex flex-col gap-y-[8px] w-[250px] lg:w-auto'>
                        <h2 className='text-[20px] lg:text-[25px] font-[700] '>Help</h2>
                        <Link href={'/contact'}>Contact Us</Link>
                        <Link href={''}>FAQ</Link>
                        <Link href={''}>Term of Service</Link>
                    </div>
                </div>

                <div className='flex justify-between gap-x-[50px] '>
                    <div className='flex flex-col gap-y-[8px] w-[250px] lg:w-auto'>
                        <h2 className='text-[20px] lg:text-[25px] font-[700] '>Services</h2>
                        <Link href={''}>Air Shipping</Link>
                        <Link href={''}>Ocean Shipping</Link>
                        <Link href={''}>Parcel Delivery</Link>
                        <Link href={''}>Warehousing & Administration</Link>
                    </div>

                    <div className='flex flex-col gap-y-[8px] w-[250px] lg:w-auto'>
                        <h2 className='text-[20px] lg:text-[25px] font-[700] '>Legal</h2>
                        <Link href={'/contact'}>Privacy Policy</Link>
                        <Link href={''}>Refund Policy</Link>
                        <Link href={''}>Terms and Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='border-t-[2px] border-[#E7E7E7] pt-[15px] '>
            <p className='text-[#1E1E1E] text-[11px] lg:text-[16px] font-[500] '>
                <span className='uppercase mr-[8px]'>2023 OAK & D LTD.</span>
                <span>All Rights Reserved</span>
            </p>
        </div>
    </footer>
  )
}
