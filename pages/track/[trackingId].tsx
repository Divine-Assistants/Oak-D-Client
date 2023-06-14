import { Map } from '@/components'
import { TrackContext, TrackContextProvider } from '@/context/TrackWrapper'
import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'

export default function Track() {
  const { track,  setTrack } = useContext(TrackContext)
  let trac = track;
  
    const router = useRouter();
    const { trackingId } = router.query ;

  return (
    <>           
         <Map />
    </>
  )
}
