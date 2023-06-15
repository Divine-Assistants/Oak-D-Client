import React, { useContext } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { DomesticContext } from "@/context/DomesticWrapper";
import { GlobalContext } from "@/context/GlobalWrapper";

export function DomesticCrumb() {
  const { trail, setTrail } = useContext(DomesticContext);
  const { glotrail, setGlotrail } = useContext(GlobalContext);
  if (trail || glotrail > 0) {
    return (
      <div
        className="text-[15px] font-[600] hidden md:block md:mb-[53px] ml-[5%] "
        style={{}}
      >
        {/* <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500'  />}>
               <BreadcrumbItem style={{display: trail >= 1 || glotrail >= 1 ? 'block' : 'none',}}>
                  <BreadcrumbLink onClick={()=>{setTrail(0); setGlotrail(0)}} style={{}}  className='cursor-pointer'>Generate Quote</BreadcrumbLink>
               </BreadcrumbItem>
      
              <BreadcrumbItem  style={{
                display: trail >= 1 || glotrail >= 1 ? 'block' : 'none',
                color: trail === 1 || glotrail === 1 ? '#AC0108' : 'initial'
                }} >
                  <BreadcrumbLink onClick={()=>{setTrail(1); setGlotrail(1)}} className='cursor-pointer'>Reciever Information</BreadcrumbLink>
              </BreadcrumbItem>
      
              <BreadcrumbItem  style={{
                display: trail >1 || glotrail >1 ? 'block' : 'none',
                color: trail === 2 || glotrail === 2 ? '#AC0108' : 'initial'
            
            }} >
                  <BreadcrumbLink  onClick={()=>{setTrail(2); setGlotrail(2)}} className='cursor-pointer' >Parcel Information</BreadcrumbLink>
              </BreadcrumbItem>
      
              <BreadcrumbItem  style={{
                display: trail >2 ? 'block' : 'none',
                color: trail === 3 ? '#AC0108' : 'initial'
                }}>
                  <BreadcrumbLink  onClick={()=>{setTrail(3); setGlotrail(3)}} className='cursor-pointer' >Shipping Summary</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem  style={{
                display: trail >3 ? 'block' : 'none',
                color: trail === 4 ? '#AC0108' : 'initial'
                }}>
                  <BreadcrumbLink  onClick={()=>{setTrail(4); setGlotrail(4)}} className='cursor-pointer' >Checkout</BreadcrumbLink>
              </BreadcrumbItem>
          </Breadcrumb> */}
      </div>
    );
  } else {
    return console.log("crumb no dey work");
  }
}
