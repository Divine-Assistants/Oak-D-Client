import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

type blogItem = {
  topic: string;
  id: number;
  post: string;
  img: string;
  category: string;
};

type PostDataProps = {
  selectBp: string;
};

export const Post: React.FC<PostDataProps> = () => {
  return (
    <section className="text-[#1E1E1E">
      <div className="w-[90%] md:w-[80%] lg:w-[90%] mt-[52px] lg:mt-[96px] m-auto  ">
        <h2 className="font-[700] text-[28px] text-center mb-[52px] lg:mb-[94px] lg:text-[64px] ">
          {}
        </h2>
        {/* <div className='h-[266px] mb-[40px] lg:h-[728px] lg:mb-[94px] '><img src={blogData[0].img} alt="" className='w-[100%] h-[100%] ' /></div>
                    <div className='lg:w-[70%] m-auto'>
                        <h3 className='mb-[40px] lg:mb-[17px] font-[700] text-[24px] lg:text-[32px]   '>Introduction</h3>
                        <p className='text-[18px] font-[500] mb-[20px] lg:mb-[51px] lg:text-[24px] '>{blogData[0].post} </p>
                        <div className='h-[266px] mb-[20px] lg:mb-[51px] '><img src={blogData[0].img} alt="" className='w-[100%] h-[100%] ' /></div>
                        <p className='text-[18px] font-[500] mb-[75px] lg:mb-[95px] lg:text-[24px]'>{blogData[0].post} </p>
                    </div> */}
        <div className="border-2 border-[#A1A1A1] mb-[30px] "></div>
        <div className="flex items-center justify-between mb-[82px] lg:mb-[237px] m-auto lg:px-[17.5px] ">
          <button className="rounded-[10px] border-2 border-[#A1A1A1] flex items-center gap-[18px] py-[11px] px-[15px] text-[16px] lg:text-[24px] font-[500] ">
            <p>Copy link</p>
            <FaLink />
          </button>
          <div className="flex items-center gap-[18px] text-[24px] lg:text-[36px]   ">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[90%] m-auto text-[#1E1E1E] ">
        <p className="w-fit text-center text-[26px] font-[700] mb-[20px] md:text-[32px] ">
          Related Post
        </p>
        <div className="flex items-center gap-[32px] lg:gap-[104] flex-wrap ">
          {/* {blogData.slice(0,4).map((item)=>{
                        return(
                            <div className='w-[45%] lg:w-[30%] mb-[32px] flex flex-col gap-[20px] cursor-pointer ' key={item.id}>
                            <div className='w-[100%] h-[164px] md:h-[193px] lg:h-[251px] '><img src={item.img} alt="blog post" className='w-[100%] h-[100%] object-cover ' /></div>
                            <div>
                                <h2 className='font-[700] text-[16px] md:text-[20px] lg:text-[28px]  '>{item.topic}</h2>
                                <p className='text-[13px] md:text-[16px] lg:text-[18px] font-[500] h-[246px] text-ellipsis overflow-hidden '>{item.post} </p>
                            </div>
                        </div>
                        )
                    })} */}
        </div>
      </div>
    </section>
  );
};
