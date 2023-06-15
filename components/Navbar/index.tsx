import React, {useState} from 'react'
import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Navbar() {
const [nav, setNav] = useState(0)
    const handleMouseEnter = () => {setNav(1)}
    const handleMouseEnter1 = () => {setNav(2)}
    const handleMouseLeave = () => {setNav(0)}
const { isOpen, onOpen, onClose } = useDisclosure();
const router = useRouter();
  return (
    <header >
            <div className=''>
              <Flex className='pt-[27px] pb-[12px] lg:pt-[12px] lg:pb-[10px] '>
              <Box className='w-[82px] h-[79px] cursor-pointer lg:ml-[50px] '>
                <img src='/img/nav-logo.svg' alt='LOGO' className='w-[100%] h-[100%] ' />
              </Box>
              <Spacer/>
              <Box className='w-[64px] h-[64px] flex items-center justify-center lg:hidden  '>
                  <HamburgerIcon  w={38} h={37} onClick={onOpen} />
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
                      <button className='ml-[21px] py-[14px] px-[32px] bg-[#AC0108] text-[#FEFEFE]  rounded-[5px]  hover:bg-[#0A089A] '><Link href={'/get-started'}>Get Started</Link> </button>
                      
                    
                </div>

               </Flex>
                 


                 {/* MOBILE VIEW */}
              <div className='lg:hidden '>
                  <Drawer size={"xs"} placement={"left"} onClose={onClose} isOpen={isOpen}  >
                     <DrawerOverlay />
                     <DrawerContent bg={'#FEFEFE'} className='overflow-hidden overflow-y-auto w-[70%] pb-[20px] '  >
                      <DrawerHeader className='pt-[30px] px-[30px] ' >
                        <Flex >
                            <Box className='w-[82px] h-[70px] cursor-pointer '>
                               <img src='/img/nav-logo.svg' alt='LOGO' className='w-[100%] h-[100%] ' />
                            </Box>
                            <Spacer/>
                            <CloseButton size='lg' onClick={onClose} />
                        </Flex>
                         
</DrawerHeader>
  <DrawerBody>
    <Link href={'/'}><p className='py-[21px] pl-[30px] border-b-2 border-[#D8D8D8] text-[28px] font-[500] hover:text-[#AC0108]' style={router.pathname === "/" ? { color: "#AC0108" } : {}}>Home</p></Link>

    <Link href={'/about'}><p className='py-[21px] pl-[30px] border-b-2 border-[#D8D8D8] text-[28px] font-[500] hover:text-[#AC0108]' style={router.pathname === "/about" ? { color: "#AC0108" } : {}}>About</p></Link>

    <Link href={'/blog'}><p className='py-[21px] pl-[30px] border-b-2 border-[#D8D8D8] text-[28px] font-[500] hover:text-[#AC0108]' style={router.pathname === "/blog" ? { color: "#AC0108" } : {}}>Blog</p></Link>

    <Link href={'/track'}><p className='py-[21px] pl-[30px] border-b-2 border-[#D8D8D8] text-[28px] font-[500] ' style={router.pathname === "/track" ? { color: "#AC0108" } : {}}>Track Item</p></Link>

    <Link href={'/contact'}><p className='py-[21px] pl-[30px] border-b-2 border-[#D8D8D8] text-[28px] font-[500]  hover:text-[#AC0108]' style={router.pathname === "/contact" ? { color: "#AC0108" } : {}}>Contact </p></Link>

  <div className='font-[500] W-[100%] '>
    <Flex className='gap-y-[16px] items-center py-[21px] pl-[30px] text-[28px] cursor-pointer  ' onClick={()=>setNav(prev => prev === 2 ? 0 : 2)}>
      <p className=' hover:text-[#AC0108]' style={router.pathname === "/quote/"  ? { color: "#AC0108" } : {}}>Get Quote </p>
      <ChevronDownIcon className='w-[7px] h-[14px]' />
    </Flex>
                                        
      <div className=' text-left py-[21px] text-[20px] w-fit pl-[30px] ' style={{display:nav===2? 'block':'none'}} >

        <Link href={'/quote/domestic'}><p className='mb-[24px] pb-[15px] border-b border-[#D8D8D8] hover:text-[#AC0108] ' style={router.pathname === "/quote/warehousing" ? { color: "#AC0108" } : {}} >Domestic Shipping</p></Link>

        <Link href={'/quote/global'}><p className='mb-[24px] pb-[15px] border-b border-[#D8D8D8] hover:text-[#AC0108]' style={router.pathname === "/quote/warehousing" ? { color: "#AC0108" } : {}} >Global Shipping</p></Link>

        <Link href={'/quote/warehousing'}><p className='mb-[8px] pb-[15px] hover:text-[#AC0108] ' style={router.pathname === "/quote/warehousing" ? { color: "#AC0108" } : {}} >Warehousing Services</p></Link>
    </div>
  </div>
  
  <Link href={'/get-started'}>
  <button className='ml-[21px] py-[20px] px-[30px] bg-[#AC0108] text-[#FEFEFE]  rounded-[10px] text-[24px] font-[500] hover:bg-[#0A089A] ' > Get Started</button></Link>


</DrawerBody>
</DrawerContent>
</Drawer>
</div>
</div>
</header>
  )
}
