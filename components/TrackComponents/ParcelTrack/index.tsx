import { TrackContext } from '@/context/TrackWrapper'
import React, { useContext } from 'react'

export function ParcelTrack() {
    const { track,  setTrack, trackPage, setTrackPage } = useContext(TrackContext)
  return (
<section className=' bg-black' style={{display: trackPage===1? 'block':'none' }} >
                    <div className='bg-[#FEFEFE]/[.85] lg:w-[35%] w-[90%] top-0 left-[5%] absolute lg:top-[330px] lg:left-[100px] lg:py-[29px] py-[15px] text-[#1E1E1E] rounded-[10px] '>
    <div className='lg:mb-[13px] mb-[5px] flex items-center justify-between lg:px-[31px] lg:text-[18px] font-[500]  '>
        <p>Tracking Number</p>
        <p>
            <span>DLSlg</span>
            -
            <span>786543</span>
        </p>
    </div>
    <div className='border border-[#515151] w-[100%] lg:mb-[32px]'></div>
    <div className='w-fit m-auto text-center lg:mb-[32px] '>
            <p className='text-[#0A089A] lg:text-[20px] '>Status</p>
            <p className='text-[#1E1E1E] lg:text-[28px] '>Package In Transit</p>
    </div>
    <div className='lg:w-[90%] m-auto font-[500] lg:text-[18px] text-[16px] px-[5px]  '>
        <div className='flex items-center justify-between lg:mb-[30px] mb-[10px]'>
            <p>Client Name:</p>
            <p>Divine Onyeleonu</p>
        </div>
        <div className='flex items-center justify-between lg:mb-[30px] mb-[10px]'>
            <p>Type Of Shipping:</p>
            <p>Global Shipping</p>
        </div>
        <div className='flex items-center justify-between lg:mb-[30px] mb-[10px]'>
            <p>Departure:</p>
            <p>Lagos Nigeria</p>
        </div>
        <div className='flex items-center justify-between lg:mb-[30px] mb-[10px]'>
            <p>Arrival:</p>
            <p>Lagos Nigeria</p>
        </div>
        <div className='flex items-center justify-between lg:mb-[30px] mb-[10px]'>
            <p>Estimated Time Of Arrival:</p>
            <p><span>13</span>/<span>10</span>/<span>2023</span></p>
        </div>
    </div>
</div>
        </section>
  )
}
