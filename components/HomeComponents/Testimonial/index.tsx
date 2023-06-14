import { testimonials } from '@/utils/testimonials'
import React from 'react'
import { TestimonialSlider } from './TestimonialSlider'

export function Testimonial() {
  return (
    <section className='pb-[200px]'>
             <h2 className='text-[#AC0108] text-[32px] lg:text-[55px] font-[600] w-fit m-auto mb-[40px] lg:mb-[100px] '>Testimonials</h2>
             <TestimonialSlider testimonials={testimonials} />

    </section>
  )
}
