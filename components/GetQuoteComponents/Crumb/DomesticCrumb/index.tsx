import React, {useContext} from 'react';
import { DomesticContext } from '@/context/DomesticWrapper';
import { GlobalContext } from '@/context/GlobalWrapper';
import { FaChevronRight } from 'react-icons/fa';

export function DomesticCrumb(): JSX.Element | null {
  const { trail, setTrail } = useContext(DomesticContext)
  const { glotrail, setGlotrail } = useContext(GlobalContext)
  if ( trail || glotrail > 0 ){
        return(
          <div className='text-[15px] font-[600] hidden md:block md:mb-[53px] ml-[5%] ' style={{
           
            }}>
          <section className='flex items-center gap-[8px]' >
               <div className='flex items-center gap-[4px]' style={{display: trail >= 1 || glotrail >= 1 ? 'flex' : 'none',}}>
                  <div onClick={()=>{setTrail(0); setGlotrail(0)}} style={{}}  className='cursor-pointer'>Generate Quote</div>
                  <FaChevronRight/>
               </div>
      
              <div className='flex items-center gap-[4px]' style={{
                display: trail >= 1 || glotrail >= 1 ? 'flex' : 'none',
                color: trail === 1 || glotrail === 1 ? '#AC0108' : 'initial'
                }} >
                  <div onClick={()=>{setTrail(1); setGlotrail(1)}} className='cursor-pointer'>Reciever Information</div>
                  <FaChevronRight/>
              </div>
      
              <div className='flex items-center gap-[4px]'  style={{
                display: trail >1 || glotrail >1 ? 'flex' : 'none',
                color: trail === 2 || glotrail === 2 ? '#AC0108' : 'initial'
            
            }} >
                  <div  onClick={()=>{setTrail(2); setGlotrail(2)}} className='cursor-pointer' >Parcel Information</div>
                  <FaChevronRight/>
              </div>
      
              <div className='flex items-center gap-[4px]'  style={{
                display: trail >2 ? 'flex' : 'none',
                color: trail === 3 ? '#AC0108' : 'initial'
                }}>
                  <div  onClick={()=>{setTrail(3); setGlotrail(3)}} className='cursor-pointer' >Shipping Summary</div>
                  <FaChevronRight/>
              </div>

              <div className='flex items-center gap-[4px]'  style={{
                display: trail >3 ? 'flex' : 'none',
                color: trail === 4 ? '#AC0108' : 'initial'
                }}>
                  <div  onClick={()=>{setTrail(4); setGlotrail(4)}} className='cursor-pointer' >Checkout</div>
                  <FaChevronRight/>
              </div>
          </section>
          </div>
        )
  }  else {
    return null;
  }
}
