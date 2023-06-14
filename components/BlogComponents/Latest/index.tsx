import { BlogContext } from '@/context/BlogWrapper';
import React, {useContext} from 'react'

type BlogData = {
  topic: string;
  id: number;
  post: string;
  img: string;
  category: string;
};

type BlogDataProps = {
  blogData: BlogData[];
};


export const Latest: React.FC<BlogDataProps> = ({blogData}) => {
   const { selectBp, setSelectBp } = useContext(BlogContext)
  return (
    <section className='mb-[95px] lg:mb-[142px] '>
          <div className='text-[#1E1E1E] w-[90%] md:w-[80%] lg:w-[90%] m-auto lg:flex gap-[149px] '>
               <div id='mostRecent' className='flex flex-col gap-[20px] mb-[95px] lg:w-[50%] cursor-pointer ' key={blogData[0].id}>
                  <div className='h-[369px] w-[100%] lg:h-[602px] bg-black '><img src={blogData[0].img} alt="Latest Blog Post" className='w-[100%] h-[100%] object-cover ' /></div>
                    <h2 className='font-[700] text-[28px] md:text-[32px] lg:text-[40px] '>{blogData[0].topic}</h2>
                    <p className='text-[16px] font-[500] text-ellipsis overflow-hidden h-[192px] md:text-[20px]  '>{blogData[0].post}</p>
               </div>
               <div id='recent' className='flex flex-col gap-[20px] lg:gap-[36px] lg:w-[40%] '>
                    <p className='w-fit text-center text-[26px] md:text-[32px] font-[700] '>Latest</p>
                    {blogData.slice(1,5).map((item)=>{
                      return(
                        <div className='flex items-center gap-[20px] cursor-pointer ' key={item.id} >
                          <div className='w-[45%] h-[119px] md:h-[149px] lg:w-[177px]  '><img src={item.img} alt="Blog Post" className='w-[100%] h-[100%] object-cover ' /></div>
                          <div className='h-[120px] md:h-[150px] w-[50%] text-ellipsis overflow-hidden '> 
                            <h2 className='font-[700] text-[16px] md:text-[20px] lg:text-[24px]'>{item.topic}</h2>
                            <p className='text-[16px] font-semibold md:text-[20px]'>{item.post} </p>
                        </div>
                  </div>
                      )
                    })}
               </div>
          </div>
    </section>
  )
}
