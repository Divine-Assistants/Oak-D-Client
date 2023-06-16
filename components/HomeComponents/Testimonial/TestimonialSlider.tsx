import { testimonials } from "@/utils/testimonials";
import { Avatar } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Testimonial } from ".";
import { MultiTestimonialSlide } from "./MultiTestimonialSlide";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  return (
    <>
      {/* small screens */}
      <Carousel
        showThumbs={false}
        autoPlay
        interval={5000}
        transitionTime={5000}
        infiniteLoop
        className="block lg:hidden"
      >
        {testimonials.map((testimonial) => (
          <div
            className="rounded-[10px] bg-[#F5F5F5] py-[42px] w-[80%] m-auto "
            key={testimonial.id}
          >
            <div className="w-[80%] m-auto flex flex-col gap-[29px] ">
              <div className="w-[79px] h-[58px] ">
                <img
                  src="/img/exclamation.svg"
                  alt="Testimonial"
                  className="w-[100%] h-[100%] "
                />
              </div>
              <p className="text-[16px] font-[500] ">{testimonial.text}</p>
              <div className="flex items-center justify-between ">
                <p className="text-[20px] font-semibold ">{testimonial.name}</p>
                <Avatar name={testimonial.name} src={testimonial.image} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Larger screen */}

      <div className="hidden lg:grid grid-cols-3 gap-[32px]">
        {testimonials.map((testimonial) => (
          <div
            className="rounded-[10px] bg-[#F5F5F5] py-[42px] w-[80%] m-auto "
            key={testimonial.id}
          >
            <div className="w-[80%] m-auto flex flex-col gap-[29px] ">
              <div className="w-[79px] h-[58px] ">
                <img
                  src="/img/exclamation.svg"
                  alt="Testimonial"
                  className="w-[100%] h-[100%] "
                />
              </div>
              <p className="text-[16px] font-[500] ">{testimonial.text}</p>
              <div className="flex items-center justify-between ">
                <p className="text-[20px] font-semibold ">{testimonial.name}</p>
                {/* <Avatar name={testimonial.name} src={testimonial.image} /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
