import React, { useState } from "react";

type Faq = {
  question: string;
  id: number;
  answer: string;
};

type FaqProps = {
  faqs: Faq[];
};

export const FAQ: React.FC<FaqProps> = ({ faqs }) => {
  const [faaq, SetFaaq] = useState(0);
  return (
    <section
      id="FAQ"
      className="bg-[#0A089A] py-[70px] mb-[188px] lg:mb-[375px] "
    >
      <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto text-[#FEFEFE] ">
        <h2 className="font-semibold text-[32px] w-fit mb-[40px] m-auto ">
          FAQ&apos;s
        </h2>
        {faqs.map((faq) => {
          return (
            <div
              className="border-t border-b border-[#FEFEFE] py-[30px] "
              key={faq.id}
            >
              <div className="flex items-center justify-between mb-[10px] ">
                <p className="text-[14px] md:text-[16px] lg:text-[24px] font-[700] ">
                  {faq.question}
                </p>
                <div
                  className="w-[11px] h-[11px] cursor-pointer "
                  onClick={() => {
                    SetFaaq((prev) => (prev === faq.id ? 0 : faq.id));
                  }}
                >
                  <img
                    src="/img/plus.svg"
                    alt="open faq"
                    className="w-[100%] h-[100%] "
                    style={{ display: faaq !== faq.id ? "block" : "none" }}
                  />
                  <img
                    src="/img/minus.svg"
                    alt="close faq"
                    className="w-[100%] h-[100%]"
                    style={{ display: faaq === faq.id ? "block" : "none" }}
                  />
                </div>
              </div>
              <div
                className="text-[14px] font-[500] md:text-[16px] lg:text-[20px]  "
                style={{
                  display: faaq === faq.id ? "block" : "none",
                }}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
