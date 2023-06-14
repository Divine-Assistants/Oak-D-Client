import React, {useContext} from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { DomesticContext } from '@/context/DomesticWrapper'
import { GlobalContext } from '@/context/GlobalWrapper';


interface ScrollToOptions {
  left?: number;
  top?: number;
  behavior?: "auto" | "smooth";
}

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({top: 20, behavior: 'smooth'});
}

export function QuoteBtn() {
  const { trail, setTrail } = useContext(DomesticContext)
  const { glotrail, setGlotrail } = useContext(GlobalContext)

  return (
    <div className='w-[90%] m-auto  ' style={{display: trail || glotrail !== 0? 'none' : 'initial'}}>
    <button 
    className='flex items-center gap-[10px] text-[#FEFEFE] text-[16px] font-[500] px-[50px] py-[21px] bg-[#0A089A] rounded-[15px] m-auto mb-[120px] lg:px-[160px] lg:py-[27px] lg:mr-[10%] '
    onClick={()=>{
      setTrail(1); 
      setGlotrail(1);
      scrollToTop()
    }}
    >
        <p>Proceed to Parcel Information</p> 
        <FaArrowRight />
    </button>
    </div>
  )
}
