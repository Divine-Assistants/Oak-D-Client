import React from "react";
import { testimonials } from "@/utils/testimonials";
import { Avatar } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};

type TestimonialSliderProps = {
  testimonials: Testimonial[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const MultiTestimonialSlide: React.FC<TestimonialSliderProps> = ({
  testimonials,
}) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className=""
    >
      {testimonials.map((testimonial) => (
        <div
          className="rounded-[10px] bg-[#F5F5F5] py-[42px] w-[25%] m-auto bg-black "
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
    </Carousel>
  );
};
