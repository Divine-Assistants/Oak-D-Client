import React, {useEffect, useState} from 'react'
import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';

export function Navbar() {
const [nav, setNav] = useState(0)
    const handleMouseEnter = () => {setNav(1)}
    const handleMouseEnter1 = () => {setNav(2)}
    const handleMouseLeave = () => {setNav(0)}
const { isOpen, onOpen, onClose } = useDisclosure();
const router = useRouter();

      const [isFixed, setIsFixed] = useState(false);

      useEffect(() => {
        let prevScrollPos = window.pageYOffset;
    
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setIsFixed(currentScrollPos <= prevScrollPos); // Set isFixed to true when scrolling up
    
          prevScrollPos = currentScrollPos;
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <header >
      {/* ${isFixed ? 'fixed top-0 left-0 w-full bg-white shadow-lg' : '' } */}
      
            <div className=''>
              <Flex className='flex items-center py-[10px] px-[15px] lg:pt-[20px] lg:pb-[4px] lg:px-[30px] '>
              <Box className=' flex items-center justify-center cursor-pointer '>
                <Image 
                  src="/img/nav-logo.svg" 
                  alt='LOGO'
                  width={80} 
                  height={80} 
                  // className='w-[100%] h-[100%] ' 
                />
              </Box> 
              <Spacer/>
              <Box className='text-[50px] flex items-center justify-center lg:hidden  '>
                  <HamburgerIcon  onClick={onOpen} />
              </Box>

                <div className='hidden lg:flex lg:items-center lg:text-[18px] lg:font-[500] lg:gap-[43px] lg:mr-[30px] '>
                    <div className='hover:text-[#AC0108]' style={router.pathname === "/" ? { color: "#AC0108" } : {}}>
                    <Link  href={'/'}>Home</Link>
                    </div>
                    <div className='hover:text-[#AC0108]' style={router.pathname === "/about" ? { color: "#AC0108" } : {}}>
                    <Link  href={'/about'}>About</Link>
                    </div>
                    <div className='hover:text-[#AC0108]' style={router.pathname === "/blogs" ? { color: "#AC0108" } : {}}>
                    <Link  href={'/blogs'}>Blogs</Link>
                    </div>
                    <div className='hover:text-[#AC0108]' style={router.pathname === "/track" ? { color: "#AC0108" } : {}}>
                    <Link  href={'/track'}>Track Item</Link>
                    </div>
                    
                    
                    
                    

                      <p className='hover:text-[#AC0108]' style={router.pathname === "/contact" ? { color: "#AC0108" } : {}}><Link href={'/contact'}>Contact</Link></p>
                      <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave} className='relative '>
                                      <Flex className='gap-[5px] items-center cursor-pointer'>
                                        <p className='cursor-pointer hover:text-[#AC0108]' style={router.pathname === "/quote/"  ? { color: "#AC0108" } : {}} >Get Quote </p>
                                          <ChevronDownIcon className='w-[7px] h-[14px]' />
                                        </Flex>
                                      
                                      <div className=' text-left w-[200px] m-auto text-[18px] font-[500] absolute top-[25px] rounded-[5px] bg-[#FEFEFE] py-[30px] z-[10] shadow bg-gray-100 ' style={{
                                          display:nav===2? 'block':'none'
                                      }}onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave} >
                                        <div className=' mt-[15px] mb-[15px] pl-[10px] hover:text-[#AC0108] ' style={router.pathname === "/quote/domestic" ? { color: "#AC0108" } : {}}><Link href={'/quote/domestic'} >Domestic Shipping </Link></div>
                                        <div className='border border-[#D8D8D8]'></div>
                                        <div className=' mt-[15px] mb-[15px] pl-[10px] hover:text-[#AC0108] ' style={router.pathname === "/quote/global" ? { color: "#AC0108" } : {}}><Link href={'/quote/global'} >Global Shipping</Link></div>
                                        <div className='border border-[#D8D8D8]'></div>
                                        <div className=' mt-[15px] mb-[15px] pl-[10px] hover:text-[#AC0108]  ' style={router.pathname === "/quote/warehousing" ? { color: "#AC0108" } : {}}> <Link href={'/quote/warehousing'}>Warehousing Services</Link></div>
                                      </div>

                      </div>
                      <button className='ml-[21px] py-[10px] px-[25px] bg-[#AC0108] text-[#FEFEFE]  rounded-[5px]  hover:bg-[#0A089A] '><Link href={'/get-started'}>Get Started</Link> </button>
                      
                    
                </div>

               </Flex>
                 


                 {/* MOBILE VIEW */}
              <div className='lg:hidden '>
                  <Drawer size={"xs"} placement={"left"} onClose={onClose} isOpen={isOpen}  >
                     <DrawerOverlay />
                     <DrawerContent bg={'#FEFEFE'} className='overflow-hidden overflow-y-auto w-[70%] pb-[20px] '  >
                      <DrawerHeader className='pt-[30px] px-[20px] ' >

                        <Flex className='flex items-center'>
                            <Box className='w-[80px] h-[70px] cursor-pointer '>
                              <Image 
                                src="/img/nav-logo.svg" 
                                alt='LOGO'
                                width={300} 
                                height={300} 
                                className='w-[100%] h-[100%] ' 
                              />
                            </Box>

                            <Spacer/>
                            <CloseButton size='lg' onClick={onClose} />
                        </Flex>  
                      </DrawerHeader>
  <DrawerBody className='px-[30px]'>
    <Link href={'/'}><p className='py-[15px] border-b-2 border-[#D8D8D8] text-[25px] font-[500] hover:text-[#AC0108]' style={router.pathname === "/" ? { color: "#AC0108" } : {}}>Home</p></Link>

    <Link href={'/about'}><p className='py-[15px] border-b-2 border-[#D8D8D8] text-[25px] font-[500] hover:text-[#AC0108]' style={router.pathname === "/about" ? { color: "#AC0108" } : {}}>About</p></Link>

    <Link href={'/blogs'}><p className='py-[15px] border-b-2 border-[#D8D8D8] text-[25px] font-[500] hover:text-[#AC0108]' style={router.pathname === "/blog" ? { color: "#AC0108" } : {}}>Blog</p></Link>

    <Link href={'/track'}><p className='py-[15px] border-b-2 border-[#D8D8D8] text-[25px] font-[500] ' style={router.pathname === "/track" ? { color: "#AC0108" } : {}}>Track Item</p></Link>

    <Link href={'/contact'}><p className='py-[15px] border-b-2 border-[#D8D8D8] text-[25px] font-[500]  hover:text-[#AC0108]' style={router.pathname === "/contact" ? { color: "#AC0108" } : {}}>Contact </p></Link>

  <div className='font-[500] W-[100%] '>
    <Flex className='gap-y-[16px] items-center py-[15px] text-[25px] cursor-pointer  ' onClick={()=>setNav(prev => prev === 2 ? 0 : 2)}>
      <p className=' hover:text-[#AC0108]' style={router.pathname === "/quote/"  ? { color: "#AC0108" } : {}}>Get Quote </p>
      <ChevronDownIcon />
    </Flex>
                                        
      <div className=' text-left text-[20px] w-fit pl-[20px] ' style={{display:nav===2? 'block':'none'}} >

        <Link href={'/quote/domestic'}><p className=' py-[15px] border-b border-[#D8D8D8] hover:text-[#AC0108] ' style={router.pathname === "/quote/warehousing" ? { color: "#AC0108" } : {}} >Domestic Shipping</p></Link>

        <Link href={'/quote/global'}><p className=' py-[15px] border-b border-[#D8D8D8] hover:text-[#AC0108]' style={router.pathname === "/quote/warehousing" ? { color: "#AC0108" } : {}} >Global Shipping</p></Link>

        <Link href={'/quote/warehousing'}><p className=' py-[15px] hover:text-[#AC0108] ' style={router.pathname === "/quote/warehousing" ? { color: "#AC0108" } : {}} >Warehousing Services</p></Link>
    </div>
  </div>
  
  <Link href={'/get-started'}>
  <button className='py-[15px] px-[20px] bg-[#AC0108] text-[#FEFEFE]  rounded-[10px] text-[25px] font-[500] hover:bg-[#0A089A] ' > Get Started</button></Link>


</DrawerBody>
</DrawerContent>
</Drawer>
</div>
</div>
</header>
  )
}
