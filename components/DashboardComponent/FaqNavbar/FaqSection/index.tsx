import Image from "next/image";
import { useState } from 'react';

const faqs = [
    {
      id: 1,
      question: "What types of cargo and freight does OAK & D handle?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet. ",
    },
    {
      id: 2,
      question: "What is the cost of shipping goods with OAK & D?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet. ",
    },
    {
      id: 3,
      question: "Can I track my shipment online? If so, how?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet. ",
    },
    {
      id: 4,
      question: "What are the requirements for shipping hazardous",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet. ",
    },
    {
      id: 5,
      question: "What is the maximum weight and size limit for shipments",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet. ",
    },
    {
      id: 6,
      question: "   Does OAK & D offer air or sea freight services?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet. ",
    },
    {
      id: 7,
      question: "  What is the process for scheduling shipment pickup ",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Cras nisi ultricies egestas suscipit aliquet. Senectus porta tortor morbi elit. Fames blandit sodales aliquet sit tincidunt ultrices. Tristique nisi ac feugiat purus consectetur. Id ut iaculis tristique odio malesuada tempus. Ornare eget varius arcu eu nibh imperdiet. ",
    },
  ];

export function FaqSection(){
    const [showAnswer, setShowAnswer] = useState(false);
    const [click, setClick] = useState<string | null>(null);
    const [faaq, SetFaaq] = useState(0);

    function handleRemoveAnswer(id: string){
        setShowAnswer(false);
        setClick(id);
    }

    function handleShowAnswer(id: string){
        setShowAnswer(true);
        setClick(id);

    }



    return (
        <section className="mb-[50px]">
            <h1 className="text-[25px] lg:text-[32px] font-[600] text-[#1E1E1E] mb-[30px] uppercase ">Frequently Asked Questions</h1>
            {faqs.map(faq => {
                return (
                <div className="mb-[30px] border-b-2 border-[#555] pb-[8px]" key={faq.id}>
                    <div className="flex gap-x-[30px] items-center mb-[10px] justify-between ">
                        <p className="text-[18px] font-[600] ">{faq.question}</p>

                        <div onClick={() => {SetFaaq(prev => (prev === faq.id ? 0 : faq.id));}}>
                            <Image src="../img/plus-icon.svg" alt="Plus Icon" width={20} height={20} className={faaq === faq.id ? `hidden` : `block cursor-pointer`} />

                            <Image src="../img/minus-icon.svg" alt="" width={20} height={20} className={faaq !== faq.id ? `hidden` : `block cursor-pointer`} />
                        </div>
                    </div>
                    <div className="text-justify">
                        <p className={faaq === faq.id ? `text-[16px] font-[500]` : `hidden`}>{faq.answer}</p>
                    </div>
                </div> 

                )
            })}
        </section>
    )
}