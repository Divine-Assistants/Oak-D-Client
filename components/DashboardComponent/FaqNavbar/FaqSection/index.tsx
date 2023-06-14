import Image from "next/image";
import { useState } from 'react';

export function FaqSection(){
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <section className="mb-[50px]">
            <h1 className="text-[25px] lg:text-[32px] font-[600] text-[#1E1E1E] mb-[30px] uppercase ">Frequently Asked Questions</h1>

            <div className="mb-[30px]">
                <div className="flex gap-x-[30px] items-center mb-[10px] justify-between ">
                    <p className="text-[14px] font-[700] ">What types of cargo and Shipping does OAK & D handle?</p>
                    <div>
                        <Image src="../img/plus-icon.svg" alt="Plus Icon" width={20} height={20} onClick={()=> setShowAnswer(true)} className={showAnswer ? `hidden` : `block cursor-pointer`} />

                        <Image src="../img/minus-icon.svg" alt="" width={20} height={20} onClick={()=> setShowAnswer(false)} className={!showAnswer ? `hidden` : `block cursor-pointer`} />
                    </div>
                </div>
                <div className="text-justify">
                    <p className={showAnswer ? `text-[14px] font-[500]` : `hidden`}>Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet.</p>
                </div>
            </div> 
        </section>
    )
}