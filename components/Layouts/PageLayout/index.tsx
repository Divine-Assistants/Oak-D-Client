import React from 'react'
import { Footer } from '../../Footer';
import { Navbar } from '../../Navbar'

interface Layoutprops {
    children: React.ReactNode;
}

export function PageLayout({ children }:Layoutprops) {
  return (
    <>
    <Navbar />
    <div className='h-[100vh]  '>
        {children}
    <Footer />
    </div>
    </>
  )
}
